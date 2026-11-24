// Ухилянт — experimental Three.js prototype (Lviv). Gameplay is the same 3-lane logic as the 2D game,
// but the world is real 3D: 90° street corners, slopes, sun shadows, weather and time of day.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, InstancedMesh, Object3D, Color, Fog, Vector3,
  HemisphereLight, DirectionalLight, PointLight, MeshLambertMaterial, MeshPhongMaterial, MeshBasicMaterial, BoxGeometry, CylinderGeometry,
  ConeGeometry, SphereGeometry, CircleGeometry, PlaneGeometry, BackSide, DoubleSide, SRGBColorSpace,
  BufferGeometry, BufferAttribute, LineSegments, LineBasicMaterial, Points, PointsMaterial, AdditiveBlending,
  ACESFilmicToneMapping, PCFShadowMap, DynamicDrawUsage
} from 'three';
import { buildRoute, segAt, frame, place, SEGS, CORNER_R } from './world.js';
import { GB, col, makeFrame, L, LN, box } from './geo.js';
import { cobbleTexture, sidewalkTexture, facadeTextures, roofTexture, stripeTexture, labelTexture, busTexture, glowTexture } from './textures.js';

const $ = (id) => document.getElementById(id);
const LANE = 2.2, BASE = 15, MAXS = 36, G = 32, JV = 11.5, SLIDE_T = 0.62, CH = 50, VIEW = 190, AIR_T = 2 * JV / G;
const clamp = (v, a, b) => v < a ? a : v > b ? b : v, rnd = Math.random, pick = (a) => a[(rnd() * a.length) | 0];
const smooth = (t) => t * t * (3 - 2 * t);

// ---------------------------------------------------------------- renderer (with a graceful fallback)
const cv = $('c');
let renderer;
function fail() { $('fail').classList.remove('hidden'); ['start', 'hud', 'over', 'pause'].forEach((i) => $(i).classList.add('hidden')); state = 'dead'; }
let state = 'start';
try {
  renderer = new WebGLRenderer({ canvas: cv, antialias: true, powerPreference: 'high-performance' });
} catch (e) { renderer = null; }
if (!renderer) { fail(); throw new Error('no WebGL'); }
cv.addEventListener('webglcontextlost', (e) => { e.preventDefault(); fail(); });
let pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
renderer.setPixelRatio(pixelRatio);
renderer.outputColorSpace = SRGBColorSpace;
renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;

const scene = new Scene();
const camera = new PerspectiveCamera(65, 1, 0.3, 260);
scene.fog = new Fog('#cfe3ef', 50, 210);
const hemi = new HemisphereLight('#d8ecff', '#6c5a49', 1.2); scene.add(hemi);
const sun = new DirectionalLight('#fff0d8', 2.6); scene.add(sun); scene.add(sun.target);
sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30, near: 1, far: 190 });
sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.05;
const fill = new DirectionalLight('#9ec4ff', 0.35); scene.add(fill); scene.add(fill.target);   // cool bounce light from the other side
const nearLight = new PointLight('#ffd49a', 0, 16, 1.4); scene.add(nearLight);   // warm street light around the runner at night
const sunDir = new Vector3(-0.45, 0.8, 0.4).normalize();

// sky dome: gradient + sun glow baked into vertex colours (one draw call), a sun/moon disc and stars
const skyGeo = new SphereGeometry(230, 48, 24);
const skyMat = new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false });
const sky = new Mesh(skyGeo, skyMat); sky.renderOrder = -2; scene.add(sky);
const GLOW = glowTexture();
const disc = new Mesh(new CircleGeometry(7, 24), new MeshBasicMaterial({ map: GLOW, color: '#fff4d6', fog: false, transparent: true, depthWrite: false, blending: AdditiveBlending }));
disc.renderOrder = -1; scene.add(disc);
const starGeo = new BufferGeometry(); {
  const a = new Float32Array(450 * 3);
  for (let i = 0; i < 450; i++) { const u = rnd() * Math.PI * 2, v = 0.08 + rnd() * 0.9; const r = 220; a.set([Math.cos(u) * Math.cos(v * 1.5) * r, Math.sin(v * 1.5) * r, Math.sin(u) * Math.cos(v * 1.5) * r], i * 3); }
  starGeo.setAttribute('position', new BufferAttribute(a, 3));
}
const stars = new Points(starGeo, new PointsMaterial({ color: '#ffffff', size: 1.6, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.85, depthWrite: false }));
stars.renderOrder = -1; stars.frustumCulled = false; scene.add(stars);
function paintSky(top, hor, sunCol, glowK) {
  const pos = skyGeo.attributes.position, arr = new Float32Array(pos.count * 3), v = new Vector3(), c = new Color(), sc = new Color(sunCol), below = hor.clone().multiplyScalar(0.8);
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    if (v.y >= 0) c.copy(hor).lerp(top, Math.pow(v.y, 0.55)); else c.copy(hor).lerp(below, Math.min(1, -v.y * 4));
    const d = Math.max(0, v.dot(sunDir));
    c.r += sc.r * (Math.pow(d, 10) * 0.9 + Math.pow(d, 3) * 0.22) * glowK; c.g += sc.g * (Math.pow(d, 10) * 0.9 + Math.pow(d, 3) * 0.22) * glowK; c.b += sc.b * (Math.pow(d, 10) * 0.9 + Math.pow(d, 3) * 0.22) * glowK;
    arr.set([c.r, c.g, c.b], i * 3);
  }
  skyGeo.setAttribute('color', new BufferAttribute(arr, 3));
}

// ---------------------------------------------------------------- shared materials (created once)
const T = { cob: cobbleTexture(), walk: sidewalkTexture(), fac: facadeTextures(), roof: roofTexture(), stripe: stripeTexture(), bus: busTexture() };
const lam = (o) => new MeshLambertMaterial(o);
const M = {
  road: new MeshPhongMaterial({ map: T.cob, specular: '#151515', shininess: 20 }),
  walk: lam({ map: T.walk, vertexColors: true }),
  wall: lam({ map: T.fac.map, vertexColors: true, emissiveMap: T.fac.emissive, emissive: '#ffffff', emissiveIntensity: 0 }),
  roof: lam({ map: T.roof, vertexColors: true }),
  det: lam({ vertexColors: true }),                       // cornices, balconies, shops, benches, trees… (one material)
  iron: lam({ color: '#2a2c31' }),
  lamp: lam({ color: '#fff2c8', emissive: '#ffcf7a', emissiveIntensity: 0.5 }),
  glow: new MeshBasicMaterial({ map: GLOW, color: '#ffbe6a', transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, fog: true }),
  stone: lam({ color: '#a39a8c' }),
  cream: lam({ color: '#efe4c8' }),
  green: lam({ color: '#5f9d8c' }),
  gold: lam({ color: '#e7b84a', emissive: '#6a4a00', emissiveIntensity: 0.4 }),
  dark: lam({ color: '#4f4a46' }),
  stripe: lam({ map: T.stripe }),
  gatePole: lam({ color: '#9aa0a8' }),
  stij: lam({ map: labelTexture('СТІЙ!', '#d63028', '#ffffff'), side: DoubleSide }),
  busBody: lam({ map: T.bus }),
  white: lam({ color: '#eef0f2' }),
  busPlate: lam({ map: labelTexture('ТЦК', '#ffd21f', '#1b1b1b', 192, 56) }),
  glass: new MeshPhongMaterial({ color: '#2b3a4e', specular: '#8899aa', shininess: 90 }),
  tyre: lam({ color: '#1d1d20' }),
  headl: lam({ color: '#fff7d0', emissive: '#fff0b0', emissiveIntensity: 0.6 }),
  shadow: new MeshBasicMaterial({ color: '#000000', transparent: true, opacity: 0.2, depthWrite: false }),
  coin: lam({ color: '#ffcc33', emissive: '#7a5200', emissiveIntensity: 0.6 }),
  clock: lam({ map: labelTexture('XII', '#f7f3ea', '#222', 128, 128), side: DoubleSide }),
  flagB: lam({ color: '#2f6fd6', side: DoubleSide }), flagY: lam({ color: '#ffd21f', side: DoubleSide }),
  rose: lam({ color: '#3d5a8a' })
};
const PASTEL = ['#f0d2a2', '#c8e0d4', '#f2c0ac', '#ddd0ea', '#fae8ae', '#c2d6ea', '#eebc98', '#e8e0cc'];
const AWN = ['#b8322a', '#2f6f4f', '#2c4f86', '#7a3b6e', '#c77a1e'];
const lighten = (c, k = 1.18) => c.map((v) => Math.min(1, v * k + 0.04)), darken = (c, k = 0.62) => c.map((v) => v * k);

