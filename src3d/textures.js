// All textures are drawn on canvases at start-up: no external assets, works offline.
import { CanvasTexture, SRGBColorSpace, RepeatWrapping, ClampToEdgeWrapping, LinearMipmapLinearFilter } from 'three';

function canvas(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  return c;
}
function tex(c, { srgb = true, repeatU = true, repeatV = true } = {}) {
  const t = new CanvasTexture(c);
  if (srgb) t.colorSpace = SRGBColorSpace;
  t.wrapS = repeatU ? RepeatWrapping : ClampToEdgeWrapping;
  t.wrapT = repeatV ? RepeatWrapping : ClampToEdgeWrapping;
  t.minFilter = LinearMipmapLinearFilter; t.anisotropy = 4;
  return t;
}
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

// cobbles across the 6.8 m road, with tram rails at the three lane centres (u = (x + 3.4) / 6.8)
export function cobbleTexture() {
  return tex(canvas(512, 512, (g, w, h) => {
    g.fillStyle = '#7d7064'; g.fillRect(0, 0, w, h);
    const rows = 22, sh = h / rows;
    for (let r = 0; r < rows; r++) {
      let x = (r % 2) * 9 - 9;
      while (x < w) {
        const sw = 16 + rnd() * 12, c = 105 + rnd() * 45 | 0;
        g.fillStyle = `rgb(${c + 12},${c + 2},${c - 10})`;
        g.beginPath(); g.roundRect(x + 1.5, r * sh + 1.5, sw - 3, sh - 3, 5); g.fill();
        g.fillStyle = 'rgba(255,255,255,0.08)'; g.fillRect(x + 4, r * sh + 3, sw - 9, 3);
        x += sw;
      }
    }
    for (const lane of [-2.2, 0, 2.2]) for (const q of [-0.72, 0.72]) {
      const u = (lane + q + 3.4) / 6.8 * w;
      g.fillStyle = '#4a4744'; g.fillRect(u - 5, 0, 10, h);
      g.fillStyle = '#c9ccd0'; g.fillRect(u - 2.5, 0, 5, h);
    }
  }), { repeatU: false });
}
export function sidewalkTexture() {
  return tex(canvas(128, 128, (g, w, h) => {
    g.fillStyle = '#c9c2b6'; g.fillRect(0, 0, w, h);
    g.strokeStyle = '#a79f92'; g.lineWidth = 3;
    for (let i = 0; i <= 2; i++) { g.beginPath(); g.moveTo(0, i * 64); g.lineTo(w, i * 64); g.stroke(); g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, h); g.stroke(); }
  }));
}
// one facade bay (1.9 m x 3.3 m): white wall (tinted per house by vertex colour), window, hood, sill
export function facadeTextures() {
  const draw = (g, w, h, emissive) => {
    g.fillStyle = emissive ? '#000' : '#ffffff'; g.fillRect(0, 0, w, h);
    const wx = w * 0.24, ww = w * 0.52, wy = h * 0.2, wh = h * 0.55;
    if (!emissive) {
      g.fillStyle = '#efe9dc'; g.fillRect(wx - 6, wy - 16, ww + 12, 10);      // hood
      g.fillStyle = '#f7f3ea'; g.fillRect(wx - 5, wy - 5, ww + 10, wh + 10);   // frame
      g.fillStyle = '#2f4058'; g.fillRect(wx, wy, ww, wh);
      g.fillStyle = '#4c6584'; g.fillRect(wx + 4, wy + 4, ww * 0.35, wh - 8);
      g.fillStyle = '#f7f3ea'; g.fillRect(wx + ww / 2 - 2, wy, 4, wh); g.fillRect(wx, wy + wh * 0.38, ww, 4);
      g.fillStyle = '#d9d2c2'; g.fillRect(wx - 8, wy + wh + 4, ww + 16, 6);    // sill
      g.fillStyle = 'rgba(0,0,0,0.06)'; g.fillRect(0, h - 6, w, 6);
    } else {
      g.fillStyle = '#ffcf7a'; g.fillRect(wx, wy, ww, wh);
      g.fillStyle = '#000'; g.fillRect(wx + ww / 2 - 2, wy, 4, wh); g.fillRect(wx, wy + wh * 0.38, ww, 4);
    }
  };
  return { map: tex(canvas(128, 224, (g, w, h) => draw(g, w, h, false))), emissive: tex(canvas(128, 224, (g, w, h) => draw(g, w, h, true))) };
}
export function roofTexture() {
  return tex(canvas(128, 128, (g, w, h) => {
    g.fillStyle = '#a8492f'; g.fillRect(0, 0, w, h);
    for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) {
      g.fillStyle = `rgba(${90 + rnd() * 40 | 0},30,20,0.35)`;
      g.beginPath(); g.arc(c * 16 + (r % 2) * 8, r * 16 + 14, 9, 0, Math.PI); g.fill();
    }
  }));
}
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
