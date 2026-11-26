#!/usr/bin/env python3
"""Download the CC0 source assets used by the 3D mode into .asset-cache/ (not committed).
ambientCG (https://ambientcg.com) materials and Poly Haven (https://polyhaven.com) skies are CC0 1.0.
Usage: python3 tools/fetch_assets.py [asset ids...]   (no ids = the list in tools/assets.json)"""
import json, os, ssl, sys, urllib.request, zipfile, io
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, '.asset-cache')
ctx = ssl.create_default_context(cafile=os.environ.get('SSL_CERT_FILE') or None)
def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'ukhylyant-asset-fetch/1.0'})
    with urllib.request.urlopen(req, context=ctx, timeout=120) as r: return r.read()
def acg(aid, res='1K-JPG'):
    out = os.path.join(CACHE, 'acg', aid)
    if os.path.isdir(out) and os.listdir(out): return out
    os.makedirs(out, exist_ok=True)
    data = get(f'https://ambientcg.com/get?file={aid}_{res}.zip')
    with zipfile.ZipFile(io.BytesIO(data)) as z:
        for n in z.namelist():
            if any(k in n for k in ('_Color', '_NormalGL', '_Roughness', '_Opacity', '_Metalness')) and n.lower().endswith(('.jpg', '.png')):
                with open(os.path.join(out, os.path.basename(n)), 'wb') as f: f.write(z.read(n))
    return out
def polyhaven_sky(aid, res='2k'):
    out = os.path.join(CACHE, 'sky'); os.makedirs(out, exist_ok=True)
    p = os.path.join(out, f'{aid}_{res}.hdr')
    if not os.path.exists(p):
        files = json.loads(get(f'https://api.polyhaven.com/files/{aid}'))
        with open(p, 'wb') as f: f.write(get(files['hdri'][res]['hdr']['url']))
    return p
if __name__ == '__main__':
    ids = sys.argv[1:]
    spec = json.load(open(os.path.join(ROOT, 'tools', 'assets.json'))) if not ids else None
    for aid in (ids or [m['acg'] for m in spec['materials'].values()]):
        if aid.startswith('ph:'): print(polyhaven_sky(aid[3:])); continue
        print(acg(aid))
    if not ids:
        for s in spec['skies'].values(): print(polyhaven_sky(s['ph']))