// ---------------------------------------------------------------- world chunks (built ahead, disposed behind)
const chunks = new Map();
const F0 = {};
function ribbon(gb, d0, d1, xa, xb, y, cl, uScale, vScale, uFix) {
  for (let d = d0; d < d1; d += 1) {
    const e = Math.min(d + 1, d1);
    const a = place(d, xa, y, {}), b = place(d, xb, y, {}), c = place(e, xb, y, {}), q = place(e, xa, y, {});
    const ua = uFix ? 0 : xa / uScale, ub = uFix ? 1 : xb / uScale;
    gb.quad([a.wx, a.wy, a.wz], [b.wx, b.wy, b.wz], [c.wx, c.wy, c.wz], [q.wx, q.wy, q.wz], [0, 1, 0], [ua, d / vScale], [ub, d / vScale], [ub, e / vScale], [ua, e / vScale], cl);
  }
}
function curb(gb, d0, d1, x, h, cl) {
  for (let d = d0; d < d1; d += 1) {
    const e = Math.min(d + 1, d1), a = place(d, x, 0, {}), b = place(e, x, 0, {});
    const nrm = LN(makeFrame(0, 0, 0, frame(d, F0).th), 0, 0, x > 0 ? -1 : 1);
    gb.quad([a.wx, a.wy, a.wz], [b.wx, b.wy, b.wz], [b.wx, b.wy + h, b.wz], [a.wx, a.wy + h, a.wz], nrm, [0, 0], [1, 0], [1, 0.1], [0, 0.1], cl);
  }
}
// small solids for the merged detail geometry
function oct(gb, Fr, cx, cy, cz, r, cl, ry = r) {
  const P = [[r, 0, 0], [-r, 0, 0], [0, ry, 0], [0, -ry * 0.7, 0], [0, 0, r], [0, 0, -r]];
  for (const a of [0, 1]) for (const b of [2, 3]) for (const c of [4, 5]) {
    const A = P[a], B = P[b], C = P[c], n = LN(Fr, (A[0] + B[0] + C[0]), (A[1] + B[1] + C[1]), (A[2] + B[2] + C[2]));
    const l = Math.hypot(n[0], n[1], n[2]) || 1;
    gb.tri(L(Fr, cx + A[0], cy + A[1], cz + A[2]), L(Fr, cx + B[0], cy + B[1], cz + B[2]), L(Fr, cx + C[0], cy + C[1], cz + C[2]), [n[0] / l, n[1] / l, n[2] / l], [0, 0], [0, 0], [0, 0], cl);
  }
}
function pyr(gb, Fr, cx, cz, y0, y1, r, cl) {   // umbrella / spire: 4 sloped faces + underside
  const c = [[-r, -r], [r, -r], [r, r], [-r, r]];
  for (let i = 0; i < 4; i++) {
    const a = c[i], b = c[(i + 1) % 4], mx = (a[0] + b[0]) / 2, mz = (a[1] + b[1]) / 2, n = LN(Fr, mx, r * 0.9, mz), l = Math.hypot(n[0], n[1], n[2]);
    gb.tri(L(Fr, cx + a[0], y0, cz + a[1]), L(Fr, cx + b[0], y0, cz + b[1]), L(Fr, cx, y1, cz), [n[0] / l, n[1] / l, n[2] / l], [0, 0], [0, 0], [0, 0], cl);
  }
  gb.quad(L(Fr, cx - r, y0, cz - r), L(Fr, cx + r, y0, cz - r), L(Fr, cx + r, y0, cz + r), L(Fr, cx - r, y0, cz + r), [0, -1, 0], [0, 0], [0, 0], [0, 0], [0, 0], darken(cl, 0.7));
}
function tree(gd, Fr, x, z, s) {
  box(gd, Fr, x - 0.14, x + 0.14, 0, 2.6 * s, z - 0.14, z + 0.14, col('#5a4330'), 1, 1, false);
  oct(gd, Fr, x, 3.6 * s, z, 1.9 * s, col('#4f7f3a'), 1.6 * s);
  oct(gd, Fr, x + 0.6 * s, 4.5 * s, z + 0.3 * s, 1.3 * s, col('#5f9445'), 1.2 * s);
  oct(gd, Fr, x - 0.7 * s, 4.1 * s, z - 0.4 * s, 1.2 * s, col('#45733a'), 1.1 * s);
}
function house(gw, gr, gd, gi, d, side, W, rng) {
  const F = frame(d, {}), D = 9, floors = 3 + (rng() < 0.45 ? 1 : 0), H = floors * 3.3 + 0.6;
  const zc = side * (5.8 + D / 2), P = place(d, zc, 0, {});
  const Fr = makeFrame(P.wx, P.wy, P.wz, F.th), cl = col(PASTEL[(rng() * PASTEL.length) | 0]);
  box(gw, Fr, -W / 2, W / 2, -2, H, -D / 2, D / 2, cl, 1.9, 3.3, false);
  // tiled pitched roof (ridge along the street) + gables + a dormer on the street side
  const o = 0.3, rh = 3.2, x0 = -W / 2 - 0.15, x1 = W / 2 + 0.15, za = -D / 2 - o, zb = D / 2 + o;
  const R = (x, y, z) => L(Fr, x, y, z), rc = col(rng() < 0.5 ? '#ffffff' : '#e8d8d0');
  gr.quad(R(x0, H, za), R(x1, H, za), R(x1, H + rh, 0), R(x0, H + rh, 0), LN(Fr, 0, 0.8, -0.6), [x0 / 2, 0], [x1 / 2, 0], [x1 / 2, 2.6], [x0 / 2, 2.6], rc);
  gr.quad(R(x0, H, zb), R(x1, H, zb), R(x1, H + rh, 0), R(x0, H + rh, 0), LN(Fr, 0, 0.8, 0.6), [x0 / 2, 0], [x1 / 2, 0], [x1 / 2, 2.6], [x0 / 2, 2.6], rc);
  for (const x of [-W / 2, W / 2]) gw.tri(R(x, H, -D / 2), R(x, H, D / 2), R(x, H + rh * 0.93, 0), LN(Fr, Math.sign(x), 0, 0), [0.02, 0.02], [0.03, 0.02], [0.025, 0.03], cl);
  if (W > 6.5) { const zs = -side * 2.4; box(gw, Fr, -0.7, 0.7, H + 0.4, H + 1.9, zs - 0.7, zs + 0.7, cl, 1.4, 1.9); }
  // chimneys
  const brick = col('#8a4a3a');
  for (let i = 0, n = 1 + (rng() < 0.5 ? 1 : 0); i < n; i++) { const cx = (rng() - 0.5) * (W - 2), cz = side * (rng() * 2); box(gd, Fr, cx - 0.32, cx + 0.32, H + 1.0, H + rh + 0.9, cz - 0.32, cz + 0.32, brick, 1, 1); box(gd, Fr, cx - 0.4, cx + 0.4, H + rh + 0.9, H + rh + 1.05, cz - 0.4, cz + 0.4, darken(brick, 0.8), 1, 1); }
  // facade relief on the street side: plinth, pilasters, cornices between floors, a heavy top cornice
  const zf = -side * D / 2, out = -side, li = lighten(cl), dk = darken(cl, 0.7);
  const fb = (g, xa, xb, ya, yb, o0, o1, c, top = true) => { const a = zf + out * o0, b = zf + out * o1; box(g, Fr, xa, xb, ya, yb, Math.min(a, b), Math.max(a, b), c, 1, 1, top); };
  fb(gd, -W / 2, W / 2, -2, 0.9, 0, 0.1, dk);
  for (const x of [-W / 2, W / 2 - 0.34]) fb(gd, x, x + 0.34, 0.9, H - 0.4, 0, 0.08, li);
  for (let k = 2; k <= floors; k++) fb(gd, -W / 2 - 0.04, W / 2 + 0.04, -2 + 3.3 * k - 0.14, -2 + 3.3 * k + 0.04, 0, 0.16, li);
  fb(gd, -W / 2 - 0.18, W / 2 + 0.18, H - 0.42, H, 0, 0.38, li);
  // ground floor: a shop with an awning and a sign, or a heavy wooden door
  const bx = rng() < 0.5 ? -0.95 : 0.95;
  if (rng() < 0.5 && W > 6.8) {
    const ac = col(pick(AWN));
    fb(gd, -W / 2 + 0.55, W / 2 - 0.55, 0.14, 2.55, 0, 0.05, col('#2a3442'));             // shop window
    fb(gd, -W / 2 + 0.45, W / 2 - 0.45, 2.55, 2.68, 0, 0.09, col('#3b2b20'));             // frame
    fb(gd, -W / 2 + 0.8, W / 2 - 0.8, 2.7, 3.15, 0, 0.07, darken(ac, 0.8));               // sign board
    const ya = 3.22, yb = 2.62, ob = 1.35;
    gd.quad(R(-W / 2 + 0.4, ya, zf), R(W / 2 - 0.4, ya, zf), R(W / 2 - 0.4, yb, zf + out * ob), R(-W / 2 + 0.4, yb, zf + out * ob), LN(Fr, 0, 0.9, out * 0.45), [0, 0], [0, 0], [0, 0], [0, 0], ac);
    gd.quad(R(-W / 2 + 0.4, yb, zf + out * ob), R(W / 2 - 0.4, yb, zf + out * ob), R(W / 2 - 0.4, yb - 0.28, zf + out * ob), R(-W / 2 + 0.4, yb - 0.28, zf + out * ob), LN(Fr, 0, 0, out), [0, 0], [0, 0], [0, 0], [0, 0], lighten(ac, 1.1));
  } else {
    fb(gd, bx - 0.62, bx + 0.62, 0.14, 2.5, 0, 0.06, col('#4a3020'));
    fb(gd, bx - 0.8, bx + 0.8, 2.5, 2.75, 0, 0.12, li);
    fb(gd, bx - 0.8, bx + 0.8, 0.0, 0.3, 0, 0.45, col('#8f877c'));                          // step
  }
  // wrought-iron balconies
  for (let k = 2; k <= floors; k++) {
    if (rng() > (k === 2 ? 0.6 : 0.3)) continue;
    const yb = -2 + 3.3 * k - 0.1, bw = rng() < 0.4 ? W / 2 - 0.6 : 1.15, cx = bw > 2 ? 0 : bx;
    fb(gd, cx - bw, cx + bw, yb, yb + 0.16, 0, 0.8, col('#b8b0a2'));
    fb(gi, cx - bw, cx + bw, yb + 1.0, yb + 1.05, 0.74, 0.8, [1, 1, 1]);
    for (let x = cx - bw; x <= cx + bw + 0.01; x += 0.24) fb(gi, x - 0.018, x + 0.018, yb + 0.16, yb + 1.0, 0.75, 0.79, [1, 1, 1], false);
    for (const x of [cx - bw, cx + bw]) for (let o2 = 0.1; o2 < 0.75; o2 += 0.24) fb(gi, x - 0.018, x + 0.018, yb + 0.16, yb + 1.0, o2, o2 + 0.04, [1, 1, 1], false);
  }
}
function lantern(gp, gl, gg, d, x) {
  const P = place(d, x, 0, {}), Fr = makeFrame(P.wx, P.wy, P.wz, frame(d, F0).th);
  box(gp, Fr, -0.12, 0.12, 0, 0.5, -0.12, 0.12, [1, 1, 1], 1, 1);
  box(gp, Fr, -0.06, 0.06, 0, 3.9, -0.06, 0.06, [1, 1, 1], 1, 1);
  box(gp, Fr, -0.24, 0.24, 4.55, 4.68, -0.24, 0.24, [1, 1, 1], 1, 1);
  box(gp, Fr, -0.06, 0.06, 4.68, 4.9, -0.06, 0.06, [1, 1, 1], 1, 1);
  box(gl, Fr, -0.17, 0.17, 3.95, 4.55, -0.17, 0.17, [1, 1, 1], 1, 1);
  const r = 3.4, y = 0.16, s = -Math.sign(x) * 0.9;   // warm light pool on the ground (night only)
  gg.quad(L(Fr, -r, y, s - r), L(Fr, r, y, s - r), L(Fr, r, y, s + r), L(Fr, -r, y, s + r), [0, 1, 0], [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
}
function furniture(gd, gi, d, side, rng) {
  const P = place(d, side * 5.0, 0.14, {}), Fr = makeFrame(P.wx, P.wy, P.wz, frame(d, F0).th), r = rng();
  if (r < 0.22) {        // bench
    box(gd, Fr, -0.8, 0.8, 0.42, 0.5, -0.22, 0.22, col('#7a5232'), 1, 1); box(gd, Fr, -0.8, 0.8, 0.5, 0.92, side * 0.2, side * 0.26, col('#7a5232'), 1, 1, true);
    for (const x of [-0.7, 0.7]) box(gi, Fr, x - 0.04, x + 0.04, 0, 0.45, -0.2, 0.2, [1, 1, 1], 1, 1);
  } else if (r < 0.38) { // flower planter
    box(gd, Fr, -0.45, 0.45, 0, 0.55, -0.35, 0.35, col('#8d8478'), 1, 1); oct(gd, Fr, 0, 0.75, 0, 0.45, col(pick(['#c0392b', '#e67e22', '#8e44ad', '#d35480'])), 0.3);
  } else if (r < 0.5) {  // bin
    box(gd, Fr, -0.22, 0.22, 0, 0.85, -0.22, 0.22, col('#2f5d3a'), 1, 1);
  } else if (r < 0.66) { // café table under an umbrella (Lviv!)
    const uc = col(pick(['#f4efe4', '#b8322a', '#2c4f86', '#e7c25a']));
    box(gi, Fr, -0.03, 0.03, 0, 2.25, -0.03, 0.03, [1, 1, 1], 1, 1); box(gd, Fr, -0.35, 0.35, 0.72, 0.76, -0.35, 0.35, col('#e8e2d6'), 1, 1);
    pyr(gd, Fr, 0, 0, 2.05, 2.6, 1.15, uc);
    for (const x of [-0.6, 0.6]) { box(gd, Fr, x - 0.2, x + 0.2, 0.42, 0.46, -0.2, 0.2, col('#3b2b20'), 1, 1); box(gd, Fr, x + Math.sign(x) * 0.17, x + Math.sign(x) * 0.21, 0.46, 0.9, -0.2, 0.2, col('#3b2b20'), 1, 1); }
  } else if (r < 0.74) { // street-name plate post
    box(gi, Fr, -0.04, 0.04, 0, 2.6, -0.04, 0.04, [1, 1, 1], 1, 1); box(gd, Fr, -0.5, 0.5, 2.3, 2.6, -0.03, 0.03, col('#1f4f8a'), 1, 1);
  }
}
function landmark(group, kind, d, x) {
  const F = frame(d, {}), P = place(d, x, 0, {}), g = new Group();
  g.position.set(P.wx, P.wy, P.wz); g.rotation.y = Math.PI / 2 - F.th; group.add(g);
  const add = (geo, mat, px, py, pz) => { const m = new Mesh(geo, mat); m.position.set(px, py, pz); m.castShadow = true; m.receiveShadow = true; g.add(m); return m; };
  const side = Math.sign(x);
  if (kind === 'opera') {   // neo-Renaissance opera house with a green dome and a figure on top
    add(new BoxGeometry(30, 15, 20), M.cream, 0, 6.5, 0);
    add(new BoxGeometry(31, 0.8, 21), M.white, 0, 14.2, 0);
    add(new BoxGeometry(18, 3, 3), M.cream, 0, 15.5, -side * 8.5);
    add(new BoxGeometry(20, 1.2, 4), M.stone, 0, 0.4, -side * 11.5);
    for (let i = 0; i < 8; i++) add(new CylinderGeometry(0.45, 0.5, 11, 10), M.white, -10.5 + i * 3, 5.5, -side * 10.6);
    for (const sx of [-13, 13]) add(new BoxGeometry(2, 4, 2), M.gold, sx, 19, -side * 8.5);
    const dome = add(new SphereGeometry(6, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.green, 0, 14, 0);
    add(new CylinderGeometry(0.25, 0.4, 3, 8), M.gold, 0, 21.5, 0); add(new SphereGeometry(0.7, 10, 8), M.gold, 0, 23.4, 0);
    return dome;
  }
  if (kind === 'spires') {  // neo-gothic church with twin spires
    add(new BoxGeometry(14, 14, 24), M.stone, 0, 5, side * 4);
    add(new ConeGeometry(9.5, 6, 4, 1), M.dark, 0, 15, side * 4).rotation.y = Math.PI / 4;
    for (const tx of [-5, 5]) { add(new BoxGeometry(4, 28, 4), M.stone, tx, 12, -side * 8); add(new ConeGeometry(2.6, 18, 4), M.dark, tx, 35, -side * 8).rotation.y = Math.PI / 4; add(new SphereGeometry(0.35, 8, 6), M.gold, tx, 44.3, -side * 8); }
    add(new CircleGeometry(2.1, 20), M.rose, 0, 12, -side * 10.05).rotation.y = side > 0 ? Math.PI : 0;
    add(new BoxGeometry(2.6, 4.5, 0.4), M.dark, 0, 2.2, -side * 10.0);
    return;
  }
  if (kind === 'ratusha') { // town hall with the tower, clock and the flag
    add(new BoxGeometry(24, 13, 22), M.cream, 0, 4.5, 0);
    add(new BoxGeometry(25, 0.7, 23), M.white, 0, 11.2, 0);
    add(new BoxGeometry(5.5, 24, 5.5), M.cream, 0, 23, 0);
    add(new BoxGeometry(6.4, 0.6, 6.4), M.white, 0, 33.5, 0);
    add(new CylinderGeometry(2.4, 2.8, 2.5, 8), M.cream, 0, 35, 0);
    add(new ConeGeometry(3.6, 6, 4), M.green, 0, 38.6, 0).rotation.y = Math.PI / 4;
    for (const r of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) { const c = add(new PlaneGeometry(3, 3), M.clock, Math.sin(r) * 2.8, 31, Math.cos(r) * 2.8); c.rotation.y = r; }
    add(new CylinderGeometry(0.08, 0.08, 5, 6), M.iron, 0, 43.5, 0);
    add(new PlaneGeometry(2.6, 0.8), M.flagB, 1.3, 45.4, 0); add(new PlaneGeometry(2.6, 0.8), M.flagY, 1.3, 44.6, 0);
  }
}
function buildChunk(c) {
  const d0 = c * CH, d1 = d0 + CH, group = new Group(), rng = mulberry(c * 7919 + 13);
  const gRoad = new GB(), gWalk = new GB(), gWall = new GB(), gRoof = new GB(), gPole = new GB(), gLamp = new GB(), gDet = new GB(), gGlow = new GB();
  const white = [1, 1, 1], yard = col('#8f8579');
  ribbon(gRoad, d0, d1, -3.4, 3.4, 0, white, 6.8, 5, true);
  for (let d = d0; d < d1;) {
    const sg = segAt(d) || { e: d1, type: 'street' }, e = Math.min(sg.e, d1);
    const wide = sg.type === 'square' ? 34 : sg.type === 'corner' ? 9 : 5.8;
    for (const s of [-1, 1]) {
      if (sg.type === 'corner' && s === -sg.dir) continue;   // outer side of a corner = the junction (drawn with the side street)
      ribbon(gWalk, d, e, s > 0 ? 3.4 : -wide, s > 0 ? wide : -3.4, 0.14, white, 2, 2, false);
      curb(gWalk, d, e, s * 3.4, 0.14, col('#d8d2c6'));
      if (sg.type !== 'square') ribbon(gWalk, d, e, s > 0 ? wide : -18, s > 0 ? 18 : -wide, 0.13, yard, 2, 2, false);
    }
    d = e;
  }
  // tram overhead line: one contact wire over the middle lane + span wires between poles
  for (let d = d0; d < d1; d++) {
    const a = place(d, 0, 6.2, {}), b = place(d + 1, 0, 6.2, {}), n = LN(makeFrame(0, 0, 0, a.th), 0, 0, 0.02);
    gPole.quad([a.wx - n[0], a.wy, a.wz - n[2]], [a.wx + n[0], a.wy, a.wz + n[2]], [b.wx + n[0], b.wy, b.wz + n[2]], [b.wx - n[0], b.wy, b.wz - n[2]], [0, -1, 0], [0, 0], [0, 0], [0, 0], [0, 0], white);
  }
  const blocked = (q) => !q || q.type === 'corner' || q.type === 'square';
  const nearCorner = (d, W = 0) => SEGS.some((q) => q.type === 'corner' && d + W > q.s - 6 && d < q.e + 6);
  for (let d = Math.ceil(d0 / 28) * 28 + 3; d < d1; d += 28) {
    if (blocked(segAt(d)) || nearCorner(d)) continue;
    const P = place(d, 0, 0, {}), Fr = makeFrame(P.wx, P.wy, P.wz, P.th);
    for (const s of [-1, 1]) box(gPole, Fr, -0.09, 0.09, 0, 6.6, s * 5.55 - 0.09, s * 5.55 + 0.09, white, 1, 1);
    box(gPole, Fr, -0.015, 0.015, 6.2, 6.24, -5.5, 5.5, white, 1, 1);
  }
  // houses on both sides, never inside a corner or on a square; furniture on the sidewalks
  for (const s of [-1, 1]) {
    let d = d0 + rng() * 2;
    while (d < d1) {
      const W = 6.5 + rng() * 3.5, sg = segAt(d + W / 2), sgE = segAt(d + W);
      if (!blocked(sg) && !blocked(sgE) && !nearCorner(d, W)) house(gWall, gRoof, gDet, gPole, d + W / 2, s, W, rng);
      d += W + 0.25 + rng() * 0.4;
    }
    for (let d = d0 + 4 + rng() * 6; d < d1; d += 7 + rng() * 9) { const sg = segAt(d); if (sg && sg.type !== 'corner' && sg.type !== 'square' && !nearCorner(d)) furniture(gDet, gPole, d, s, rng); }
  }
  for (let d = Math.ceil(d0 / 14) * 14; d < d1; d += 14) { const sg = segAt(d); if (sg && sg.type !== 'corner') { lantern(gPole, gLamp, gGlow, d, -3.9); lantern(gPole, gLamp, gGlow, d + 7, 3.9); } }
  // a real junction: at each corner the old street carries straight on (stub with houses)
  for (const q of SEGS) {
    if (q.type !== 'corner' || q.s < d0 || q.s >= d1) continue;
    const F = frame(q.s, {}), P = place(q.s, 0, 0, {}), Fr = makeFrame(P.wx, P.wy, P.wz, F.th);
    const R = (x, y, z) => L(Fr, x, y, z);
    const o = -q.dir, up = [0, 1, 0], flat = (g, x0, x1, z0, z1, y, cl) => g.quad(R(x0, y, z0), R(x1, y, z0), R(x1, y, z1), R(x0, y, z1), up, [z0 / 2, x0 / 2], [z0 / 2, x1 / 2], [z1 / 2, x1 / 2], [z1 / 2, x0 / 2], cl);
    // side street carrying straight on; it sits 2 cm under the corner road so they never z-fight
    gRoad.quad(R(0, -0.02, -3.4), R(48, -0.02, -3.4), R(48, -0.02, 3.4), R(0, -0.02, 3.4), up, [0, 0], [0, 9.6], [1, 9.6], [1, 0], white);
    flat(gWalk, -6, 48, o * 3.4, o * 5.8, 0.14, white);            // outer sidewalk, from before the corner on
    flat(gWalk, -6, 48, o * 5.8, o * 18, 0.13, yard);              // outer yard under the houses
    flat(gWalk, -6, 2 * CORNER_R - 10, q.dir * 3.4, q.dir * 16, -0.05, yard);        // ground inside the turn (under the corner road)
    flat(gWalk, 2 * CORNER_R - 10, 48, q.dir * 3.4, q.dir * 5.8, 0.14, white);   // inner sidewalk after the crossing
    flat(gWalk, 2 * CORNER_R - 10, 48, q.dir * 5.8, q.dir * 16, 0.13, yard);
    for (let x = 4; x < 46; x += 8) { const cl = col(pick(PASTEL)); box(gWall, Fr, x, x + 7.6, -2, 10.5 + (x % 3), -q.dir * 15, -q.dir * 6, cl, 1.9, 3.3, true); box(gDet, Fr, x - 0.1, x + 7.7, 10.1 + (x % 3), 10.5 + (x % 3), -q.dir * 6.35, -q.dir * 6, lighten(cl), 1, 1); }
    for (let x = 2 * CORNER_R + 4; x < 46; x += 8) box(gWall, Fr, x, x + 7.6, -2, 10.5, q.dir * 6, q.dir * 15, col(pick(PASTEL)), 1.9, 3.3, true);
    tree(gDet, Fr, 6, q.dir * 9, 1.1); tree(gDet, Fr, 12, q.dir * 11, 0.9);   // a little green on the inside of the turn
  }
  // the square: opera, twin spires, town hall, chestnut trees and benches round the edge
  for (const q of SEGS) {
    if (q.type !== 'square' || q.s < d0 || q.s >= d1) continue;
    landmark(group, 'opera', q.s + 40, -22); landmark(group, 'spires', q.s + 45, 21); landmark(group, 'ratusha', q.s + 98, -21);
  }
  for (let d = Math.ceil(d0 / 11) * 11; d < d1; d += 11) {
    const sg = segAt(d); if (!sg || sg.type !== 'square' || d < sg.s + 6 || d > sg.e - 6) continue;
    const P = place(d, 0, 0.14, {}), Fr = makeFrame(P.wx, P.wy, P.wz, P.th);
    for (const s of [-1, 1]) { tree(gDet, Fr, 0, s * 8.5, 1 + rng() * 0.25); if (rng() < 0.5) furniture(gDet, gPole, d + 4, s, rng); }
  }
  const meshes = [[gRoad, M.road, 0, 1], [gWalk, M.walk, 0, 1], [gWall, M.wall, 1, 1], [gRoof, M.roof, 1, 0], [gPole, M.iron, 1, 0], [gLamp, M.lamp, 0, 0], [gDet, M.det, 1, 1], [gGlow, M.glow, 0, 0]];
  for (const [g, m, cast, recv] of meshes) { const geo = g.build(); if (!geo) continue; const mesh = new Mesh(geo, m); mesh.castShadow = !!cast; mesh.receiveShadow = !!recv; if (m === M.glow) mesh.renderOrder = 1; group.add(mesh); }
  scene.add(group);
  return group;
}
function disposeChunk(g) {
  g.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
  scene.remove(g);
}
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function updateChunks() {
  const a = Math.max(0, Math.floor((dist - 30) / CH)), b = Math.floor((dist + VIEW) / CH);
  for (const [c, g] of chunks) if (c < a || c > b) { disposeChunk(g); chunks.delete(c); }
  for (let c = a; c <= b; c++) if (!chunks.has(c)) { chunks.set(c, buildChunk(c)); break; }   // at most one new chunk per frame (no hitches)
}

// ---------------------------------------------------------------- characters: a jointed rig (hips, knees, shoulders, elbows) + procedural animation
const geoCache = {
  torso: new BoxGeometry(0.6, 0.7, 0.34), hips: new BoxGeometry(0.5, 0.22, 0.3), head: new SphereGeometry(0.19, 14, 10), neck: new BoxGeometry(0.14, 0.12, 0.14),
  upper: new BoxGeometry(0.16, 0.36, 0.17), fore: new BoxGeometry(0.14, 0.33, 0.14), hand: new SphereGeometry(0.075, 8, 6),
  thigh: new BoxGeometry(0.22, 0.47, 0.24), shin: new BoxGeometry(0.19, 0.45, 0.2), shoe: new BoxGeometry(0.22, 0.13, 0.36),
  cap: new SphereGeometry(0.2, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), brim: new BoxGeometry(0.32, 0.035, 0.2), stripe: new BoxGeometry(0.04, 0.5, 0.245), blob: new CircleGeometry(0.55, 20)
};
function figure(colors, label) {
  const mat = (c) => lam({ color: c });
  const suit = mat(colors.suit), pants = mat(colors.pants), skin = mat(colors.skin), hair = mat(colors.hair), shoe = mat(colors.shoe), cap = mat(colors.cap), trim = mat(colors.trim || '#ffffff');
  const g = new Group(), pivot = new Group(), body = new Group();
  pivot.position.y = 0.95; body.position.y = -0.95; g.add(pivot); pivot.add(body);
  const add = (parent, geo, m, x, y, z) => { const o = new Mesh(geo, m); o.position.set(x, y, z); o.castShadow = true; parent.add(o); return o; };
  add(body, geoCache.torso, suit, 0, 1.3, 0); add(body, geoCache.hips, pants, 0, 0.98, 0); add(body, geoCache.neck, skin, 0, 1.69, 0);
  add(body, geoCache.head, colors.face ? skin : hair, 0, 1.86, 0);
  add(body, geoCache.cap, cap, 0, 1.91, 0); add(body, geoCache.brim, cap, 0, 1.93, 0.17);
  const limbs = [];
  for (const s of [-1, 1]) {
    const hip = new Group(); hip.position.set(s * 0.13, 0.95, 0); body.add(hip);
    add(hip, geoCache.thigh, pants, 0, -0.23, 0); if (colors.trim) add(hip, geoCache.stripe, trim, s * 0.1, -0.25, 0);
    const knee = new Group(); knee.position.y = -0.47; hip.add(knee);
    add(knee, geoCache.shin, pants, 0, -0.22, 0); add(knee, geoCache.shoe, shoe, 0, -0.45, 0.06);
    const sho = new Group(); sho.position.set(s * 0.38, 1.58, 0); body.add(sho);
    add(sho, geoCache.upper, suit, 0, -0.17, 0);
    const elb = new Group(); elb.position.y = -0.35; sho.add(elb);
    add(elb, geoCache.fore, suit, 0, -0.16, 0); add(elb, geoCache.hand, skin, 0, -0.35, 0);
    limbs.push({ hip, knee, sho, elb, s });
  }
  if (label) { const p = new Mesh(new PlaneGeometry(0.55, 0.22), lam({ map: labelTexture(label, '#5f6b3a', '#ffd21f', 192, 72) })); p.position.set(0, 1.38, -0.175); p.rotation.y = Math.PI; body.add(p); }
  const blob = new Mesh(geoCache.blob, M.shadow); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.03; g.add(blob);
  g.userData = { pivot, limbs, blob };
  scene.add(g);
  return g;
}
// mode: run | idle | hands | air | flip | roll; t = 0..1 progress of a jump or roll; lean = sideways bank
function animate(g, ph, mode, t = 0, lean = 0, squash = 0) {
  const { pivot, limbs } = g.userData;
  let rx = 0.14, py = 0.95, sc = 1, bob = 0;
  for (const l of limbs) {
    const a = ph + (l.s > 0 ? 0 : Math.PI), sn = Math.sin(a);
    let hip, knee, sho, elb, spread = 0;
    if (mode === 'run') { hip = -0.85 * sn; knee = 0.25 + 1.25 * Math.max(0, Math.cos(a)); sho = 0.85 * sn; elb = -1.35; bob = Math.abs(Math.cos(ph)) * 0.07; }
    else if (mode === 'air' || mode === 'flip') {
      const k = Math.sin(Math.PI * clamp(t, 0, 1));            // tuck in the middle of the jump
      hip = -0.3 - (mode === 'flip' ? 1.6 : 1.0) * k + (l.s > 0 ? -0.25 : 0.2) * (1 - k);
      knee = 0.5 + (mode === 'flip' ? 1.7 : 1.1) * k;
      sho = mode === 'flip' ? -1.0 - 0.6 * k : -2.5 + 0.4 * k; elb = mode === 'flip' ? -1.4 : -0.35; spread = mode === 'flip' ? 0 : 0.35;
      rx = 0.1 + (mode === 'flip' ? Math.PI * 2 * smooth(clamp(t, 0, 1)) : 0.12 * k);
    } else if (mode === 'roll') {
      const k = Math.sin(Math.PI * clamp(t, 0, 1)), e = clamp(t * 6, 0, 1) * clamp((1 - t) * 6, 0, 1);
      hip = -0.4 - 1.5 * e; knee = 0.4 + 1.9 * e; sho = -0.6 - 0.8 * e; elb = -1.7 * e - 0.4;
      rx = 0.14 + Math.PI * 2 * smooth(clamp(t, 0, 1)); py = 0.95 - 0.42 * k; sc = 1 - 0.27 * e;
    } else if (mode === 'hands') { hip = 0; knee = 0.05; sho = -2.9 + Math.sin(ph * 3 + l.s) * 0.1; elb = -0.2; rx = 0; spread = 0.25; }
    else { hip = 0; knee = 0.05; sho = 0.05 * Math.sin(ph * 0.5); elb = -0.25; rx = 0; }
    l.hip.rotation.set(hip, 0, 0); l.knee.rotation.x = knee; l.sho.rotation.set(sho, 0, l.s * (0.08 + spread)); l.elb.rotation.x = elb;
  }
  pivot.rotation.set(rx, 0, -lean);
  pivot.position.y = py + bob;
  pivot.scale.set(sc * (1 + squash * 0.12), sc * (1 - squash * 0.2), sc * (1 + squash * 0.12));
}
const RUNNER = { suit: '#23262f', pants: '#23262f', skin: '#e8b894', hair: '#3a2a1e', shoe: '#f4f4f4', cap: '#c0392b', trim: '#f4f4f4' };
const TCK = { suit: '#5f6b3a', pants: '#4e5830', skin: '#e0a983', hair: '#2e2418', shoe: '#1b1b1b', cap: '#4b5530' };
const runner = figure(RUNNER);
const tck = [figure(TCK, 'ТЦК'), figure(TCK, 'ТЦК')];

// ---------------------------------------------------------------- obstacles, coins
const OG = { bar: new BoxGeometry(2.0, 1.0, 0.5), pole: new BoxGeometry(0.16, 2.75, 0.16), banner: new PlaneGeometry(2.0, 1.2), bus: new BoxGeometry(5.2, 2.35, 2.0), wheel: new CylinderGeometry(0.42, 0.42, 0.3, 14), coin: new CylinderGeometry(0.36, 0.36, 0.08, 18), wind: new PlaneGeometry(1.8, 1.05), plate: new PlaneGeometry(1.5, 0.42), head: new BoxGeometry(0.06, 0.22, 0.32), roofBox: new BoxGeometry(4.6, 0.12, 1.9), mirror: new BoxGeometry(0.1, 0.25, 0.12) };
let obs = [], coinsList = [];
const coinMesh = new InstancedMesh(OG.coin, M.coin, 260); coinMesh.count = 0; coinMesh.frustumCulled = false; coinMesh.castShadow = true; scene.add(coinMesh);
const dummy = new Object3D(), V = {};
function placeObj(o3, d, x, y, yaw = 0) { const P = place(d, x, y, V); o3.position.set(P.wx, P.wy, P.wz); o3.rotation.set(0, Math.PI / 2 - V.th + yaw, 0); }
function makeObstacle(o) {
  const g = new Group(), add = (geo, m, x, y, z) => { const k = new Mesh(geo, m); k.position.set(x, y, z); k.castShadow = true; g.add(k); return k; };
  if (o.t === 'bar') { add(OG.bar, M.stripe, 0, 0.5, 0).rotation.y = Math.PI / 2; }
  else if (o.t === 'gate') { for (const s of [-1.05, 1.05]) add(OG.pole, M.gatePole, 0, 1.37, s); add(OG.banner, M.stij, 0, 1.9, 0).rotation.y = -Math.PI / 2; }
  else if (o.t === 'bus') {
    add(OG.bus, [M.white, M.white, M.white, M.white, M.busBody, M.busBody], 0, 1.53, 0); add(OG.roofBox, M.white, 0.2, 2.76, 0);
    add(OG.wind, M.glass, -2.62, 1.95, 0).rotation.y = -Math.PI / 2; add(OG.plate, M.busPlate, -2.62, 0.75, 0).rotation.y = -Math.PI / 2;
    for (const s of [-0.72, 0.72]) add(OG.head, M.headl, -2.62, 1.05, s);
    for (const s of [-1.07, 1.07]) add(OG.mirror, M.tyre, -2.45, 2.0, s);
    for (const ax of [-1.7, 1.7]) for (const s of [-0.9, 0.9]) add(OG.wheel, M.tyre, ax, 0.42, s).rotation.x = Math.PI / 2;
  }
  else if (o.t === 'patrol') { o.fig = figure({ ...TCK, face: true }); return; }
  scene.add(g); o.mesh = g;
}
function placeObstacles() {
  for (const o of obs) {
    const dc = o.d + o.len / 2;
    if (o.mesh) { placeObj(o.mesh, dc, o.lane * LANE, 0); o.mesh.visible = o.d < dist + VIEW; }
    if (o.fig) { placeObj(o.fig, dc, o.lane * LANE, 0); o.fig.rotation.y = -V.th; animate(o.fig, time * 2 + o.d, 'hands'); o.fig.userData.limbs[0].sho.rotation.x = -2.4 + Math.sin(time * 8 + o.d) * 0.5; }
  }
}
function removeObstacle(o) { if (o.mesh) scene.remove(o.mesh); if (o.fig) { o.fig.traverse((m) => { if (m.isMesh && m.material !== M.shadow) m.material.dispose(); }); scene.remove(o.fig); } }

// ---------------------------------------------------------------- generator (same passable-lane rule as the 2D game)
let nextRow = 0, lastRowEnd = 0;
const isBlock = (k) => k === 'bus' || k === 'patrol';
function inCornerZone(d) { return SEGS.some((q) => q.type === 'corner' && d > q.s - 16 && d < q.e + 12); }
function genRow() {
  let d = nextRow;
  const cz = SEGS.find((q) => q.type === 'corner' && d > q.s - 16 && d < q.e + 12);
  if (cz) { nextRow = cz.e + 12; lastRowEnd = Math.max(lastRowEnd, cz.e + 4); return; }   // corners stay clear
  const diff = Math.min(1, d / 3000), early = d < 180, r = rnd();
  const n = early ? 1 : (r < 0.42 - 0.22 * diff ? 1 : (r < 0.88 - 0.08 * diff ? 2 : 3));
  const lanes = [-1, 0, 1].sort(() => rnd() - 0.5).slice(0, n), kinds = {};
  for (const l of lanes) { const q = rnd(); kinds[l] = early ? (q < 0.4 ? 'bar' : q < 0.7 ? 'gate' : 'bus') : (q < 0.3 ? 'bar' : q < 0.55 ? 'gate' : q < 0.83 ? 'bus' : 'patrol'); }
  if (n === 3) { const bl = lanes.filter((l) => isBlock(kinds[l])); if (bl.length === 3) kinds[pick(bl)] = rnd() < 0.5 ? 'bar' : 'gate'; }
  const pass = [-1, 0, 1].filter((l) => !kinds[l] || !isBlock(kinds[l]));
  const s = lastRowEnd + 3, e = d - 3, pl = pick(pass);
  if (e - s > 4 && rnd() < 0.85) for (let c = Math.max(s, e - 30); c <= e; c += 2.2) if (!inCornerZone(c)) coinsList.push({ d: c, x: pl * LANE, y: 0.9, got: false });
  let len = 0.6;
  for (const l of lanes) {
    const k = kinds[l], o = { t: k, lane: l, d, len: 0.5, y0: 0, y1: 1, hx: 1 };
    if (k === 'gate') Object.assign(o, { len: 0.35, y0: 1.25, y1: 2.6 });
    if (k === 'bus') Object.assign(o, { len: 5.2, y1: 2.7 });
    if (k === 'patrol') Object.assign(o, { len: 0.6, y1: 2.3, hx: 0.55 });
    if (k === 'bar' && rnd() < 0.45) for (let i = -3; i <= 3; i++) coinsList.push({ d: d + 0.25 + i * 1.5, x: l * LANE, y: 0.9 + 1.4 * (1 - (i / 3.5) ** 2), got: false });
    makeObstacle(o); obs.push(o); len = Math.max(len, o.len);
  }
  lastRowEnd = d + len;
  const sp = Math.max(speed, BASE) + 1;
  nextRow = lastRowEnd + sp * (1.3 - 0.45 * diff) + rnd() * sp * 0.45;
}

// ---------------------------------------------------------------- weather: rain / storm (line streaks), snow (points), fog; lightning
const RAIN_N = 1500, SNOW_N = 1600, BOX = { x: 22, y0: -3, y1: 20, z: 22 };
const rainOff = new Float32Array(RAIN_N * 3), rainArr = new Float32Array(RAIN_N * 6);
for (let i = 0; i < RAIN_N; i++) rainOff.set([(rnd() * 2 - 1) * BOX.x, BOX.y0 + rnd() * (BOX.y1 - BOX.y0), (rnd() * 2 - 1) * BOX.z], i * 3);
const rainGeo = new BufferGeometry(); rainGeo.setAttribute('position', new BufferAttribute(rainArr, 3).setUsage(DynamicDrawUsage));
const rain = new LineSegments(rainGeo, new LineBasicMaterial({ color: '#c3cfdc', transparent: true, opacity: 0.5, depthWrite: false }));
rain.frustumCulled = false; rain.visible = false; scene.add(rain);
const snowArr = new Float32Array(SNOW_N * 3);
for (let i = 0; i < SNOW_N; i++) snowArr.set([(rnd() * 2 - 1) * BOX.x, BOX.y0 + rnd() * (BOX.y1 - BOX.y0), (rnd() * 2 - 1) * BOX.z], i * 3);
const snowGeo = new BufferGeometry(); snowGeo.setAttribute('position', new BufferAttribute(snowArr, 3).setUsage(DynamicDrawUsage));
const snow = new Points(snowGeo, new PointsMaterial({ color: '#ffffff', map: GLOW, size: 0.16, transparent: true, depthWrite: false, opacity: 0.95 }));
snow.frustumCulled = false; snow.visible = false; scene.add(snow);
const wrap = (v, a, b) => { const w = b - a; return v < a ? v + w * Math.ceil((a - v) / w) : v >= b ? v - w * Math.ceil((v - b + 1e-6) / w) : v; };
let camVel = { x: 0, y: 0, z: 0 }, flash = 0, nextBolt = 6;
function updateWeather(dt) {
  const W = WX[wx];
  if (rain.visible) {
    const n = W.drops, fall = 24, vx = 2.5 - camVel.x, vy = -fall - camVel.y, vz = 1.0 - camVel.z, k = 0.045;
    for (let i = 0; i < n; i++) {
      const j = i * 3;
      let x = wrap(rainOff[j] + vx * dt, -BOX.x, BOX.x), y = wrap(rainOff[j + 1] + vy * dt, BOX.y0, BOX.y1), z = wrap(rainOff[j + 2] + vz * dt, -BOX.z, BOX.z);
      rainOff[j] = x; rainOff[j + 1] = y; rainOff[j + 2] = z;
      rainArr.set([x, y, z, x - vx * k, y - vy * k, z - vz * k], i * 6);
    }
    rainGeo.attributes.position.needsUpdate = true; rain.position.copy(camera.position);
  }
  if (snow.visible) {
    for (let i = 0; i < SNOW_N; i++) {
      const j = i * 3;
      snowArr[j] = wrap(snowArr[j] + (Math.sin(time * 0.9 + i) * 0.6 - camVel.x) * dt, -BOX.x, BOX.x);
      snowArr[j + 1] = wrap(snowArr[j + 1] + (-1.4 - camVel.y) * dt, BOX.y0, BOX.y1);
      snowArr[j + 2] = wrap(snowArr[j + 2] + (Math.cos(time * 0.7 + i * 1.3) * 0.5 - camVel.z) * dt, -BOX.z, BOX.z);
    }
    snowGeo.attributes.position.needsUpdate = true; snow.position.copy(camera.position);
  }
  // lightning in a storm: a double flash of the sky and the city, thunder a moment later
  if (wx === 'storm') {
    nextBolt -= dt;
    if (nextBolt <= 0) { flash = 1; nextBolt = 4 + rnd() * 7; thunder(0.4 + rnd() * 0.9); }
  }
  if (flash > 0) {
    flash = Math.max(0, flash - dt * 3.2);
    const f = flash > 0.75 || (flash > 0.3 && flash < 0.5) ? flash : 0;
    hemi.intensity = hemiBase + f * 3.5; skyMat.color.setScalar(1 + f * 2.2);
  } else { hemi.intensity = hemiBase; skyMat.color.setScalar(1); }
}

// ---------------------------------------------------------------- time of day × weather
const TOD = {
  day: { top: '#5fa4e4', hor: '#cfe6f5', sunCol: '#fff1dc', sunI: 2.7, hemiSky: '#cfe6ff', hemiGround: '#7a6650', hemiI: 1.15, fill: 0.4, win: 0, lamp: 0.35, dir: [-0.45, 0.8, 0.4], glow: 0.9, disc: '#fff6dc', discS: 1 },
  sunset: { top: '#33497f', hor: '#f4a46c', sunCol: '#ffae6a', sunI: 2.5, hemiSky: '#f1c3a4', hemiGround: '#5a4040', hemiI: 0.85, fill: 0.3, win: 0.55, lamp: 1.3, dir: [-0.8, 0.22, 0.55], glow: 1.4, disc: '#ffd29a', discS: 1.5 },
  night: { top: '#060b1e', hor: '#1d2849', sunCol: '#9fb4ff', sunI: 0.5, hemiSky: '#40528a', hemiGround: '#141420', hemiI: 0.42, fill: 0.15, win: 1.5, lamp: 3.0, dir: [0.35, 0.65, -0.65], glow: 0.35, disc: '#dfe6ff', discS: 0.55 }
};
const WX = {
  clear: { tint: null, mix: 0, sun: 1, near: 50, far: 210, drops: 0 },
  rain: { tint: '#7f8995', mix: 0.62, sun: 0.3, near: 28, far: 150, drops: 900 },
  storm: { tint: '#4b535f', mix: 0.8, sun: 0.15, near: 22, far: 120, drops: RAIN_N },
  snow: { tint: '#d3d9e1', mix: 0.55, sun: 0.45, near: 22, far: 140, drops: 0, snow: true },
  fog: { tint: '#c3c8ce', mix: 0.78, sun: 0.35, near: 6, far: 72, drops: 0 }
};
const TOD_NAMES = { day: ['День', '☀️'], sunset: ['Захід сонця', '🌇'], night: ['Ніч', '🌙'] };
const WX_NAMES = { clear: ['Ясно', '🌤️'], rain: ['Дощ', '🌧️'], storm: ['Гроза', '⛈️'], snow: ['Сніг', '🌨️'], fog: ['Туман', '🌫️'] };
let tod = 'day', wx = 'clear', hemiBase = 1.15;
function applyEnv() {
  const S = TOD[tod], W = WX[wx], nk = tod === 'night' ? 0.2 : tod === 'sunset' ? 0.65 : 1;
  const tint = W.tint ? new Color(W.tint).multiplyScalar(nk) : null;
  const mixc = (c) => { const x = new Color(c); if (tint) x.lerp(tint, W.mix); return x; };
  sunDir.set(...S.dir).normalize();
  const top = mixc(S.top), hor = mixc(S.hor);
  scene.fog.color.copy(hor); scene.fog.near = W.near; scene.fog.far = W.far;
  paintSky(top, hor, S.sunCol, S.glow * (1 - W.mix * 0.95));
  disc.material.color.set(S.disc); disc.scale.setScalar(S.discS); disc.visible = W.mix < 0.5;
  stars.visible = tod === 'night' && W.mix < 0.5;
  sun.color.set(S.sunCol); sun.intensity = S.sunI * W.sun; sun.shadow.intensity = W.mix > 0.5 ? 0.45 : 1;
  fill.intensity = S.fill; fill.color.set(tod === 'sunset' ? '#8fa6ff' : '#9ec4ff');
  hemi.color.copy(mixc(S.hemiSky)); hemi.groundColor.set(S.hemiGround); hemiBase = S.hemiI * (W.mix ? 1.08 : 1); hemi.intensity = hemiBase;
  const gloom = W.mix > 0.6 && tod === 'day';
  M.wall.emissiveIntensity = S.win + (gloom ? 0.3 : 0);
  M.lamp.emissiveIntensity = S.lamp + (W.mix > 0.7 ? 0.9 : 0);
  M.glow.opacity = tod === 'night' ? 0.85 : tod === 'sunset' ? 0.32 : W.mix > 0.7 ? 0.22 : 0;
  M.glow.visible = M.glow.opacity > 0;
  M.coin.emissiveIntensity = tod === 'night' ? 1.1 : 0.6;
  M.headl.emissiveIntensity = tod === 'day' && !gloom ? 0.6 : 2.2;
  const wet = wx === 'rain' || wx === 'storm', sn = !!W.snow;
  M.road.color.set(wet ? '#8d8d8d' : '#ffffff'); M.road.specular.set(wet ? '#7d8796' : '#141414'); M.road.shininess = wet ? 90 : 18;
  M.road.emissive.set(sn ? '#5d6670' : '#000000');
  M.walk.emissive.set(sn ? '#7a828c' : '#000000');
  M.roof.emissive.set(sn ? '#d6dde6' : '#000000'); M.roof.emissiveIntensity = sn ? (tod === 'night' ? 0.22 : 0.62) : 0;
  rain.visible = W.drops > 0; rainGeo.setDrawRange(0, W.drops * 2); rain.material.opacity = tod === 'night' ? 0.3 : 0.5;
  snow.visible = sn;
  renderer.toneMappingExposure = tod === 'night' ? 1.25 : 1.05;
  nearLight.intensity = tod === 'night' ? 26 : (tod === 'sunset' || W.mix > 0.7) ? 6 : 0;
  $('btnNight').textContent = TOD_NAMES[tod][1]; $('btnWx').textContent = WX_NAMES[wx][1];
  rainSound(wet ? (wx === 'storm' ? 0.07 : 0.045) : 0);
}
function cycleTod() { tod = { day: 'sunset', sunset: 'night', night: 'day' }[tod]; applyEnv(); toast(TOD_NAMES[tod][0]); }
function cycleWx() { const k = Object.keys(WX); wx = k[(k.indexOf(wx) + 1) % k.length]; nextBolt = 1.5; applyEnv(); toast(WX_NAMES[wx][0]); }

// ---------------------------------------------------------------- game state
let dist = 0, prevDist = 0, speed = 0, runTime = 0, score = 0, coins = 0, time = 0, chaseT = 0, caughtT = 0;
const p = { lane: 0, prevLane: 0, x: 0, prevX: 0, y: 0, vy: 0, onGround: true, slide: 0, run: 0, inv: 0, stumble: 0, jt: 0, flip: false, jumps: 0, land: 0 };
function reset() {
  for (const o of obs) removeObstacle(o); obs = []; coinsList = [];
  dist = prevDist = 0; speed = 0; runTime = 0; score = 0; coins = 0; chaseT = 3; caughtT = 0;
  Object.assign(p, { lane: 0, prevLane: 0, x: 0, prevX: 0, y: 0, vy: 0, onGround: true, slide: 0, run: 0, inv: 0, stumble: 0, jt: 0, flip: false, jumps: 0, land: 0 });
  nextRow = 60; lastRowEnd = 6;
  for (const [, g] of chunks) disposeChunk(g); chunks.clear();
  camPos = null; camSnap = true;
}
function act(a) {
  if (state !== 'play') return;
  if (a === 'left' || a === 'right') { const nl = clamp(p.lane + (a === 'left' ? -1 : 1), -1, 1); if (nl !== p.lane) { p.prevLane = p.lane; p.lane = nl; beep(500, 0.05, 0.03); } }
  else if (a === 'up' && p.onGround) { p.vy = JV; p.onGround = false; p.slide = 0; p.jt = 0; p.jumps++; p.flip = p.jumps % 3 === 0; beep(320, 0.18, 0.06, 760); }   // every third jump is a front flip
  else if (a === 'down') { if (p.onGround) { if (p.slide <= 0) beep(180, 0.15, 0.04, 90); p.slide = SLIDE_T; } else p.vy = Math.min(p.vy, -24); }
}
function stumble() {
  beep(140, 0.3, 0.15, 45); vib(80);
  if (chaseT > 0) return caught();
  chaseT = 5; p.stumble = 0.5; p.inv = 0.5; toast('ТЦК НА ХВОСТІ!');
}
function caught() { state = 'caught'; caughtT = 0; speed = 0; beep(392, 0.6, 0.1, 196); vib(200); }
function collide() {
  if (p.inv > 0) return;
  const h = p.slide > 0 ? 0.8 : 1.75;
  for (const o of obs) {
    const a = o.d, b = o.d + o.len;
    if (dist + 0.35 < a || prevDist - 0.35 > b) continue;
    const ox = o.lane * LANE, reach = o.hx + 0.38;
    if (Math.abs(p.x - ox) >= reach) continue;
    if (p.y + h <= o.y0 || p.y >= o.y1) continue;
    const wasInD = prevDist + 0.35 >= a && prevDist - 0.35 <= b, wasInX = Math.abs(p.prevX - ox) < reach;
    if (wasInD && !wasInX) { p.lane = p.prevLane; stumble(); } else { dist = Math.max(prevDist, o.d - 0.45); caught(); }
    return;
  }
}
let camPos = null, camSnap = true, shake = 0;
const camTarget = { x: 0, y: 0, z: 0 };
function update(dt) {
  time += dt;
  if (state === 'play') {
    runTime += dt; speed = BASE + (MAXS - BASE) * (1 - Math.exp(-runTime / 110));
    prevDist = dist; dist += speed * dt; score = Math.floor(dist);
    if (chaseT > 0) chaseT -= dt; if (p.inv > 0) p.inv -= dt; if (p.stumble > 0) p.stumble -= dt; if (p.land > 0) p.land -= dt;
    p.prevX = p.x; const tx = p.lane * LANE; p.x += (tx - p.x) * (1 - Math.exp(-dt * 16));
    if (!p.onGround || p.vy > 0) { p.jt += dt; p.vy -= G * dt; p.y += p.vy * dt; if (p.y <= 0) { p.y = 0; p.vy = 0; p.onGround = true; p.land = 0.16; shake = 0.12; } }
    if (p.slide > 0) p.slide -= dt;
    p.run += dt * (6 + speed * 0.35);
    collide();
    for (const c of coinsList) if (!c.got && c.d > prevDist - 0.9 && c.d < dist + 0.9 && Math.abs(c.x - p.x) < 1 && c.y > p.y - 0.4 && c.y < p.y + 2.5) { c.got = true; coins++; beep(1046, 0.07, 0.05); beep(1568, 0.1, 0.05, 0, 0.05); }
    while (nextRow < dist + VIEW) genRow();
    obs = obs.filter((o) => { if (o.d + o.len < dist - 8) { removeObstacle(o); return false; } return true; });
    coinsList = coinsList.filter((c) => !c.got && c.d > dist - 8);
  } else if (state === 'caught') {
    caughtT += dt; if (caughtT > 1.5) gameOver();
  }
  updateChunks();
  // characters
  const P = place(dist, p.x, p.y, V);
  runner.position.set(P.wx, P.wy, P.wz); runner.rotation.y = Math.PI - V.th;
  const lean = clamp((p.lane * LANE - p.x) * 0.22, -0.35, 0.35) + (p.stumble > 0 ? Math.sin(p.stumble * 20) * 0.25 : 0);
  if (state === 'start') animate(runner, time * 2, 'idle');
  else if (state !== 'play') animate(runner, time * 3, 'hands');
  else if (p.slide > 0) animate(runner, p.run, 'roll', 1 - p.slide / SLIDE_T, lean);
  else if (!p.onGround) animate(runner, p.run, p.flip ? 'flip' : 'air', p.jt / AIR_T, lean);
  else animate(runner, p.run, 'run', 0, lean, p.land > 0 ? Math.sin((p.land / 0.16) * Math.PI) : 0);
  runner.userData.blob.position.y = 0.03 - p.y; runner.userData.blob.scale.setScalar(1 / (1 + p.y * 0.3));
  const near = state !== 'play' || chaseT > 0;
  tckGap += ((near ? (state === 'caught' || state === 'over' ? 0.9 : 2.6) : 9) - tckGap) * (1 - Math.exp(-dt * 2.5));
  tck.forEach((t, i) => { const Q = place(dist - tckGap - i * 0.4, p.x + (i ? 1.15 : -1.15) * (state === 'caught' || state === 'over' ? 0.55 : 1), 0, V); t.position.set(Q.wx, Q.wy, Q.wz); t.rotation.y = Math.PI - V.th; animate(t, p.run + i * 1.7, state === 'play' ? 'run' : 'idle'); t.visible = tckGap < 8; });
  placeObstacles();
  // coins (one instanced draw call)
  let n = 0;
  for (const c of coinsList) { if (c.d > dist + 150 || n >= 260) continue; const Q = place(c.d, c.x, c.y, V); dummy.position.set(Q.wx, Q.wy, Q.wz); dummy.rotation.set(Math.PI / 2, 0, time * 4 + c.d); dummy.updateMatrix(); coinMesh.setMatrixAt(n++, dummy.matrix); }
  coinMesh.count = n; coinMesh.instanceMatrix.needsUpdate = true;
  // camera rides the route: it swings round real corners and follows the slopes; a small kick on landing
  const C = place(Math.max(0, dist - 6.5), p.x * 0.5, 4.6 + p.y * 0.3, {}), Tg = place(dist + 9, p.x * 0.6, 1.1 + p.y * 0.5, {});
  if (!camPos) camPos = { x: C.wx, y: C.wy, z: C.wz };
  if (camSnap) { camTarget.x = Tg.wx; camTarget.y = Tg.wy; camTarget.z = Tg.wz; camSnap = false; }
  const k = 1 - Math.exp(-dt * 7), ox = camPos.x, oy = camPos.y, oz = camPos.z;
  camPos.x += (C.wx - camPos.x) * k; camPos.y += (C.wy - camPos.y) * k; camPos.z += (C.wz - camPos.z) * k;
  if (dt > 0) camVel = { x: (camPos.x - ox) / dt, y: (camPos.y - oy) / dt, z: (camPos.z - oz) / dt };
  camTarget.x += (Tg.wx - camTarget.x) * Math.min(1, k * 1.4); camTarget.y += (Tg.wy - camTarget.y) * Math.min(1, k * 1.4); camTarget.z += (Tg.wz - camTarget.z) * Math.min(1, k * 1.4);
  if (shake > 0) shake = Math.max(0, shake - dt);
  camera.position.set(camPos.x, camPos.y - Math.sin(shake * 40) * shake * 0.6, camPos.z); camera.lookAt(camTarget.x, camTarget.y, camTarget.z);
  const fov = baseFov + (speed - BASE) * 0.22; if (Math.abs(camera.fov - fov) > 0.05) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }
  sky.position.copy(camera.position); stars.position.copy(camera.position);
  disc.position.copy(camera.position).addScaledVector(sunDir, 200); disc.lookAt(camera.position);
  // the sun's shadow box follows the runner (fixed world direction, so shadows swing round at corners)
  const S = place(dist + 14, 0, 0, V);
  sun.target.position.set(S.wx, S.wy, S.wz); sun.position.set(S.wx + sunDir.x * 90, S.wy + sunDir.y * 90, S.wz + sunDir.z * 90);
  fill.target.position.copy(sun.target.position); fill.position.set(S.wx - sunDir.x * 50, S.wy + 40, S.wz - sunDir.z * 50);
  const NL = place(dist + 1.5, p.x * 0.5, 3.6, V); nearLight.position.set(NL.wx, NL.wy, NL.wz);
  updateWeather(dt);
}
let tckGap = 2.6;

// ---------------------------------------------------------------- UI, input, audio, Android hooks
let AC = null, rainGain = null;
function initAudio() { try { if (!AC) AC = new (window.AudioContext || window.webkitAudioContext)(); if (AC.state === 'suspended') AC.resume(); } catch (e) { AC = null; } }
function beep(f, dur, vol, f2, delay = 0) {
  if (!AC) return; try { const t = AC.currentTime + delay, o = AC.createOscillator(), g = AC.createGain(); o.type = 'square'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.05); } catch (e) {}
}
let noiseBuf = null;
function noise() { if (!noiseBuf) { noiseBuf = AC.createBuffer(1, AC.sampleRate * 2, AC.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; } return noiseBuf; }
function rainSound(v) {
  if (!AC) return; try {
    if (!rainGain) { const s = AC.createBufferSource(); s.buffer = noise(); s.loop = true; const f = AC.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1400; f.Q.value = 0.6; rainGain = AC.createGain(); rainGain.gain.value = 0; s.connect(f); f.connect(rainGain); rainGain.connect(AC.destination); s.start(); }
    rainGain.gain.setTargetAtTime(state === 'play' ? v : 0, AC.currentTime, 0.4);
  } catch (e) {}
}
function thunder(delay) {
  if (!AC) return; try { const t = AC.currentTime + delay, s = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain(); s.buffer = noise(); f.type = 'lowpass'; f.frequency.value = 160; g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.9); s.connect(f); f.connect(g); g.connect(AC.destination); s.start(t); s.stop(t + 2); } catch (e) {}
  vib(40);
}
function vib(ms) { try { if (window.AndroidBridge && window.AndroidBridge.vibrate) window.AndroidBridge.vibrate(ms); else if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }
function toast(t) { const e = $('toast'); e.textContent = t; e.classList.remove('show'); void e.offsetWidth; e.classList.add('show'); }
function show(id) { for (const s of ['start', 'pause', 'over']) $(s).classList.toggle('hidden', s !== id); $('hud').classList.toggle('hidden', id !== null && id !== 'pause'); }
function start() { initAudio(); reset(); for (let i = 0; i < 8; i++) updateChunks(); state = 'play'; show(null); applyEnv(); toast('БІЖИ! ТЦК НА ХВОСТІ!'); qT = 0; qN = 0; }
function pauseGame() { if (state === 'play') { state = 'pause'; show('pause'); rainSound(0); } }
function resume() { if (state === 'pause') { initAudio(); state = 'play'; show(null); applyEnv(); } }
function gameOver() { state = 'over'; $('oScore').textContent = score; $('oCoins').textContent = coins; show('over'); rainSound(0); }
function to2D() { location.href = 'index.html'; }
$('start').addEventListener('click', (e) => { if (e.target.closest('button') && e.target.id !== 'btnGo') return; start(); });
$('btnGo').addEventListener('click', (e) => { e.stopPropagation(); start(); });
$('btnBack1').addEventListener('click', (e) => { e.stopPropagation(); to2D(); });
$('btnAgain').addEventListener('click', start); $('btnBack2').addEventListener('click', to2D);
$('btnResume').addEventListener('click', resume); $('btnBack3').addEventListener('click', to2D);
$('btnPause').addEventListener('click', (e) => { e.stopPropagation(); pauseGame(); });
$('btnNight').addEventListener('click', (e) => { e.stopPropagation(); cycleTod(); });
$('btnWx').addEventListener('click', (e) => { e.stopPropagation(); cycleWx(); });
let tch = null;
const swipe = (dx, dy) => Math.abs(dx) > Math.abs(dy) ? act(dx > 0 ? 'right' : 'left') : act(dy > 0 ? 'down' : 'up');
cv.addEventListener('touchstart', (e) => { e.preventDefault(); initAudio(); const t = e.changedTouches[0]; tch = { id: t.identifier, x: t.clientX, y: t.clientY, done: false }; }, { passive: false });
cv.addEventListener('touchmove', (e) => { e.preventDefault(); if (!tch || tch.done) return; for (const t of e.changedTouches) { if (t.identifier !== tch.id) continue; const dx = t.clientX - tch.x, dy = t.clientY - tch.y; if (Math.abs(dx) > 22 || Math.abs(dy) > 22) { swipe(dx, dy); tch.done = true; } } }, { passive: false });
cv.addEventListener('touchend', (e) => { e.preventDefault(); if (!tch) return; for (const t of e.changedTouches) { if (t.identifier !== tch.id) continue; if (!tch.done) { const dx = t.clientX - tch.x, dy = t.clientY - tch.y; if (Math.abs(dx) > 10 || Math.abs(dy) > 10) swipe(dx, dy); } tch = null; } }, { passive: false });
document.addEventListener('touchmove', (e) => { if (e.cancelable) e.preventDefault(); }, { passive: false });
let ms = null;
cv.addEventListener('mousedown', (e) => { ms = { x: e.clientX, y: e.clientY, done: false }; });
window.addEventListener('mousemove', (e) => { if (!ms || ms.done) return; const dx = e.clientX - ms.x, dy = e.clientY - ms.y; if (Math.abs(dx) > 24 || Math.abs(dy) > 24) { swipe(dx, dy); ms.done = true; } });
window.addEventListener('mouseup', () => { ms = null; });
window.addEventListener('keydown', (e) => {
  const c = e.code; if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space'].includes(c)) e.preventDefault();
  if (c === 'KeyN') return cycleTod(); if (c === 'KeyM') return cycleWx();
  if (state === 'play') { if (c === 'ArrowLeft' || c === 'KeyA') act('left'); else if (c === 'ArrowRight' || c === 'KeyD') act('right'); else if (c === 'ArrowUp' || c === 'KeyW' || c === 'Space') act('up'); else if (c === 'ArrowDown' || c === 'KeyS') act('down'); else if (c === 'KeyP' || c === 'Escape') pauseGame(); }
  else if ((state === 'start' || state === 'over') && (c === 'Enter' || c === 'Space')) start();
  else if (state === 'pause' && (c === 'Enter' || c === 'KeyP' || c === 'Escape')) resume();
});
function appPause() { pauseGame(); try { if (AC && AC.state === 'running') AC.suspend(); } catch (e) {} }
document.addEventListener('visibilitychange', () => { if (document.hidden) appPause(); });
window.addEventListener('blur', pauseGame);
window.__appPause = appPause;   // called by the Android shell (MainActivity)
window.__appBack = () => { if (state === 'play') { pauseGame(); return 'ok'; } if (state === 'caught') return 'ok'; to2D(); return 'ok'; };

// ---------------------------------------------------------------- quality: if a phone cannot hold ~45 fps with shadows, drop them (and resolution)
let qT = 0, qN = 0, quality = 'high', qLocked = false;
function setShadows(on) {
  renderer.shadowMap.enabled = on; sun.castShadow = on;
  scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); });
  for (const r of [runner, ...tck]) r.userData.blob.material.opacity = on ? 0.2 : 0.3;
}
function setQuality(q, lock = false) {
  quality = q; qLocked = qLocked || lock;
  setShadows(q === 'high');
  pixelRatio = Math.min(window.devicePixelRatio || 1, q === 'high' ? 1.75 : 1.25); renderer.setPixelRatio(pixelRatio); resize();
}
function watchQuality(dt) {
  if (qLocked || quality !== 'high' || state !== 'play') return;
  qT += dt; if (qT < 2) return; qN++;
  if (qT > 6) { const fps = qN / (qT - 2); qLocked = true; if (fps < 42) { setQuality('low'); toast('Тіні вимкнено для плавності'); } }
}

