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
        if n.startswith(('upperarm', 'lowerarm')): return 4                                                               # sleeves
        if n.startswith(('spine', 'clavicle')): return 1                                                                  # jacket
        if n.startswith(('pelvis', 'thigh', 'calf')): return 2                                                            # trousers
        if n.startswith(('foot', 'ball')): return 3                                                                       # shoes
        return -1                                                                                                         # decide by height
    waist = None
    R = np.array([reg(n) for n in dom])
    pel = P[np.array([n == 'pelvis' for n in dom])][:, 1].max() if any(n == 'pelvis' for n in dom) else 0.95
    R[R == -1] = np.where(P[R == -1][:, 1] > pel, 1, 2); side = np.array([1 if n.endswith('_l') else -1 if n.endswith('_r') else 0 for n in dom])
    return P, Nn, UV, idx, R, side
def hexc(h): h = h.lstrip('#'); return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))
def paint(variant, style=None):
    P, Nn, UV, idx, R, side = regions()
    base = Image.open(os.path.join(TEX, 'T_Superhero_Male_Ligh.png')).convert('RGB').resize((N, N), Image.LANCZOS)
    mask = Image.new('L', (N, N), 0); md = ImageDraw.Draw(mask)
    stripe = Image.new('L', (N, N), 0); sd = ImageDraw.Draw(stripe)
    sash = Image.new('L', (N, N), 0); kd = ImageDraw.Draw(sash); tie = Image.new('L', (N, N), 0); td = ImageDraw.Draw(tie); emb = Image.new('L', (N, N), 0); ed = ImageDraw.Draw(emb)
    WAIST = P[np.array([R0 == 2 for R0 in R])][:, 1].max() - 0.02
    xs_mean = {s: P[(side == s) & (R == 2)][:, 0].mean() if np.any((side == s) & (R == 2)) else 0 for s in (-1, 1)}
    for t in idx:
        r = np.bincount(R[t], minlength=5).argmax()
        if r == 0: continue
        poly = [(float(UV[i][0] * N), float(UV[i][1] * N)) for i in t]
        md.polygon(poly, fill=int(r) * 50)
        cy = P[t][:, 1].mean(); cx = P[t][:, 0].mean(); cz = P[t][:, 2].mean(); nz = Nn[t].mean(0)[2]
        if r in (1, 2) and abs(cy - WAIST) < 0.045: kd.polygon(poly, fill=255)                          # waist band (sash)
        if r == 1 and abs(cx) < 0.028 and nz > 0.5 and cy > WAIST + 0.05: td.polygon(poly, fill=255)    # tie / placket
        if r == 1 and abs(cx) < 0.07 and nz > 0.4 and cy > WAIST + 0.12: ed.polygon(poly, fill=255)    # embroidery panel
        # outer-seam stripes on sleeves and trousers (track suit)
        n = Nn[t].mean(0); s = side[t[0]]
        if r in (2, 4) and s != 0:
            outward = np.sign(xs_mean[s]) if r == 2 else np.sign(P[t][:, 0].mean())
            if n[0] * outward > 0.955 and abs(n[1]) < 0.35: sd.polygon(poly, fill=255)
    # close small holes inside each clothing region (navel, seams): dilate then erode, per region
    ma = np.asarray(mask).copy()
    for v in (50, 100, 150, 200):
        reg = Image.fromarray(((ma == v) * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(25)).filter(ImageFilter.MinFilter(25))
        ma[(np.asarray(reg) > 0) & (ma == 0)] = v
    mask = Image.fromarray(ma)
    mask = mask.filter(ImageFilter.MaxFilter(7)); stripe = stripe.filter(ImageFilter.MaxFilter(3))
    b = np.asarray(base).astype(np.float32) / 255; m = np.asarray(mask); st = np.asarray(stripe) > 0
    lum = b.mean(2, keepdims=True); shade = np.clip(0.78 + (lum - lum.mean()) * 1.4, 0.55, 1.15)
    rng = np.random.default_rng(7); out = b.copy()
    def cloth(sel, col, tex=None):
        c = np.array(col, np.float32) / 255
        v = c[None, None, :] * shade if tex is None else tex * shade
        out[sel] = v[sel] if v.shape == out.shape else np.broadcast_to(v, out.shape)[sel]
    J, T, S, SL = (m == 50), (m == 100), (m == 150), (m == 200)          # jacket, trousers, shoes, sleeves
    if variant == 'tck':   # TCK: Ukrainian-style pixel camouflage (MM-14-like palette)
        cam = np.zeros((N, N, 3), np.float32); cam[:] = np.array((96, 104, 66)) / 255
        for colr, k in (((128, 124, 86), 900), ((62, 74, 46), 900), ((44, 46, 36), 500)):
            for _ in range(k):
                x, y = rng.integers(0, N, 2); w, h = rng.integers(4, 18, 2); cam[y:y + h, x:x + w] = np.array(colr) / 255
        cloth(J | T | SL, None, cam); cloth(S, (24, 24, 24))
    else:
        st_ = style
        cloth(J, hexc(st_['suit'])); cloth(SL, hexc(st_.get('arm', st_['suit']))); cloth(T, hexc(st_['pants'])); cloth(S, hexc(st_['shoe']))
        if st_.get('arm') and st_['arm'].lower() in ('#e8b894', '#f0c4a4'): out[SL] = b[SL]                    # bare arms: keep the skin
        if st_['pants'].lower() in ('#e8b894', '#e9c3a3'): out[T] = b[T]                                       # bare legs under a dress
        if st_.get('stripe'): out[st & (SL | T)] = np.array(hexc(st_['stripe'])) / 255 * 0.95
        if st_.get('dots'):
            dots = np.zeros((N, N), bool); yy, xx = np.mgrid[0:N, 0:N]
            dots = (((xx % 26) - 13) ** 2 + ((yy % 26) - 13) ** 2) < 20
            out[dots & (J | SL)] = np.array(hexc(st_['dots'])) / 255
        if st_.get('sash'): out[np.asarray(sash) > 0] = np.array(hexc(st_['sash'])) / 255
        if st_.get('tie'): out[(np.asarray(tie) > 0) & J] = np.array(hexc(st_['tie'])) / 255
        if st_.get('emb'):
            e = np.asarray(emb) > 0; yy, xx = np.mgrid[0:N, 0:N]; pat = ((xx // 6 + yy // 6) % 3 == 0) | ((xx // 6 - yy // 6) % 4 == 0)
            out[e & pat & J] = np.array(hexc(st_['emb'])) / 255
            cuff = SL & ((yy % 40) < 6); out[cuff] = np.array(hexc(st_['emb'])) / 255 * 0.9
    img = Image.fromarray((np.clip(out, 0, 1) * 255).astype(np.uint8))
    rough = Image.open(os.path.join(TEX, 'T_Superhero_Male_Roughness.png')).convert('L').resize((N, N), Image.LANCZOS)
    ra = np.asarray(rough).copy(); ra[m > 0] = 225 if variant == 'tck' else 205; ra[m == 150] = 120 if variant == 'tck' else 150
    return img, Image.fromarray(ra)
def jpg(img, q):
    b = io.BytesIO(); img.save(b, 'JPEG', quality=q, optimize=True); return 'data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()
if __name__ == '__main__':
    import re
    html = open(os.path.join(ROOT, 'web', 'index.html')).read(); blk = html[html.index('const SKINS=['):]; blk = blk[:blk.index('];')]
    styles = {}
    for mm in re.finditer(r"\{id:'(\w+)'.*?s:\{([^}]*)\}", blk, re.S):
        styles[mm.group(1)] = {k: v for k, v in re.findall(r"(\w+):'([^']*)'", mm.group(2))}
    styles['poroshenko']['tie'] = '#7a1f2b'; styles['yatsenyuk']['tie'] = '#2b4f8a'
    out = {'skins': {}}
    for sid, sty in styles.items():
        c, r = paint('runner', sty); out['skins'][sid] = jpg(c, 82)
        if sid == 'ukh': out['runner'] = {'c': out['skins'][sid], 'r': jpg(r.convert('RGB'), 70)}; c.save(os.path.join(BUILD, 'runner_preview.jpg'))
        c.resize((256, 256)).save(os.path.join(BUILD, f'skin_{sid}.jpg'))
    c, r = paint('tck'); out['tck'] = {'c': jpg(c, 85), 'r': jpg(r.convert('RGB'), 70)}; c.save(os.path.join(BUILD, 'tck_preview.jpg'))
    nrm = Image.open(os.path.join(TEX, 'Normals Unity - Godot', 'T_Superhero_Male_Normal.png')).convert('RGB').resize((N, N), Image.LANCZOS)
    out['normal'] = jpg(nrm, 85)
    for k in ('character', 'anims', 'hair'):
        out[k] = 'data:model/gltf-binary;base64,' + base64.b64encode(open(os.path.join(BUILD, k + '.glb'), 'rb').read()).decode()
    with open(os.path.join(ROOT, 'web', 'assets', 'people.js'), 'w') as f:
        f.write('/* CC0 characters & animations by Quaternius (quaternius.com), clothes painted for this game; see web/assets/CREDITS.txt */\n(window.UKH_ASSETS = window.UKH_ASSETS || {}).people = ' + json.dumps(out) + ';\n')
    print('people.js', os.path.getsize(os.path.join(ROOT, 'web', 'assets', 'people.js')) // 1024, 'KB')
