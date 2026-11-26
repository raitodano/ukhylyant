// Vehicles built from smooth lofted bodies (a superellipse cross-section swept along a side profile, with tumblehome),
// clear-coated paint, tinted glass that reflects the sky, chrome, alloy wheels, real tyres, lights and Ukrainian plates.
// Geometry is cached per type and merged into the chunk buffers (paint colour = vertex colour), so cars cost few draw calls.
import { BufferGeometry, Float32BufferAttribute, LatheGeometry, CylinderGeometry, BoxGeometry, SphereGeometry, PlaneGeometry, Vector2,
  MeshPhysicalMaterial, MeshStandardMaterial, CanvasTexture, SRGBColorSpace } from 'three';

import { GB } from './geo.js';
import { Group, Mesh, Matrix4 } from 'three';
const lerp = (a, b, t) => a + (b - a) * t, clamp = (v, a, b) => v < a ? a : v > b ? b : v;
function interp(pts, x) {   // piecewise-linear over [[x, y], …] sorted by x
  if (x <= pts[0][0]) return pts[0][1];
  for (let i = 1; i < pts.length; i++) if (x <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; const t = (x - x0) / (x1 - x0); return lerp(y0, y1, t * t * (3 - 2 * t)); }
  return pts[pts.length - 1][1];
}
// o: { L, W, clear, top: [[x, y]…], belt, n, tumble, round, glass(x, y, z, yTop, w) }
function loft(o, NX = 30, NA = 20) {
  const P = [], rings = [];
  for (let i = 0; i <= NX; i++) {
    const t = i / NX, x = -o.L / 2 + t * o.L, yT = interp(o.top, x), yB = o.clear + (o.lift || 0) * Math.pow(Math.abs(x) / (o.L / 2), 6);
    const e = clamp((o.L / 2 - Math.abs(x)) / o.round, 0, 1), k = Math.sqrt(1 - (1 - e) * (1 - e)), sh = 0.55 + 0.45 * k;
    const mid = (yB + yT) / 2, hh = (yT - yB) / 2, w = o.W / 2, ring = [];
    for (let a = 0; a < NA; a++) {
      const ang = a / NA * Math.PI * 2, c = Math.cos(ang), s = Math.sin(ang);
      let y = mid + hh * Math.sign(s) * Math.pow(Math.abs(s), 2 / o.n), z = w * Math.sign(c) * Math.pow(Math.abs(c), 2 / o.n);
      if (y > o.belt && yT > o.belt + 0.05) z *= 1 - o.tumble * Math.pow((y - o.belt) / (yT - o.belt), 1.4);
      y = mid + (y - mid) * (0.75 + 0.25 * sh); z *= sh;
      ring.push(P.length / 3); P.push(x, y, z);
    }
    rings.push({ ring, x, yT });
  }
  const paint = [], glass = [];
  const quad = (a, b, c, d) => {
    const cx = (P[a * 3] + P[c * 3]) / 2, cy = (P[a * 3 + 1] + P[c * 3 + 1]) / 2, cz = (P[a * 3 + 2] + P[c * 3 + 2]) / 2;
    const r = rings[Math.round((cx + o.L / 2) / o.L * NX)], dst = o.glass && o.glass(cx, cy, cz, r.yT, o.W / 2) ? glass : paint;
    dst.push(a, b, c, a, c, d);
  };
  for (let i = 0; i < NX; i++) for (let a = 0; a < NA; a++) { const r0 = rings[i].ring, r1 = rings[i + 1].ring, b = (a + 1) % NA; quad(r0[a], r1[a], r1[b], r0[b]); }
  for (const [ri, flip] of [[0, true], [NX, false]]) {   // end caps
    const r = rings[ri].ring, c = P.length / 3; let sx = 0, sy = 0; for (const v of r) { sx += P[v * 3 + 1]; } P.push(rings[ri].x, sx / r.length, 0);
    for (let a = 0; a < NA; a++) { const b = (a + 1) % NA; if (flip) paint.push(c, r[b], r[a]); else paint.push(c, r[a], r[b]); }
  }
  const mk = (idx) => { const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(P, 3)); g.setIndex(idx); g.computeVertexNormals(); g.setAttribute('uv', new Float32BufferAttribute(new Float32Array(P.length / 3 * 2), 2)); return g; };
  // make both share one set of smooth normals (no seam at the glass line)
  const all = mk(paint.concat(glass)), pg = mk(paint), gg = mk(glass);
  pg.setAttribute('normal', all.attributes.normal); gg.setAttribute('normal', all.attributes.normal);
  return { paint: pg, glass: gg };
}
// wheel: tyre (lathe, axis z) + alloy rim with spokes
const TYRE = (() => { const p = []; const R = 1, r = 0.68, w = 0.62; for (const [x, y] of [[r, -w / 2], [0.86, -w / 2 - 0.02], [R - 0.04, -w / 2 + 0.02], [R, -w / 2 + 0.12], [R, w / 2 - 0.12], [R - 0.04, w / 2 - 0.02], [0.86, w / 2 + 0.02], [r, w / 2]]) p.push(new Vector2(x, y)); const g = new LatheGeometry(p, 18); g.rotateX(Math.PI / 2); return g; })();
const RIM = (() => { const g = new CylinderGeometry(0.68, 0.68, 0.5, 18, 1, false); g.rotateX(Math.PI / 2); return g; })();
const HUB = (() => { const g = new CylinderGeometry(0.2, 0.26, 0.56, 10); g.rotateX(Math.PI / 2); return g; })();
const SPOKE = new BoxGeometry(0.12, 0.62, 0.08), BOX = new BoxGeometry(1, 1, 1), BALL = new SphereGeometry(0.5, 12, 8), PLATE = new PlaneGeometry(1, 1);
export const VEHICLE_TYPES = {
  sedan: { L: 4.6, W: 1.8, H: 1.45, wheelR: 0.32, wb: 1.38, belt: 0.92,
    top: [[-2.3, 0.82], [-2.0, 0.98], [-1.55, 1.0], [-1.0, 1.4], [0.15, 1.45], [0.85, 1.0], [1.3, 0.9], [2.3, 0.72]], cabin: [-1.45, 1.0], bp: -0.25 },
  hatch: { L: 4.05, W: 1.76, H: 1.48, wheelR: 0.31, wb: 1.25, belt: 0.92,
    top: [[-2.03, 0.9], [-1.95, 1.3], [-1.7, 1.46], [0.1, 1.48], [0.75, 1.0], [1.2, 0.9], [2.03, 0.72]], cabin: [-1.85, 0.85], bp: -0.35 },
  suv: { L: 4.7, W: 1.9, H: 1.72, wheelR: 0.38, wb: 1.42, belt: 1.12, clear: 0.38,
    top: [[-2.35, 1.0], [-2.25, 1.55], [-2.0, 1.7], [0.45, 1.72], [1.05, 1.2], [1.6, 1.1], [2.35, 0.9]], cabin: [-2.1, 1.1], bp: -0.6 },
  van: { L: 5.2, W: 1.98, H: 2.45, wheelR: 0.36, wb: 1.75, belt: 1.32, clear: 0.36, n: 6,
    top: [[-2.6, 2.4], [-2.5, 2.45], [1.35, 2.45], [1.95, 1.55], [2.35, 1.2], [2.6, 1.0]], cabin: [-2.4, 2.25], bp: 1.25, sideWin: [-1.9, 1.15] },
  bus: { L: 11.5, W: 2.5, H: 3.0, wheelR: 0.5, wb: 3.4, wbF: 3.1, belt: 1.25, clear: 0.34, n: 8, round: 0.35,
    top: [[-5.75, 2.95], [-5.6, 3.0], [5.6, 3.0], [5.75, 2.9]], cabin: [-5.55, 5.7], bp: 99, busWin: true }
};
const cache = {}, wheelCache = {};
function wheelGeo(type, s) {
  const key = type + s; if (wheelCache[key]) return wheelCache[key];
  const r = VEHICLE_TYPES[type].wheelR, gb = new GB(), I = new Matrix4(), dark = [0.012, 0.012, 0.014], rim = [0.36, 0.37, 0.39], hub = [0.05, 0.05, 0.055];
  const add = (g, sx, sy, sz, z, c, f) => { const q = g.clone(); q.scale(sx, sy, sz); if (f) f(q); q.translate(0, 0, z); gb.geo(q, I, c); q.dispose(); };
  add(TYRE, r, r, r * 0.75, 0, dark); add(RIM, r, r, r * 0.5, s * 0.01, rim); add(HUB, r, r, r * 0.5, s * 0.02, hub);
  for (let k = 0; k < 5; k++) add(SPOKE, r, r, r, s * r * 0.29, hub, (q) => { q.translate(0, r * 0.35, 0); q.rotateZ(k * Math.PI * 2 / 5); });
  return (wheelCache[key] = gb.build());
}
// parts in local coords: x forward, y up, z right; origin on the ground at the centre
export function vehicleParts(type) {
  if (cache[type]) return cache[type];
  const T = VEHICLE_TYPES[type], clear = T.clear || 0.3, n = T.n || 3.2;
  const glassFn = (x, y, z, yT, w) => {
    if (y < T.belt + 0.03 || x < T.cabin[0] || x > T.cabin[1]) return false;
    if (T.busWin) return y < 2.55 && (Math.abs(z) > w * 0.6 || x > 5.4 || x < -5.45) && !(Math.abs(((x + 5.5) % 1.6) - 0.8) < 0.06);
    if (y > yT - 0.06 && yT >= T.H - 0.06) return false;               // roof
    if (Math.abs(x - T.bp) < 0.07) return false;                       // B pillar
    if (T.sideWin && Math.abs(z) > w * 0.7 && (x < T.sideWin[0] || x > T.sideWin[1])) return false;
    return true;
  };
  const body = loft({ L: T.L, W: T.W, clear, top: T.top, belt: T.belt, n, tumble: T.busWin ? 0.03 : 0.2, round: T.round || 0.55, lift: 0.12, glass: glassFn }, type === 'bus' ? 48 : 30, type === 'bus' ? 16 : 20);
  const parts = { paint: [body.paint], glass: [body.glass], chrome: [], rubber: [], trim: [], head: [], tail: [], plate: [] };
  const put = (list, g, x, y, z, sx = 1, sy = 1, sz = 1, ry = 0) => { const q = g.clone(); q.scale(sx, sy, sz); if (ry) q.rotateY(ry); q.translate(x, y, z); list.push(q); };
  const wr = T.wheelR, wx = [T.wbF || T.wb, -T.wb], tw = T.W / 2 - 0.16;
  parts.wheelAt = [];
  const mark = (list, n) => { for (let i = list.length - n; i < list.length; i++) list[i].userData.wheel = true; };
  for (const x of wx) for (const s of [-1, 1]) {
    parts.wheelAt.push({ x, y: wr, z: s * tw, s, r: wr });
    put(parts.rubber, TYRE, x, wr, s * tw, wr, wr, wr * 0.75); mark(parts.rubber, 1);
    put(parts.chrome, RIM, x, wr, s * (tw + 0.01), wr, wr, wr * 0.5); mark(parts.chrome, 1);
    put(parts.trim, HUB, x, wr, s * (tw + 0.02), wr, wr, wr * 0.5); mark(parts.trim, 1);
    for (let k = 0; k < 5; k++) { const q = SPOKE.clone(); q.scale(wr, wr, wr); q.translate(0, wr * 0.35, 0); q.rotateZ(k * Math.PI * 2 / 5); q.translate(x, wr, s * (tw + wr * 0.29)); q.userData.wheel = true; parts.trim.push(q); }
  }
  const fx = T.L / 2, hy = type === 'bus' ? 0.75 : clear + (T.belt - clear) * 0.55;
  put(parts.trim, BOX, fx - 0.12, clear + 0.12, 0, 0.16, 0.26, T.W * 0.78);         // front bumper
  put(parts.trim, BOX, -fx + 0.12, clear + 0.12, 0, 0.16, 0.26, T.W * 0.78);        // rear bumper
  put(parts.trim, BOX, fx - 0.02, hy - 0.05, 0, 0.06, 0.16, T.W * 0.42);            // grille
  for (const s of [-1, 1]) {
    put(parts.head, BALL, fx - 0.1, hy, s * T.W * 0.36, 0.14, 0.12, 0.34);
    put(parts.tail, BOX, -fx + 0.03, hy + 0.05, s * T.W * 0.38, 0.06, 0.12, 0.28);
    if (type !== 'bus') { put(parts.paint, BOX, T.cabin[1] - 0.15, T.belt + 0.08, s * (T.W / 2 + 0.06), 0.14, 0.1, 0.16); put(parts.trim, BOX, T.bp + 0.5, T.belt - 0.12, s * (T.W / 2 + 0.01), 0.16, 0.03, 0.03); }
  }
  put(parts.plate, PLATE, fx + 0.002, clear + 0.18, 0, 1, 0.13, 0.52, Math.PI / 2);
  put(parts.plate, PLATE, -fx - 0.002, clear + 0.32, 0, 1, 0.13, 0.52, -Math.PI / 2);
  if (type === 'bus') { for (const x of [3.2, -1.2]) for (const s of [1]) put(parts.glass, BOX, x, 0.35 + 1.1, s * (T.W / 2 + 0.005), 1.2, 2.1, 0.02); }
  cache[type] = parts;
  return parts;
}
// shared materials (clear-coated paint, reflective glass…)
let VM = null, ENV = null;
// vehicles get the sky map directly (stronger than the scene's ambient environment), so paint and glass show reflections
export function setVehicleEnv(tex) { ENV = tex; if (VM) applyEnv(VM); }
function applyEnv(V) { for (const [k, i] of [['paint', 0.55], ['glass', 0.9], ['chrome', 1.1], ['wheel', 0.8]]) { V[k].envMap = ENV; V[k].envMapIntensity = i; V[k].needsUpdate = true; } }
export function vehicleMaterials(hq = true) {
  if (VM && VM.hq === hq) return VM;
  const P = hq ? MeshPhysicalMaterial : MeshStandardMaterial;
  VM = {
    hq,
    paint: new P({ vertexColors: true, metalness: 0.3, roughness: 0.35, ...(hq ? { clearcoat: 1, clearcoatRoughness: 0.06 } : {}) }),
    glass: new MeshStandardMaterial({ vertexColors: true, color: '#2a3642', metalness: 0.9, roughness: 0.04 }),
    chrome: new MeshStandardMaterial({ color: '#d4d7db', metalness: 1, roughness: 0.22 }),
    rubber: new MeshStandardMaterial({ color: '#141416', roughness: 0.92 }),
    trim: new MeshStandardMaterial({ color: '#202124', roughness: 0.55, metalness: 0.1 }),
    head: new MeshStandardMaterial({ color: '#e9eef2', emissive: '#fff4d6', emissiveIntensity: 0.15, metalness: 0.3, roughness: 0.1 }),
    tail: new MeshStandardMaterial({ color: '#7a0f12', emissive: '#ff2a1a', emissiveIntensity: 0.15, roughness: 0.25 }),
    plate: new MeshStandardMaterial({ map: plateAtlas(), roughness: 0.5 }),
    wheel: new MeshStandardMaterial({ vertexColors: true, metalness: 0.6, roughness: 0.4 })
  };
  if (ENV) applyEnv(VM);
  return VM;
}
// Ukrainian number plates: blue flag strip with UA, black letters (8 random plates in one atlas)
function plateAtlas() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256; const g = c.getContext('2d');
  const L = 'ABCEHIKMOPTX', R = () => L[(Math.random() * L.length) | 0], D = () => (Math.random() * 10) | 0;
  for (let i = 0; i < 8; i++) {
    const x = (i % 2) * 256, y = (i >> 1) * 64;
    g.fillStyle = '#f4f4f0'; g.fillRect(x + 2, y + 4, 252, 56); g.strokeStyle = '#111'; g.lineWidth = 2; g.strokeRect(x + 3, y + 5, 250, 54);
    g.fillStyle = '#0057b7'; g.fillRect(x + 4, y + 6, 30, 52); g.fillStyle = '#ffd700'; g.fillRect(x + 4, y + 34, 30, 24);
    g.fillStyle = '#fff'; g.font = '700 13px sans-serif'; g.textAlign = 'center'; g.fillText('UA', x + 19, y + 28);
    g.fillStyle = '#111'; g.font = '700 38px sans-serif'; g.fillText(`${R()}${R()} ${D()}${D()}${D()}${D()} ${R()}${R()}`, x + 145, y + 46);
  }
  const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 4; return t;
}
// plate uv: pick one of the 8 cells
export function plateUV(geo, cell) {
  const uv = geo.attributes.uv, u0 = (cell % 2) / 2, v1 = 1 - (cell >> 1) / 4;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, u0 + uv.getX(i) * 0.5, v1 - 0.25 + uv.getY(i) * 0.25);
  return geo;
}
export const CAR_COLORS = ['#c9cdd2', '#1d1f24', '#f0f0ec', '#7d0f14', '#1e3a6e', '#5b6066', '#2f4a3a', '#b8a27a', '#8e959d', '#a31d1d', '#0f2c4c'];
export const BUS_COLORS = { kyiv: '#1f5ea8', kharkiv: '#d7b52c', lviv: '#2f7b3d', odesa: '#e8e6df', dnipro: '#c63a2a' };
// a standalone vehicle (obstacles): one mesh per material, geometry cached per type + colour
const meshCache = {};
// a standalone vehicle (obstacles, traffic): one mesh per material; with spin=true the wheels are separate meshes
// listed in group.userData.wheels so they can roll (rotation.z -= distance / radius)
export function vehicleMesh(type, color, hq = true, spin = false) {
  const key = type + color + (spin ? 'S' : ''), M = vehicleMaterials(hq);
  if (!meshCache[key]) {
    const parts = vehicleParts(type), I = new Matrix4(), out = {};
    const hex = color.replace('#', ''), lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    const pc = [lin(parseInt(hex.slice(0, 2), 16)), lin(parseInt(hex.slice(2, 4), 16)), lin(parseInt(hex.slice(4, 6), 16))];
    for (const [k, list] of Object.entries(parts)) {
      if (k === 'wheelAt') continue;
      const gb = new GB();
      list.forEach((g) => { if (spin && g.userData.wheel) return; if (k === 'plate') { const q = plateUV(g.clone(), (Math.random() * 8) | 0); gb.geo(q, I, [1, 1, 1]); q.dispose(); } else gb.geo(g, I, k === 'paint' ? pc : [1, 1, 1]); });
      out[k] = gb.build();
    }
    meshCache[key] = out;
  }
  const g = new Group(), wheels = [];
  for (const [k, geo] of Object.entries(meshCache[key])) { if (!geo) continue; const m = new Mesh(geo, M[k]); m.castShadow = k !== 'glass' && k !== 'head' && k !== 'tail' && k !== 'plate'; m.receiveShadow = k === 'paint'; g.add(m); }
  if (spin) for (const w of vehicleParts(type).wheelAt) { const m = new Mesh(wheelGeo(type, w.s), M.wheel); m.position.set(w.x, w.y, w.z); m.castShadow = true; g.add(m); wheels.push({ mesh: m, r: w.r }); }
  g.userData.wheels = wheels;
  return g;
}
// roll the wheels of a vehicle that moved `d` metres forward
export function rollWheels(g, d) { for (const w of g.userData.wheels || []) w.mesh.rotation.z -= d / w.r; }
