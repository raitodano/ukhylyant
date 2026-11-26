#!/usr/bin/env python3
"""Turn the CC0 sources in .asset-cache/ into small JS packs under web/assets/ that the 3D mode loads with <script>
(works from file:///android_asset without fetch). Materials: colour / normal (GL) / roughness JPEGs, resized.
Skies: HDR panoramas → tone-mapped JPEG + sun direction & colour, horizon (fog) colour, measured from the HDR.
Usage: python3 tools/fetch_assets.py && python3 tools/build_assets.py"""
import base64, io, json, math, os
import numpy as np
from PIL import Image
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, '.asset-cache'); OUT = os.path.join(ROOT, 'web', 'assets')
spec = json.load(open(os.path.join(ROOT, 'tools', 'assets.json')))

def jpeg(img, q):
    b = io.BytesIO(); img.save(b, 'JPEG', quality=q, optimize=True, progressive=False); return b.getvalue()
def durl(data): return 'data:image/jpeg;base64,' + base64.b64encode(data).decode()

def read_hdr(path):   # Radiance RGBE with new-style RLE scanlines
    with open(path, 'rb') as f: data = f.read()
    hdr_end = data.index(b'\n\n') + 2
    line_end = data.index(b'\n', hdr_end); res = data[hdr_end:line_end].decode().split()
    H, W = int(res[1]), int(res[3]); p = line_end + 1
    img = np.zeros((H, W, 4), np.uint8)
    for y in range(H):
        assert data[p] == 2 and data[p + 1] == 2; p += 4
        for c in range(4):
            x = 0
            while x < W:
                n = data[p]; p += 1
                if n > 128: n -= 128; img[y, x:x + n, c] = data[p]; p += 1
                else: img[y, x:x + n, c] = np.frombuffer(data[p:p + n], np.uint8); p += n
                x += n
    e = img[..., 3].astype(np.float32)
    f = np.where(img[..., 3] > 0, np.ldexp(1.0, (e - 136).astype(np.int32)), 0).astype(np.float32)
    return img[..., :3].astype(np.float32) * f[..., None]

def aces(x):
    a, b, c, d, e = 2.51, 0.03, 2.43, 0.59, 0.14
    return np.clip((x * (a * x + b)) / (x * (c * x + d) + e), 0, 1)

def build_sky(key, ph, skey=0.55, tint=None):
    rgb = read_hdr(os.path.join(CACHE, 'sky', f'{ph}_2k.hdr')); H, W, _ = rgb.shape
    lum = rgb @ np.array([0.2126, 0.7152, 0.0722], np.float32)
    # sun: brightest spot of the upper hemisphere (blurred a little so a bright cloud edge does not win)
    up = lum[:H // 2]; small = up.reshape(H // 16, 8, W // 8, 8).mean(axis=(1, 3))
    r, c = np.unravel_index(np.argmax(small), small.shape); sy, sx = r * 8 + 4, c * 8 + 4
    theta = (sy + 0.5) / H * math.pi; phi = (sx + 0.5) / W * 2 * math.pi
    sun = [math.cos(phi) * math.sin(theta), math.cos(theta), math.sin(phi) * math.sin(theta)]
    patch = rgb[max(0, sy - 6):sy + 6, max(0, sx - 6):sx + 6].reshape(-1, 3).mean(0)
    sun_col = (patch / max(patch.max(), 1e-6)).tolist()
    sky_med = float(np.median(lum[: H // 2])); peak_ratio = float(small.max() / max(sky_med, 1e-6))
    # exposure: median of the sky at ~0.45 after the curve; the sun is clamped so it stays a soft glow
    exp_ = skey / max(sky_med, 1e-6)
    ldr = aces(np.minimum(rgb * exp_ * (np.array(tint, np.float32) if tint else 1), 6.0)) ** (1 / 2.2)
    hor = ldr[int(H * 0.47):int(H * 0.5)].reshape(-1, 3).mean(0)
    # below the horizon: fade to the horizon colour (the panoramas have no ground)
    for y in range(H // 2, H):
        t = min(1.0, (y - H / 2) / (H * 0.04)); ldr[y] = ldr[y] * (1 - t) + hor * t
    img = Image.fromarray((ldr * 255 + 0.5).astype(np.uint8)).resize((2048, 1024), Image.LANCZOS)
    meta = {'sun': [round(v, 4) for v in sun], 'sunCol': [round(v, 3) for v in sun_col], 'hor': [round(float(v), 3) for v in hor],
            'elev': round(90 - math.degrees(theta), 1), 'peak': round(peak_ratio, 1), 'src': 'polyhaven:' + ph}
    return durl(jpeg(img, 80)), meta

def tone(img, t):
    if not t: return img
    a = np.asarray(img).astype(np.float32) / 255; g = a.mean(axis=2, keepdims=True)
    a = g + (a - g) * t[1] if t[1] != 1 else a       # saturation
    a = np.clip(a * t[0], 0, 1)                         # brightness
    return Image.fromarray((a * 255).astype(np.uint8))

def build_material(key, m):
    d = os.path.join(CACHE, 'acg', m['acg']); files = os.listdir(d); out = {'tile_m': m['tile_m'], 'src': 'ambientcg:' + m['acg']}
    for suffix, k, q in (('_Color', 'c', 82), ('_NormalGL', 'n', 88), ('_Roughness', 'r', 72)):
        f = [x for x in files if suffix in x]
        if not f: continue
        img = Image.open(os.path.join(d, f[0])).convert('L' if k == 'r' else 'RGB').resize((m['size'], m['size']), Image.LANCZOS)
        if k == 'c': img = tone(img, m.get('tone'))
        out[k] = durl(jpeg(img.convert('RGB'), q))
    return out

if __name__ == '__main__':
    os.makedirs(OUT, exist_ok=True)
    mats = {k: build_material(k, m) for k, m in spec['materials'].items()}
    with open(os.path.join(OUT, 'materials.js'), 'w') as f:
        f.write('/* CC0 materials from ambientCG.com (see tools/assets.json) */\n(window.UKH_ASSETS = window.UKH_ASSETS || {}).materials = ' + json.dumps(mats) + ';\n')
    skies = {}
    for k, s in spec['skies'].items():
        url, meta = build_sky(k, s['ph'], s.get('key', 0.55), s.get('tint')); meta['img'] = url; skies[k] = meta
        print(k, {a: b for a, b in meta.items() if a != 'img'})
    with open(os.path.join(OUT, 'skies.js'), 'w') as f:
        f.write('/* CC0 sky panoramas from polyhaven.com (see tools/assets.json) */\n(window.UKH_ASSETS = window.UKH_ASSETS || {}).skies = ' + json.dumps(skies) + ';\n')
    for n in os.listdir(OUT): print(n, os.path.getsize(os.path.join(OUT, n)) // 1024, 'KB')
