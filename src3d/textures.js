// All textures are drawn on canvases at start-up: no external assets, works offline (also from file:///android_asset).
// Every surface gets a colour map plus a normal map (derived from a height canvas) and, where it matters, a roughness map,
// so MeshStandardMaterial can light bumps and make glass/wet stone reflect the sky.
import { CanvasTexture, SRGBColorSpace, NoColorSpace, RepeatWrapping, ClampToEdgeWrapping, LinearMipmapLinearFilter } from 'three';

export function canvas(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  if (draw) draw(c.getContext('2d'), w, h);
  return c;
}
export function tex(c, { srgb = true, repeatU = true, repeatV = true, aniso = 8 } = {}) {
  const t = new CanvasTexture(c);
  t.colorSpace = srgb ? SRGBColorSpace : NoColorSpace;
  t.wrapS = repeatU ? RepeatWrapping : ClampToEdgeWrapping;
  t.wrapT = repeatV ? RepeatWrapping : ClampToEdgeWrapping;
  t.minFilter = LinearMipmapLinearFilter; t.anisotropy = aniso;
  return t;
}
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
export function reseed(s) { seed = (s % 2147483646) + 1; }

// normal map from a height canvas (Sobel), tangent space, wraps at the edges
export function normalFrom(hc, strength = 2, wrap = true) {
  const w = hc.width, h = hc.height, src = hc.getContext('2d').getImageData(0, 0, w, h).data;
  const out = canvas(w, h), og = out.getContext('2d'), img = og.createImageData(w, h), d = img.data;
  const H = (x, y) => { if (wrap) { x = (x + w) % w; y = (y + h) % h; } else { x = Math.max(0, Math.min(w - 1, x)); y = Math.max(0, Math.min(h - 1, y)); } return src[(y * w + x) * 4] / 255; };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const dx = (H(x + 1, y - 1) + 2 * H(x + 1, y) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x - 1, y) + H(x - 1, y + 1));
    const dy = (H(x - 1, y + 1) + 2 * H(x, y + 1) + H(x + 1, y + 1)) - (H(x - 1, y - 1) + 2 * H(x, y - 1) + H(x + 1, y - 1));
    let nx = -dx * strength, ny = dy * strength, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
    const i = (y * w + x) * 4; d[i] = (nx * 0.5 + 0.5) * 255; d[i + 1] = (ny * 0.5 + 0.5) * 255; d[i + 2] = (nz * 0.5 + 0.5) * 255; d[i + 3] = 255;
  }
  og.putImageData(img, 0, 0);
  return out;
}
// paint the same shapes into several layers at once: colour, height, roughness, emissive
function layers(w, h, base) {
  const L = {};
  for (const k of ['c', 'h', 'r', 'e']) { L[k] = canvas(w, h); const g = L[k].getContext('2d'); g.fillStyle = base[k]; g.fillRect(0, 0, w, h); L[k + 'g'] = g; }
  L.rect = (x, y, rw, rh, s) => { for (const k of ['c', 'h', 'r', 'e']) if (s[k] != null) { L[k + 'g'].fillStyle = s[k]; L[k + 'g'].fillRect(x, y, rw, rh); } };
  L.path = (fn, s) => { for (const k of ['c', 'h', 'r', 'e']) if (s[k] != null) { const g = L[k + 'g']; g.fillStyle = s[k]; g.beginPath(); fn(g); g.fill(); } };
  L.noise = (k, a, n = 2600, sz = 2) => { const g = L[k + 'g']; for (let i = 0; i < n; i++) { const v = rnd(); g.fillStyle = `rgba(${v < 0.5 ? '0,0,0' : '255,255,255'},${a * rnd()})`; g.fillRect(rnd() * w, rnd() * h, sz, sz); } };
  return L;
}
const grey = (v) => `rgb(${v | 0},${v | 0},${v | 0})`;
function finish(L, { normal = 2.2, srgbE = true } = {}) {
  return { map: tex(L.c), normal: tex(normalFrom(L.h, normal), { srgb: false }), rough: tex(L.r, { srgb: false }), emissive: tex(L.e, { srgb: srgbE }) };
}