// ---------------------------------------------------------------- loop
let baseFov = 70;
function resize() {
  const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h, false);
  camera.aspect = w / h; baseFov = clamp(2 * Math.atan(Math.tan((74 * Math.PI / 180) / 2) / camera.aspect) * 180 / Math.PI, 55, 92); camera.fov = baseFov; camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);
let last = performance.now(), lastHud = -1;
function loop(now) {
  let rawDt = (now - last) / 1000; last = now; const dt = clamp(rawDt, 0, 0.05);
  if (state !== 'pause' && state !== 'dead') update(dt);
  if (state !== 'dead') renderer.render(scene, camera);
  watchQuality(rawDt);
  if (score !== lastHud) { $('score').textContent = score; lastHud = score; }
  $('coinN').textContent = coins;
  requestAnimationFrame(loop);
}
buildRoute(); resize();
tod = rnd() < 0.6 ? 'day' : rnd() < 0.6 ? 'sunset' : 'night';
wx = pick(['clear', 'clear', 'rain', 'storm', 'snow', 'fog']);
applyEnv(); reset(); show('start');
for (let i = 0; i < 6; i++) updateChunks();
requestAnimationFrame(loop);
// debug / test hook
window.__g3 = {
  get state() { return state; }, get dist() { return dist; }, get lane() { return p.lane; }, get score() { return score; }, get p() { return p; }, act, start, renderer, camera,
  frame: (d) => place(d, 0, 0, {}), get chunks() { return chunks.size; }, get obs() { return obs.length; }, get obsList() { return obs.map((o) => ({ t: o.t, lane: o.lane, d: o.d })); }, pause: pauseGame,
  setEnv(t, w) { if (t) tod = t; if (w) wx = w; applyEnv(); }, setNight(on) { tod = on ? 'night' : 'day'; applyEnv(); }, setQuality, get quality() { return quality; }, fillChunks() { for (let i = 0; i < 8; i++) updateChunks(); },
  warp(d) { dist = prevDist = d; nextRow = d + 40; lastRowEnd = d + 6; for (const o of obs) removeObstacle(o); obs = []; coinsList = []; camPos = null; camSnap = true; for (let i = 0; i < 8; i++) updateChunks(); }, segs: SEGS, setSpeedTime(t) { runTime = t; }
};
