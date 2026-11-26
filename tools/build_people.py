#!/usr/bin/env python3
"""Paint clothes onto the CC0 Quaternius "Universal Base Characters" body (texture-space, by bone weights) and pack the
character + animations into web/assets/people.js. Run tools/build_people.mjs first (it writes the pruned .glb files).
Runner: black track suit with white stripes, white sneakers. TCK: pixel-camo uniform, black boots."""
import base64, io, json, os, struct
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, '.asset-cache', 'itch', 'ubc', 'Universal Base Characters[Standard]', 'Base Characters')
GL = os.path.join(SRC, 'Godot - UE'); TEX = os.path.join(SRC, 'Textures'); BUILD = os.path.join(ROOT, '.asset-cache', 'people')
N = 1024
CT = {5120: np.int8, 5121: np.uint8, 5122: np.int16, 5123: np.uint16, 5125: np.uint32, 5126: np.float32}
NC = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4}
def accessor(g, binb, i):
    a = g['accessors'][i]; bv = g['bufferViews'][a['bufferView']]; dt = CT[a['componentType']]; n = NC[a['type']]
    off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); stride = bv.get('byteStride', 0) or n * np.dtype(dt).itemsize
    raw = np.frombuffer(binb, np.uint8, count=stride * (a['count'] - 1) + n * np.dtype(dt).itemsize, offset=off)
    arr = np.lib.stride_tricks.as_strided(raw.view(np.uint8), shape=(a['count'], n * np.dtype(dt).itemsize), strides=(stride, 1)).copy().view(dt).reshape(a['count'], n)
    if a.get('normalized') and dt != np.float32: arr = arr.astype(np.float32) / np.iinfo(dt).max
    return arr
def regions():
    g = json.load(open(os.path.join(GL, 'Superhero_Male_FullBody.gltf'))); binb = open(os.path.join(GL, g['buffers'][0]['uri']), 'rb').read()
    names = [g['nodes'][j]['name'] for j in g['skins'][0]['joints']]
    prim = [m for m in g['meshes'] if m['name'].startswith('Sphere')][0]['primitives'][0]; at = prim['attributes']
    P, Nn, UV, J, W = (accessor(g, binb, at[k]) for k in ('POSITION', 'NORMAL', 'TEXCOORD_0', 'JOINTS_0', 'WEIGHTS_0'))
    idx = accessor(g, binb, prim['indices']).reshape(-1, 3)
    dom = [names[J[i][np.argmax(W[i])]] for i in range(len(P))]
    def reg(n):
        if n in ('Head', 'neck_01') or n.startswith(('hand', 'index', 'middle', 'pinky', 'ring', 'thumb')): return 0      # skin
        if n.startswith(('spine', 'clavicle', 'upperarm', 'lowerarm')): return 1                                          # jacket
        if n.startswith(('pelvis', 'thigh', 'calf')): return 2                                                            # trousers
        if n.startswith(('foot', 'ball')): return 3                                                                       # shoes
        return -1                                                                                                         # decide by height
    waist = None
    R = np.array([reg(n) for n in dom])
    pel = P[np.array([n == 'pelvis' for n in dom])][:, 1].max() if any(n == 'pelvis' for n in dom) else 0.95
    R[R == -1] = np.where(P[R == -1][:, 1] > pel, 1, 2); side = np.array([1 if n.endswith('_l') else -1 if n.endswith('_r') else 0 for n in dom])
    return P, Nn, UV, idx, R, side