// ---------------------------------------------------------------- roads
// u spans the 6.8 m road (u = (x + 3.4) / 6.8), v repeats every 5 m. Rails at the lane centres where a city has trams.
export function roadTextures({ cobble, rails, markings }) {
  const w = 512, h = 384, L = layers(w, h, { c: cobble ? '#6f655b' : '#4a4b4e', h: grey(90), r: grey(cobble ? 200 : 225), e: '#000' });
  if (cobble) {
    const rows = 18, sh = h / rows;
    for (let r = 0; r < rows; r++) {
      let x = (r % 2) * 9 - 9;
      while (x < w) {
        const sw = 18 + rnd() * 12, c = 100 + rnd() * 50 | 0, hv = 150 + rnd() * 60;
        L.path((g) => g.roundRect(x + 1.5, r * sh + 1.5, sw - 3, sh - 3, 6), { c: `rgb(${c + 12},${c + 2},${c - 10})`, h: grey(hv), r: grey(150 + rnd() * 60) });
        L.path((g) => g.roundRect(x + 5, r * sh + 4, sw - 10, sh - 9, 5), { h: grey(hv + 25) });
        x += sw;
      }
    }
  } else {
    L.noise('c', 0.25, 26000, 2); L.noise('h', 0.5, 30000, 1); L.noise('r', 0.3, 9000, 3);
    for (let i = 0; i < 6; i++) { const x = rnd() * w, y = rnd() * h; L.path((g) => g.ellipse(x, y, 20 + rnd() * 50, 8 + rnd() * 20, rnd() * 3, 0, 7), { c: 'rgba(30,30,32,0.25)' }); }   // patches
    if (markings) for (const lane of [-1.1, 1.1]) { const u = (lane + 3.4) / 6.8 * w; L.rect(u - 3, 0, 6, h * 0.6, { c: '#d8d8d2', h: grey(110), r: grey(150) }); }
    for (const e of [0.6, 6.2]) { const u = e / 6.8 * w; L.rect(u - 2.5, 0, 5, h, { c: '#cfcfc8', h: grey(105), r: grey(160) }); }
  }
  if (rails) for (const lane of [-2.2, 0, 2.2]) for (const q of [-0.72, 0.72]) {
    const u = (lane + q + 3.4) / 6.8 * w;
    L.rect(u - 6, 0, 12, h, { c: '#3f3c3a', h: grey(60), r: grey(170) });
    L.rect(u - 2.5, 0, 5, h, { c: '#b9bcc0', h: grey(140), r: grey(55) });
  }
  const t = finish(L, { normal: cobble ? 3 : 1.4 });
  for (const k of ['map', 'normal', 'rough']) t[k].wrapS = ClampToEdgeWrapping;
  return t;
}
export function sidewalkTextures(stone) {
  const w = 256, h = 256, L = layers(w, h, { c: stone ? '#c3baac' : '#b9b6b0', h: grey(150), r: grey(215), e: '#000' });
  const n = stone ? 4 : 8, s = w / n;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const v = (stone ? 175 : 182) + rnd() * 30 | 0;
    L.rect(i * s + 2, j * s + 2, s - 4, s - 4, { c: `rgb(${v + 6},${v},${v - 8})`, h: grey(170 + rnd() * 30) });
  }
  L.noise('c', 0.12, 9000, 2); L.noise('h', 0.25, 9000, 1);
  return finish(L, { normal: 2 });
}
export function grassTextures() {
  const w = 256, h = 256, L = layers(w, h, { c: '#5d7f3a', h: grey(120), r: grey(240), e: '#000' });
  for (let i = 0; i < 9000; i++) { const v = rnd(); L.rect(rnd() * w, rnd() * h, 2, 3, { c: v < 0.5 ? '#4b6d2e' : '#6f9446', h: grey(80 + v * 120) }); }
  return finish(L, { normal: 1.5 });
}

