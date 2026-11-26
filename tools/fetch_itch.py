#!/usr/bin/env python3
"""Download a free (CC0) Quaternius pack from itch.io into .asset-cache/itch/<pack>/ (not committed).
Follows itch.io's own free-download flow ("No thanks, just take me to the downloads").
Usage: python3 tools/fetch_itch.py universal-base-characters [file-name-filter]"""
import http.cookiejar, json, os, re, ssl, sys, urllib.parse, urllib.request
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ctx = ssl.create_default_context(cafile=os.environ.get('SSL_CERT_FILE') or None)
jar = http.cookiejar.CookieJar()
op = urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx), urllib.request.HTTPCookieProcessor(jar))
op.addheaders = [('User-Agent', 'Mozilla/5.0 (asset fetch for a CC0 game project)')]
def get(u, data=None, hdr=None):
    req = urllib.request.Request(u, data=urllib.parse.urlencode(data).encode() if data is not None else None, headers=hdr or {})
    with op.open(req, timeout=300) as r: return r.read(), r.geturl()
def main(pack, filt=''):
    base = f'https://quaternius.itch.io/{pack}'
    html, _ = get(base); html = html.decode()
    csrf = re.search(r'name="csrf_token" value="([^"]+)"', html) or re.search(r'csrf_token"\s*content="([^"]+)"', html)
    csrf = csrf.group(1)
    j, _ = get(base + '/download_url', {'csrf_token': csrf}, {'X-Requested-With': 'XMLHttpRequest'}); dl = json.loads(j)['url']
    page, _ = get(dl); page = page.decode()
    csrf2 = (re.search(r'csrf_token"\s*(?:value|content)="([^"]+)"', page) or re.search(r'name="csrf_token" value="([^"]+)"', page)).group(1)
    ups = re.findall(r'data-upload_id="(\d+)"', page)
    names = re.findall(r'class="upload_name"[^>]*>.*?<strong[^>]*title="([^"]+)"', page, re.S)
    print('uploads:', list(zip(ups, names)))
    out = os.path.join(ROOT, '.asset-cache', 'itch', pack); os.makedirs(out, exist_ok=True)
    for uid, name in zip(ups, names):
        if filt and filt.lower() not in name.lower(): continue
        p = os.path.join(out, name)
        if os.path.exists(p): print('have', p); continue
        j, _ = get(f'{base}/file/{uid}?source=game_download&after_download_lightbox=1&as_props=1', {'csrf_token': csrf2}, {'X-Requested-With': 'XMLHttpRequest', 'Referer': dl})
        r = json.loads(j)
        if 'url' not in r: print('response:', str(r)[:300]); continue
        url = r['url']; print('cdn host:', urllib.parse.urlparse(url).hostname)
        data, _ = get(url); open(p, 'wb').write(data); print('saved', p, len(data))
if __name__ == '__main__': main(*sys.argv[1:])