def paint(variant):
    P, Nn, UV, idx, R, side = regions()
    base = Image.open(os.path.join(TEX, 'T_Superhero_Male_Ligh.png')).convert('RGB').resize((N, N), Image.LANCZOS)
    mask = Image.new('L', (N, N), 0); md = ImageDraw.Draw(mask)
    stripe = Image.new('L', (N, N), 0); sd = ImageDraw.Draw(stripe)
    xs_mean = {s: P[(side == s) & (R == 2)][:, 0].mean() if np.any((side == s) & (R == 2)) else 0 for s in (-1, 1)}
    for t in idx:
        r = np.bincount(R[t], minlength=4).argmax()
        if r == 0: continue
        poly = [(float(UV[i][0] * N), float(UV[i][1] * N)) for i in t]
        md.polygon(poly, fill=int(r) * 60)
        # outer-seam stripes on sleeves and trousers (track suit)
        n = Nn[t].mean(0); s = side[t[0]]
        if r in (1, 2) and s != 0:
            outward = np.sign(xs_mean[s]) if r == 2 else np.sign(P[t][:, 0].mean())
            if n[0] * outward > 0.955 and abs(n[1]) < 0.35: sd.polygon(poly, fill=255)
    mask = mask.filter(ImageFilter.MaxFilter(7)); stripe = stripe.filter(ImageFilter.MaxFilter(3))
    b = np.asarray(base).astype(np.float32) / 255; m = np.asarray(mask); st = np.asarray(stripe) > 0
    lum = b.mean(2, keepdims=True); shade = np.clip(0.78 + (lum - lum.mean()) * 1.4, 0.55, 1.15)
    rng = np.random.default_rng(7); out = b.copy()
    def cloth(sel, col, tex=None):
        c = np.array(col, np.float32) / 255
        v = c[None, None, :] * shade if tex is None else tex * shade
        out[sel] = v[sel] if v.shape == out.shape else np.broadcast_to(v, out.shape)[sel]
    if variant == 'runner':
        cloth(m == 60, (28, 30, 36)); cloth(m == 120, (26, 28, 33)); cloth(m == 180, (236, 236, 232))
        out[st & ((m == 60) | (m == 120))] = 0.93
    else:   # TCK: Ukrainian-style pixel camouflage (MM-14-like palette)
        cam = np.zeros((N, N, 3), np.float32); cam[:] = np.array((96, 104, 66)) / 255
        for colr, k in (((128, 124, 86), 900), ((62, 74, 46), 900), ((44, 46, 36), 500)):
            for _ in range(k):
                x, y = rng.integers(0, N, 2); w, h = rng.integers(4, 18, 2); cam[y:y + h, x:x + w] = np.array(colr) / 255
        cloth((m == 60) | (m == 120), None, cam); cloth(m == 180, (24, 24, 24))
    img = Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))
    rough = Image.open(os.path.join(TEX, 'T_Superhero_Male_Roughness.png')).convert('L').resize((N, N), Image.LANCZOS)
    ra = np.asarray(rough).copy(); ra[m > 0] = 225 if variant == 'tck' else 205; ra[m == 180] = 120 if variant == 'tck' else 150
    return img, Image.fromarray(ra)
def jpg(img, q):
    b = io.BytesIO(); img.save(b, 'JPEG', quality=q, optimize=True); return 'data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()
if __name__ == '__main__':
    out = {}
    for v in ('runner', 'tck'):
        c, r = paint(v); out[v] = {'c': jpg(c, 85), 'r': jpg(r.convert('RGB'), 70)}
        c.save(os.path.join(BUILD, v + '_preview.jpg'))
    nrm = Image.open(os.path.join(TEX, 'Normals Unity - Godot', 'T_Superhero_Male_Normal.png')).convert('RGB').resize((N, N), Image.LANCZOS)
    out['normal'] = jpg(nrm, 85)
    for k in ('character', 'anims', 'hair'):
        out[k] = 'data:model/gltf-binary;base64,' + base64.b64encode(open(os.path.join(BUILD, k + '.glb'), 'rb').read()).decode()
    with open(os.path.join(ROOT, 'web', 'assets', 'people.js'), 'w') as f:
        f.write('/* CC0 characters & animations by Quaternius (quaternius.com), clothes painted for this game; see web/assets/CREDITS.txt */\n(window.UKH_ASSETS = window.UKH_ASSETS || {}).people = ' + json.dumps(out) + ';\n')
    print('people.js', os.path.getsize(os.path.join(ROOT, 'web', 'assets', 'people.js')) // 1024, 'KB')