// ---------------------------------------------------------------- facades
// One texture tile = 4 bays × 2 floors, so windows can differ (curtains, lit/unlit at night). The wall colour comes from the
// vertex colour (white plaster in the map), so one texture serves the whole palette of a city.
export const FAMILY = {
  austro: { bw: 1.9, fh: 3.3 }, stalinka: { bw: 2.4, fh: 3.3 }, classic: { bw: 2.2, fh: 3.6 }, panel: { bw: 2.6, fh: 2.8 },
  constructivist: { bw: 3.0, fh: 3.1 }, modern: { bw: 1.6, fh: 3.0 }, brick: { bw: 1.9, fh: 3.2 }
};
export function facadeTextures(kind) {
  const F = FAMILY[kind], BW = 96, BH = Math.round(BW * F.fh / F.bw), w = BW * 4, h = BH * 2;
  const L = layers(w, h, { c: '#f2efe9', h: grey(150), r: grey(230), e: '#000' });
  if (kind === 'brick') {
    const rows = Math.round(h / 7);
    for (let r = 0; r < rows; r++) for (let x = (r % 2) * -6; x < w; x += 12) { const v = 170 + rnd() * 60 | 0; L.rect(x + 0.5, r * 7 + 0.5, 11, 6, { c: `rgb(${v},${v - 20},${v - 30})`, h: grey(165 + rnd() * 25) }); }
  } else if (kind !== 'modern') { L.noise('c', 0.07, 14000, 2); L.noise('h', 0.18, 12000, 2); }
  const glass = (x, y, ww, wh, lit, curtain) => {
    L.rect(x, y, ww, wh, { c: '#2c3a4c', h: grey(70), r: grey(35), e: lit ? (rnd() < 0.5 ? '#ffc977' : '#ffe0a8') : '#000' });
    if (curtain) L.rect(x + 2, y + 2, ww * (0.3 + rnd() * 0.3), wh - 4, { c: curtain, r: grey(200), e: lit ? '#e8a05a' : null });
    L.rect(x + ww * 0.08, y + 3, ww * 0.18, wh - 6, { c: 'rgba(160,190,220,0.25)' });   // sky glint
  };
  for (let fy = 0; fy < 2; fy++) for (let bx = 0; bx < 4; bx++) {
    const x0 = bx * BW, y0 = fy * BH, lit = rnd() < 0.55, cur = rnd() < 0.5 ? pick(['#e9e2d0', '#d9c7a8', '#c9d4dc', '#b98b7a']) : null;
    if (kind === 'austro' || kind === 'brick' || kind === 'classic' || kind === 'stalinka') {
      const ww = BW * (kind === 'stalinka' ? 0.46 : kind === 'classic' ? 0.44 : 0.5), wh = BH * (kind === 'classic' ? 0.6 : 0.55), wx = x0 + (BW - ww) / 2, wy = y0 + BH * 0.2;
      if (kind === 'brick') L.path((g) => { g.moveTo(wx - 6, wy + 2); g.arc(wx + ww / 2, wy + 2, ww / 2 + 6, Math.PI, 0); g.closePath(); }, { c: '#8c4a36', h: grey(185) });
      else L.rect(wx - 8, wy - 16, ww + 16, 9, { c: '#f8f5ee', h: grey(220) });                                   // hood
      if (kind === 'classic') L.path((g) => { g.moveTo(wx - 10, wy - 16); g.lineTo(wx + ww / 2, wy - 34); g.lineTo(wx + ww + 10, wy - 16); g.closePath(); }, { c: '#f8f5ee', h: grey(225) });
      L.rect(wx - 5, wy - 5, ww + 10, wh + 10, { c: '#fbf8f2', h: grey(200), r: grey(170) });                       // frame
      glass(wx, wy, ww, wh, lit, cur);
      L.rect(wx + ww / 2 - 2, wy, 4, wh, { c: '#f4f1ea', h: grey(190), r: grey(170), e: '#000' }); L.rect(wx, wy + wh * 0.36, ww, 4, { c: '#f4f1ea', h: grey(190), r: grey(170), e: '#000' });
      L.rect(wx - 9, wy + wh + 4, ww + 18, 7, { c: '#e3ddd0', h: grey(230) });                                    // sill
      if (kind === 'stalinka') { L.rect(wx - 4, wy + wh + 16, ww + 8, BH * 0.12, { c: '#e9e3d6', h: grey(185) }); L.rect(x0, y0 + BH - 5, BW, 5, { h: grey(110) }); }
    } else if (kind === 'panel') {
      const ww = BW * 0.52, wh = BH * 0.46, wx = x0 + (BW - ww) / 2, wy = y0 + BH * 0.24;
      L.rect(x0, y0, 2, BH, { c: '#9c9a94', h: grey(80) }); L.rect(x0, y0, BW, 2, { c: '#9c9a94', h: grey(80) });   // panel seams
      L.rect(wx - 3, wy - 3, ww + 6, wh + 6, { c: '#eeeeea', h: grey(120), r: grey(170) });
      glass(wx, wy, ww, wh, lit, cur); L.rect(wx + ww * 0.6, wy, 3, wh, { c: '#eeeeea', e: '#000' });
      if (bx % 2 === 1) L.rect(x0 + 4, wy + wh + 6, BW - 8, BH * 0.2, { c: '#d9d6cf', h: grey(205) });            // balcony slab front
    } else if (kind === 'constructivist') {
      const wy = y0 + BH * 0.28, wh = BH * 0.42;
      glass(x0, wy, BW, wh, lit, cur);
      for (let i = 0; i < 4; i++) L.rect(x0 + i * BW / 4, wy, 3, wh, { c: '#e9e6df', h: grey(190), r: grey(170), e: '#000' });
      L.rect(x0, wy - 4, BW, 4, { c: '#e9e6df', h: grey(200) }); L.rect(x0, wy + wh, BW, 5, { c: '#e9e6df', h: grey(210) });
    } else if (kind === 'modern') {
      L.rect(x0, y0, BW, BH, { c: '#a8bccf', h: grey(120), r: grey(18), e: lit && rnd() < 0.7 ? '#f3e6c8' : '#000' });
      L.rect(x0 + 6, y0 + 6, BW * 0.3, BH - 20, { c: 'rgba(255,255,255,0.18)' });
      L.rect(x0, y0 + BH - 14, BW, 14, { c: '#5f6b78', h: grey(160), r: grey(80), e: '#000' });                 // spandrel
      L.rect(x0, y0, 3, BH, { c: '#3a434d', h: grey(185), r: grey(60), e: '#000' });                            // mullion
    }
  }
  return { ...finish(L, { normal: kind === 'modern' ? 0.6 : 2.4 }), bw: F.bw * 4, fh: F.fh * 2 };
}
function pick(a) { return a[(rnd() * a.length) | 0]; }

