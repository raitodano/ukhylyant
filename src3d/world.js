// The route: a real 3D centre line (heading + height) integrated over distance d.
// Everything is placed by (d, lateral x): world = P(d) + N(d) * x. Lanes stay at x = -2.2 / 0 / 2.2.
export const STEP = 1;
const MAXD = 20000;
const PX = new Float32Array(MAXD + 2), PZ = new Float32Array(MAXD + 2), PY = new Float32Array(MAXD + 2), TH = new Float32Array(MAXD + 2);
export const SEGS = [];   // {s, e, type: 'street'|'corner'|'square'|'bend', k, dir}
let built = 0;

function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
export const CORNER_R = 16;

export function buildRoute(seed = 1709, pool = ['street']) {
  const R = mulberry(seed); SEGS.length = 0;
  let d = 0, n = 0, kind = pool[0];
  const push = (len, type, k = 0, dir = 0) => { SEGS.push({ s: d, e: d + len, type, k, dir, kind }); d += len; };
  const pickKind = () => { let k; do k = pool[(R() * pool.length) | 0]; while (k === kind && pool.length > 1 && R() < 0.7); kind = k; };
  push(150, 'street');
  while (d < MAXD - 400) {
    const dir = R() < 0.5 ? -1 : 1;
    push(Math.PI / 2 * CORNER_R, 'corner', dir / CORNER_R, dir);            // a real 90° corner
    n++;
    if (n % 2 === 1) push(120, 'square');
    pickKind(); push(40 + R() * 40, 'street');
    const bd = R() < 0.5 ? -1 : 1; push(70, 'bend', bd * (0.35 + R() * 0.25) / 70, bd);  // a gentle sweep
    if (R() < 0.5) pickKind(); push(60 + R() * 60, 'street');
  }
  // integrate the centre line
  const corners = SEGS.filter((q) => q.type === 'corner');
  let ci = 0;
  const flatW = (i) => {
    while (ci < corners.length - 1 && i > corners[ci].e + 25) ci++;
    const q = corners[ci]; if (!q) return 1;
    const g = Math.max(q.s - 10 - i, i - q.e - 10, 0);   // distance outside the flat zone
    const t = Math.min(1, g / 20); return t * t * (3 - 2 * t);
  };
  let th = 0, x = 0, z = 0, si = 0, h = 0;
  for (let i = 0; i <= MAXD + 1; i++) {
    while (si < SEGS.length - 1 && i >= SEGS[si].e) si++;
    const sg = SEGS[si];
    PX[i] = x; PZ[i] = z; TH[i] = th;
    PY[i] = h;
    // Lviv is hilly (≈5 % slopes), but junctions are flat so the side street meets the corner cleanly
    const grade = 5.5 / 230 * Math.cos(i / 230) + 2.6 / 97 * Math.cos(i / 97 + 1) + 1.2 / 41 * Math.cos(i / 41);
    h += grade * STEP * flatW(i);
    const k = sg && i >= sg.s && i < sg.e ? sg.k : 0;
    th += k * STEP; x += Math.sin(th) * STEP; z += -Math.cos(th) * STEP;
  }
  built = MAXD;
}
export function segAt(d) {
  let lo = 0, hi = SEGS.length - 1;
  while (lo <= hi) { const m = (lo + hi) >> 1, t = SEGS[m]; if (d < t.s) hi = m - 1; else if (d >= t.e) lo = m + 1; else return t; }
  return null;
}
// frame at distance d: position of the centre line, forward heading, height
export function frame(d, out) {
  if (d < 0) d = 0; if (d > built - 1) d = built - 1;
  const i = d | 0, f = d - i;
  out.x = PX[i] + (PX[i + 1] - PX[i]) * f; out.z = PZ[i] + (PZ[i + 1] - PZ[i]) * f;
  out.y = PY[i] + (PY[i + 1] - PY[i]) * f; out.th = TH[i] + (TH[i + 1] - TH[i]) * f;
  return out;
}
// world position of (d, lateral x, height y above the road)
export function place(d, lx, y, out) {
  const F = frame(d, out); const c = Math.cos(F.th), s = Math.sin(F.th);
  out.wx = F.x + c * lx; out.wz = F.z + s * lx; out.wy = F.y + y;
  return out;
}