export function roofTextures(flat) {
  const w = 256, h = 256, L = layers(w, h, { c: flat ? '#6c6a66' : '#a8492f', h: grey(120), r: grey(flat ? 235 : 160), e: '#000' });
  if (flat) { L.noise('c', 0.3, 20000, 2); L.noise('h', 0.5, 20000, 2); for (let i = 0; i < 4; i++) L.rect(0, i * 64, w, 2, { c: '#56544f', h: grey(170) }); }
  else for (let r = 0; r < 10; r++) for (let c = 0; c < 11; c++) {
    const x = c * 24 + (r % 2) * 12, y = r * 26, v = rnd();
    L.path((g) => { g.moveTo(x - 12, y); g.lineTo(x + 12, y); g.lineTo(x + 12, y + 20); g.arc(x, y + 20, 12, 0, Math.PI); g.closePath(); }, { c: `rgb(${150 + v * 40 | 0},${62 + v * 18 | 0},${40 + v * 10 | 0})`, h: grey(120 + v * 40) });
    L.path((g) => { g.moveTo(x - 8, y + 2); g.lineTo(x + 2, y + 2); g.lineTo(x + 2, y + 24); g.lineTo(x - 8, y + 20); g.closePath(); }, { h: grey(200) });
  }
  return finish(L, { normal: flat ? 1.2 : 3 });
}

// ---------------------------------------------------------------- small stuff
export function stripeTexture() {
  return tex(canvas(128, 32, (g, w, h) => {
    g.fillStyle = '#f5f5f5'; g.fillRect(0, 0, w, h); g.fillStyle = '#d63028';
    for (let x = -h; x < w + h; x += 32) { g.beginPath(); g.moveTo(x, h); g.lineTo(x + 16, h); g.lineTo(x + 16 + h, 0); g.lineTo(x + h, 0); g.closePath(); g.fill(); }
  }));
}
export function labelTexture(text, bg, fg, w = 256, h = 96) {
  return tex(canvas(w, h, (g) => {
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.fillStyle = fg; g.font = `900 ${h * 0.55}px Rubik, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, w / 2, h / 2 + 2);
  }), { repeatU: false, repeatV: false });
}
export function busTexture() {
  return tex(canvas(256, 128, (g, w, h) => {
    g.fillStyle = '#eef0f2'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#2b3a4e'; for (let i = 0; i < 5; i++) g.fillRect(10 + i * 49, 22, 40, 40);
    g.fillStyle = '#c9ced4'; g.fillRect(0, 92, w, 6);
  }), { repeatU: false, repeatV: false });
}
// soft radial spot: lamp light pools on the ground, snow flakes, sun/moon glow
export function glowTexture() {
  return tex(canvas(128, 128, (g, w, h) => {
    const r = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.35, 'rgba(255,255,255,0.55)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, w, h);
  }), { repeatU: false, repeatV: false });
}
// contact shadow along the foot of walls (cheap ambient occlusion): opaque at v=0, clear at v=1
export function aoTexture() {
  return tex(canvas(8, 64, (g, w, h) => { const r = g.createLinearGradient(0, 0, 0, h); r.addColorStop(0, 'rgba(0,0,0,0.55)'); r.addColorStop(0.4, 'rgba(0,0,0,0.18)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, w, h); }), { repeatU: true, repeatV: false });
}
// soft drifting clouds (fbm value noise), alpha only
export function cloudTexture(cover = 0.5) {
  const n = 256, c = canvas(n, n), g = c.getContext('2d'), img = g.createImageData(n, n), d = img.data;
  const grid = (s) => { const a = []; for (let i = 0; i < s * s; i++) a.push(rnd()); return a; };
  const oct = [[4, 0.5], [8, 0.25], [16, 0.15], [32, 0.1]].map(([s, a]) => ({ s, a, g: grid(s) }));
  const val = (o, x, y) => { const fx = x * o.s, fy = y * o.s, x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0, s = o.s, G = (i, j) => o.g[((j % s + s) % s) * s + ((i % s + s) % s)]; const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty); return (G(x0, y0) * (1 - sx) + G(x0 + 1, y0) * sx) * (1 - sy) + (G(x0, y0 + 1) * (1 - sx) + G(x0 + 1, y0 + 1) * sx) * sy; };
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    let v = 0; for (const o of oct) v += val(o, x / n, y / n) * o.a;
    const a = Math.max(0, Math.min(1, (v - (1 - cover) * 0.75) * 3.2)), i = (y * n + x) * 4;
    d[i] = d[i + 1] = d[i + 2] = 255; d[i + 3] = a * 255;
  }
  g.putImageData(img, 0, 0);
  return tex(c);
}
// shop-sign atlas: city ads in 8 cells (2 × 4); returns the texture and a cell → uv-rectangle helper
export function signAtlas(texts) {
  const w = 512, h = 256, cw = 256, ch = 64;
  const c = canvas(w, h, (g) => {
    const bgs = ['#7a1f1a', '#1f4a36', '#1d355f', '#4b2a55', '#5a3a1a', '#1b1b1b', '#6b5a18', '#234a55'];
    for (let i = 0; i < 8; i++) {
      const x = (i % 2) * cw, y = (i >> 1) * ch, t = texts[i % texts.length] || 'КАВА';
      g.fillStyle = bgs[i]; g.fillRect(x, y, cw, ch); g.strokeStyle = '#e8c878'; g.lineWidth = 3; g.strokeRect(x + 4, y + 4, cw - 8, ch - 8);
      g.fillStyle = '#f6e7b8'; g.font = `800 ${t.length > 9 ? 26 : 34}px Rubik, system-ui, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, x + cw / 2, y + ch / 2 + 2);
    }
  });
  const t = tex(c, { repeatU: false, repeatV: false });
  return { tex: t, uv: (i) => { const x = (i % 2) / 2, y = 1 - ((i >> 1) + 1) / 4; return [x, y, x + 0.5, y + 0.25]; } };
}
