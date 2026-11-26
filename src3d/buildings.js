// The city around the route: per-city PBR materials, and chunks of street (road, sidewalks, houses of the city's facade
// families, roofs, details, trees, lamps, wires, parked cars, parks, building sites, squares with landmarks).
// Everything of one material inside a 50 m chunk is merged into one mesh.
import { Mesh, Group, MeshStandardMaterial, MeshBasicMaterial, MeshDepthMaterial, RGBADepthPacking, AdditiveBlending, IcosahedronGeometry, CylinderGeometry, BoxGeometry, DoubleSide } from 'three';
import { GB, col, makeFrame, L, LN, box, frameMatrix } from './geo.js';
import { segAt, frame, place, SEGS, CORNER_R } from './world.js';
import { STT } from './cities.js';
import { landmark } from './landmarks.js';
import { vehicleParts, plateUV, vehicleMaterials, CAR_COLORS, BUS_COLORS } from './vehicles.js';
import * as TX from './textures.js';

export const CH = 50;
// shared shadow-depth material: city surfaces are opaque, so the shadow pass never needs (and must not keep) their colour maps
const DEPTH = new MeshDepthMaterial({ depthPacking: RGBADepthPacking });
const std = (o) => new MeshStandardMaterial({ roughness: 0.9, metalness: 0, ...o });
// ---------------------------------------------------------------- materials of one city
export function cityMaterials(city, hq = true) {
  TX.reseed(city.id.length * 977 + city.id.charCodeAt(0));
  const road = TX.roadTextures({ cobble: !!city.cobble, rails: !!city.tram, markings: !city.cobble });
  const asph = TX.roadTextures({ cobble: false, rails: false, markings: false });
  const walk = TX.sidewalkTextures(!!city.cobble), grass = TX.grassTextures();
  const roofP = TX.roofTextures(false), roofF = TX.roofTextures(true), signs = TX.signAtlas(city.ads);
  const fams = [...new Set(city.fac.concat(['panel']))];
  const fac = {}, wall = {};
  for (const f of fams) {
    fac[f] = TX.facadeTextures(f);
    wall[f] = std({ map: fac[f].map, normalMap: fac[f].normal, roughnessMap: fac[f].rough, emissiveMap: fac[f].emissive, emissive: '#ffffff', emissiveIntensity: 0, vertexColors: true, metalness: f === 'modern' ? 0.55 : 0, roughness: 1 });
  }
  const M = {
    fac, wall, signsUV: signs.uv,
    road: std({ map: road.map, normalMap: road.normal, roughnessMap: road.rough, roughness: 1 }),
    asph: std({ map: asph.map, normalMap: asph.normal, roughnessMap: asph.rough, roughness: 1 }),
    walk: std({ map: walk.map, normalMap: walk.normal, roughnessMap: walk.rough, vertexColors: true, roughness: 1 }),
    grass: std({ map: grass.map, normalMap: grass.normal, vertexColors: true, roughness: 1 }),
    roofP: std({ map: roofP.map, normalMap: roofP.normal, roughnessMap: roofP.rough, vertexColors: true, roughness: 1, emissive: '#000000' }),
    roofF: std({ map: roofF.map, normalMap: roofF.normal, roughnessMap: roofF.rough, vertexColors: true, roughness: 1, emissive: '#000000' }),
    det: std({ vertexColors: true, roughness: 0.82 }),
    leaves: std({ vertexColors: true, roughness: 0.95, emissive: '#000000' }),
    metal: std({ color: '#2a2c31', metalness: 0.7, roughness: 0.42 }),
    gold: std({ vertexColors: true, metalness: 1, roughness: 0.28 }),
    glass: std({ vertexColors: true, color: '#9fb4c8', metalness: 0.6, roughness: 0.06 }),
    lamp: std({ color: '#fff2c8', emissive: '#ffcf7a', emissiveIntensity: 0.3 }),
    glow: new MeshBasicMaterial({ map: TX.glowTexture(), color: '#ffbe6a', transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }),
    ao: new MeshBasicMaterial({ map: TX.aoTexture(), color: '#000000', transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    sign: std({ map: signs.tex, emissiveMap: signs.tex, emissive: '#ffffff', emissiveIntensity: 0, roughness: 0.5 })
  };
  M.ao.map.repeat.set(1, 1);
  M.ao.color.set('#ffffff'); M.ao.blending = 1;   // normal blending; the texture's alpha carries the darkness
  M.v = vehicleMaterials(hq);   // shared, not disposed with the city
  return M;
}
export function disposeMaterials(M) {
  const seen = new Set();
  const all = Object.values(M).concat(Object.values(M.wall));
  for (const m of all) if (m && m.isMaterial) { for (const k of ['map', 'normalMap', 'roughnessMap', 'emissiveMap']) if (m[k] && !seen.has(m[k])) { seen.add(m[k]); m[k].dispose(); } m.dispose(); }
}
// weather & time of day on the city materials
export function applyMatEnv(M, st) {
  for (const w of Object.values(M.wall)) w.emissiveIntensity = st.win;
  M.lamp.emissiveIntensity = st.lamp; M.sign.emissiveIntensity = st.night ? 0.9 : st.tod === 'sunset' ? 0.35 : 0;
  M.glow.opacity = st.glow; M.glow.visible = st.glow > 0;
  M.road.color.set(st.wet ? '#7c7c7c' : '#ffffff'); M.road.roughness = st.wet ? 0.32 : 1;
  M.asph.color.set(st.wet ? '#6c6c6c' : '#ffffff'); M.asph.roughness = st.wet ? 0.28 : 1;
  M.walk.roughness = st.wet ? 0.5 : 1;
  const snow = st.snow ? (st.night ? 0.12 : 0.5) : 0;
  for (const m of [M.roofP, M.roofF, M.leaves]) { m.emissive.set(st.snow ? '#dfe6ee' : '#000000'); m.emissiveIntensity = snow; }
  M.road.emissive.set(st.snow ? '#4c535b' : '#000000'); M.walk.emissive.set(st.snow ? '#6a727b' : '#000000');
}

// ---------------------------------------------------------------- facade families
const FP = {
  austro: { fl: [3, 4], W: [6.5, 10], gap: [0.15, 0.35], D: 10, roof: 'pitch' },
  brick: { fl: [2, 4], W: [8, 13], gap: [0.4, 2.5], D: 10, roof: 'pitch' },
  classic: { fl: [2, 3], W: [10, 16], gap: [0.3, 1.5], D: 12, roof: 'flat' },
  stalinka: { fl: [6, 8], W: [16, 26], gap: [0.3, 2], D: 14, roof: 'flat' },
  panel: { fl: [5, 9], W: [18, 30], gap: [3, 8], D: 12, roof: 'flat' },
  constructivist: { fl: [5, 8], W: [18, 28], gap: [1, 4], D: 14, roof: 'flat' },
  modern: { fl: [12, 20], W: [14, 20], gap: [4, 9], D: 16, roof: 'flat' }
};
const lighten = (c, k = 1.12) => c.map((v) => Math.min(1, v * k + 0.03)), darken = (c, k = 0.62) => c.map((v) => v * k);
function mulberry(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const between = (r, [a, b]) => a + r() * (b - a);

// noisy blobs for tree crowns (shared templates)
const crown = (() => { const g = new IcosahedronGeometry(1, 2), p = g.attributes.position, r = mulberry(99); for (let i = 0; i < p.count; i++) { const k = 0.82 + r() * 0.3; p.setXYZ(i, p.getX(i) * k, p.getY(i) * k, p.getZ(i) * k); } g.computeVertexNormals(); return g; })();
const CYL8 = new CylinderGeometry(0.5, 0.5, 1, 8), CYL12 = new CylinderGeometry(0.5, 0.5, 1, 12), BOX1 = new BoxGeometry(1, 1, 1), TRUNK = new CylinderGeometry(0.35, 0.5, 1, 7);

export function makeWorld(scene, city, M, seed) {
  const fams = city.fac;
  const S = { lantern: city.lamp === 'lantern' };
  const house = {};   // per side: precomputed sequence of house slots along the route (deterministic, no chunk overlaps)
  for (const side of [-1, 1]) {
    const r = mulberry(seed * 31 + (side + 2) * 7), list = []; let d = r() * 3;
    house[side] = { list, r, next: () => {
      const fam = fams[(r() * fams.length) | 0], fp = FP[fam], bw = TX.FAMILY[fam].bw, nb = Math.max(2, Math.round(between(r, fp.W) / bw)), W = nb * bw;
      const h = { s: d, W, fam, nb, floors: Math.round(between(r, fp.fl)), pal: (r() * 1000) | 0, seed: (r() * 1e9) | 0 };
      list.push(h); d += W + between(r, fp.gap);
    }, until(x) { while (!list.length || list[list.length - 1].s < x) this.next(); } };
  }
  const blocked = (q) => !q || q.type === 'corner' || q.type === 'square';
  const nearCorner = (d, W = 0) => SEGS.some((q) => q.type === 'corner' && d + W > q.s - 7 && d < q.e + 7);
  const kindAt = (d) => { const q = segAt(d); return q ? (q.type === 'square' ? 'square' : q.type === 'corner' ? 'corner' : q.kind || 'street') : 'street'; };

  function ribbon(gb, d0, d1, xa, xb, y, cl, uScale, vScale, uFix) {
    for (let d = d0; d < d1; d += 1) {
      const e = Math.min(d + 1, d1), a = place(d, xa, y, {}), b = place(d, xb, y, {}), c = place(e, xb, y, {}), q = place(e, xa, y, {});
      const ua = uFix ? 0 : xa / uScale, ub = uFix ? 1 : xb / uScale;
      gb.quad([a.wx, a.wy, a.wz], [b.wx, b.wy, b.wz], [c.wx, c.wy, c.wz], [q.wx, q.wy, q.wz], [0, 1, 0], [ua, d / vScale], [ub, d / vScale], [ub, e / vScale], [ua, e / vScale], cl);
    }
  }
  function curb(gb, d0, d1, x, h, cl) {
    for (let d = d0; d < d1; d += 1) {
      const e = Math.min(d + 1, d1), a = place(d, x, 0, {}), b = place(e, x, 0, {}), fr = frame(d, {});
      const nrm = LN(makeFrame(0, 0, 0, fr.th), 0, 0, x > 0 ? -1 : 1);
      gb.quad([a.wx, a.wy, a.wz], [b.wx, b.wy, b.wz], [b.wx, b.wy + h, b.wz], [a.wx, a.wy + h, a.wz], nrm, [d / 2, 0], [e / 2, 0], [e / 2, 0.07], [d / 2, 0.07], cl);
    }
  }
  const frameAt = (d, x = 0, y = 0) => { const P = place(d, x, y, {}); return makeFrame(P.wx, P.wy, P.wz, P.th); };
  const put = (gb, geo, F, x, y, z, sx, sy, sz, cl, rot = 0) => gb.geo(geo, frameMatrix(F, x, y, z, rot, sx, sy, sz), cl);

  // ------------------------------------------------ trees
  function tree(G, F, x, z, s, sp = city.tree, r = Math.random) {
    const trunkC = sp === 'plane' ? col('#9a9182') : col('#4f3b2a'), g = (h) => col(h);
    const leaf = [g('#3f6b2e'), g('#4d7a34'), g('#5a8a3a'), g('#46733a')][(r() * 4) | 0];
    if (sp === 'poplar') { put(G.det, TRUNK, F, x, 1.5 * s, z, 0.5 * s, 3 * s, 0.5 * s, trunkC); put(G.leaves, crown, F, x, 7 * s, z, 1.5 * s, 5.5 * s, 1.5 * s, leaf); return; }
    const th = sp === 'plane' ? 3.2 : 2.6;
    put(G.det, TRUNK, F, x, th * s / 2, z, 0.55 * s, th * s, 0.55 * s, trunkC);
    const R = sp === 'plane' ? 2.8 : sp === 'linden' ? 2.1 : 2.4, sy = sp === 'linden' ? 1.35 : sp === 'plane' ? 0.75 : 1;
    put(G.leaves, crown, F, x, (th + R * sy * 0.8) * s, z, R * s, R * sy * s, R * s, leaf);
    put(G.leaves, crown, F, x + 0.9 * s, (th + R * sy * 1.2) * s, z + 0.5 * s, R * 0.7 * s, R * 0.7 * sy * s, R * 0.7 * s, lighten(leaf, 1.08));
    put(G.leaves, crown, F, x - 1 * s, (th + R * sy * 0.9) * s, z - 0.6 * s, R * 0.65 * s, R * 0.65 * sy * s, R * 0.65 * s, darken(leaf, 0.9));
  }
  // ------------------------------------------------ street furniture
  function lamp(G, d, x) {
    const F = frameAt(d, x), s = -Math.sign(x);
    if (S.lantern) {
      box(G.metal, F, -0.12, 0.12, 0, 0.5, -0.12, 0.12, [1, 1, 1], 1, 1); box(G.metal, F, -0.06, 0.06, 0, 3.9, -0.06, 0.06, [1, 1, 1], 1, 1);
      box(G.metal, F, -0.24, 0.24, 4.55, 4.68, -0.24, 0.24, [1, 1, 1], 1, 1); box(G.metal, F, -0.06, 0.06, 4.68, 4.9, -0.06, 0.06, [1, 1, 1], 1, 1);
      box(G.lamp, F, -0.17, 0.17, 3.95, 4.55, -0.17, 0.17, [1, 1, 1], 1, 1);
    } else {
      put(G.metal, CYL8, F, 0, 4, 0, 0.16, 8, 0.16, [1, 1, 1]);
      box(G.metal, F, -0.05, 0.05, 7.9, 8.0, Math.min(0, s * 1.7), Math.max(0, s * 1.7), [1, 1, 1], 1, 1);
      box(G.lamp, F, -0.18, 0.18, 7.75, 7.88, s * 1.4 - 0.32, s * 1.4 + 0.32, [1, 1, 1], 1, 1);
    }
    const r = 3.6, y = 0.16, c = s * (S.lantern ? 0.9 : 1.4);
    G.glow.quad(L(F, -r, y, c - r), L(F, r, y, c - r), L(F, r, y, c + r), L(F, -r, y, c + r), [0, 1, 0], [0, 0], [1, 0], [1, 1], [0, 1], [1, 1, 1]);
  }
  function furniture(G, d, side, r, x = 5.0) {
    const F = frameAt(d, side * x, 0.14), v = r();
    if (v < 0.2) {
      box(G.det, F, -0.8, 0.8, 0.42, 0.5, -0.22, 0.22, col('#7a5232'), 1, 1); box(G.det, F, -0.8, 0.8, 0.5, 0.92, side * 0.2, side * 0.26, col('#7a5232'), 1, 1);
      for (const q of [-0.7, 0.7]) box(G.metal, F, q - 0.04, q + 0.04, 0, 0.45, -0.2, 0.2, [1, 1, 1], 1, 1);
    } else if (v < 0.34) { box(G.det, F, -0.45, 0.45, 0, 0.55, -0.35, 0.35, col('#8d8478'), 1, 1); put(G.leaves, crown, F, 0, 0.75, 0, 0.45, 0.3, 0.45, col(['#c0392b', '#e67e22', '#8e44ad', '#d35480'][(r() * 4) | 0])); }
    else if (v < 0.46) put(G.det, CYL8, F, 0, 0.42, 0, 0.45, 0.85, 0.45, col('#2f5d3a'));
    else if (v < 0.62 && city.cafe) {
      const uc = col(['#f4efe4', '#b8322a', '#2c4f86', '#e7c25a'][(r() * 4) | 0]);
      box(G.metal, F, -0.03, 0.03, 0, 2.25, -0.03, 0.03, [1, 1, 1], 1, 1); put(G.det, CYL12, F, 0, 0.74, 0, 0.75, 0.04, 0.75, col('#e8e2d6'));
      put(G.det, new CylinderGeometry(0, 1.5, 0.55, 8), F, 0, 2.33, 0, 1, 1, 1, uc);
      for (const q of [-0.6, 0.6]) { box(G.det, F, q - 0.2, q + 0.2, 0.42, 0.46, -0.2, 0.2, col('#3b2b20'), 1, 1); box(G.det, F, q + Math.sign(q) * 0.17, q + Math.sign(q) * 0.21, 0.46, 0.9, -0.2, 0.2, col('#3b2b20'), 1, 1); }
    } else if (v < 0.62) {   // kiosk (МАФ)
      box(G.det, F, -1.2, 1.2, 0, 2.5, -0.9, 0.9, col(['#e9e4d8', '#c8d6e0', '#f0d9a0'][(r() * 3) | 0]), 1, 1);
      box(G.glass, F, -1.0, 1.0, 0.9, 2.1, -side * 0.91 - 0.01, -side * 0.91 + 0.01, [1, 1, 1], 1, 1);
      box(G.det, F, -1.3, 1.3, 2.5, 2.65, -1.0, 1.0, col('#b8322a'), 1, 1);
    } else if (v < 0.7) { box(G.metal, F, -0.04, 0.04, 0, 2.6, -0.04, 0.04, [1, 1, 1], 1, 1); box(G.det, F, -0.5, 0.5, 2.3, 2.6, -0.03, 0.03, col('#1f4f8a'), 1, 1); }
  }
  // realistic vehicles: cached lofted bodies merged into this chunk's buffers (paint colour as vertex colour)
  function vehicle(G, F, x, z, type, color, rot, r) {
    const parts = vehicleParts(type), m = frameMatrix(F, x, 0, z, rot), c = col(color);
    for (const [k, list] of Object.entries(parts)) if (k !== 'wheelAt') for (const g of list) {
      if (k === 'plate') { const q = plateUV(g.clone(), (r() * 8) | 0); G.vplate.geo(q, m, [1, 1, 1]); q.dispose(); continue; }
      G['v' + k].geo(g, m, k === 'paint' ? c : k === 'glass' && type === 'bus' ? [0.8, 0.85, 0.9] : [1, 1, 1]);
    }
  }
  function car(G, F, x, z, r) {
    const t = ['sedan', 'sedan', 'hatch', 'suv', 'hatch', 'sedan', 'van'][(r() * 7) | 0];
    const color = t === 'van' ? (r() < 0.7 ? '#eeeeea' : '#c9cdd2') : CAR_COLORS[(r() * CAR_COLORS.length) | 0];
    vehicle(G, F, x, z, t, color, r() < 0.65 ? 0 : Math.PI, r);
  }
  function busStop(G, d, s, r) {   // a city bus (or a trolleybus) at a stop, with a glass shelter
    const F = frameAt(d), type = 'bus', color = BUS_COLORS[city.id] || ['#1f5ea8', '#d7b52c', '#2f7b3d', '#e8e6df'][(r() * 4) | 0];
    vehicle(G, F, 0, s * 4.75, type, color, 0, r);
    if (city.trolley && !city.tram) for (const dz of [-0.35, 0.35]) box(G.metal, F, -4.4, -1.2, 3.02, 3.08, s * 4.75 + dz - 0.03, s * 4.75 + dz + 0.03, [1, 1, 1], 1, 1);   // trolley poles, lowered
    const Fs = frameAt(d + 2, s * 7.4, 0.16);
    box(G.metal, Fs, -2, 2, 2.5, 2.6, -0.8, 0.8, [1, 1, 1], 1, 1);
    box(G.glass, Fs, -2, 2, 0.1, 2.5, s * 0.75 - 0.02, s * 0.75 + 0.02, [0.85, 0.9, 0.95], 1, 1);
    for (const q of [-1.95, 1.95]) box(G.metal, Fs, q - 0.04, q + 0.04, 0, 2.5, -0.8, 0.8, [1, 1, 1], 1, 1);
    box(G.det, Fs, -1.6, 1.6, 0.45, 0.5, s * 0.3 - 0.2, s * 0.3 + 0.2, col('#7a5232'), 1, 1);
    box(G.sign, Fs, -0.4, 0.4, 2.62, 3.0, -0.03, 0.03, [1, 1, 1], 1, 1);
  }
  // ------------------------------------------------ houses
  function buildHouse(G, h, side, bx, flo) {
    const fam = h.fam, fp = FP[fam], tf = M.fac[fam], fam0 = TX.FAMILY[fam], fh = fam0.fh, r = mulberry(h.seed);
    const floors = Math.max(2, h.floors + flo), W = h.W, D = fp.D, pitch = fp.roof === 'pitch';
    const Hw = floors * fh + 0.4, d = h.s + W / 2, Fc = frame(d, {}), zc = side * (bx + D / 2), P = place(d, zc, 0, {});
    const F = makeFrame(P.wx, P.wy, P.wz, Fc.th), R = (x, y, z) => L(F, x, y, z);
    const cl = col(city.pal[h.pal % city.pal.length]), li = lighten(cl), dk = darken(cl, 0.7), white = col('#f2efe9');
    const wallC = fam === 'modern' ? lighten(cl, 1.0) : cl;
    box(G.wall[fam], F, -W / 2, W / 2, -2.5, Hw, -D / 2, D / 2, wallC, tf.bw, tf.fh, false, 0, -W / 2);
    const zf = -side * D / 2, out = -side;
    const fb = (g, xa, xb, ya, yb, o0, o1, c, top = true) => { const a = zf + out * o0, b = zf + out * o1; box(g, F, xa, xb, ya, yb, Math.min(a, b), Math.max(a, b), c, 1, 1, top); };
    // contact shadow on the pavement along the facade
    G.ao.quad(R(-W / 2, 0.15, zf), R(W / 2, 0.15, zf), R(W / 2, 0.15, zf + out * 1.3), R(-W / 2, 0.15, zf + out * 1.3), [0, 1, 0], [0, 1], [1, 1], [1, 0], [0, 0], [1, 1, 1]);
    // roof
    if (pitch) {
      const o = 0.35, rh = Math.min(4.2, D * 0.36), x0 = -W / 2 - 0.2, x1 = W / 2 + 0.2, za = -D / 2 - o, zb = D / 2 + o;
      const rc = fam === 'brick' && r() < 0.5 ? col('#7d8590') : [1, 1, 1];
      G.roofP.quad(R(x0, Hw, za), R(x1, Hw, za), R(x1, Hw + rh, 0), R(x0, Hw + rh, 0), LN(F, 0, 0.8, -0.6), [x0 / 3, 0], [x1 / 3, 0], [x1 / 3, 1.9], [x0 / 3, 1.9], rc);
      G.roofP.quad(R(x0, Hw, zb), R(x1, Hw, zb), R(x1, Hw + rh, 0), R(x0, Hw + rh, 0), LN(F, 0, 0.8, 0.6), [x0 / 3, 0], [x1 / 3, 0], [x1 / 3, 1.9], [x0 / 3, 1.9], rc);
      for (const x of [-W / 2, W / 2]) G.det.tri(R(x, Hw, -D / 2), R(x, Hw, D / 2), R(x, Hw + rh * 0.93, 0), LN(F, Math.sign(x), 0, 0), [0, 0], [0, 0], [0, 0], cl);
      if (W > 6.5) { const zs = -side * 2.2; box(G.det, F, -0.75, 0.75, Hw + 0.3, Hw + 1.9, zs - 0.7, zs + 0.7, cl, 1, 1); box(G.glass, F, -0.45, 0.45, Hw + 0.6, Hw + 1.6, zs + out * 0.71 - 0.01, zs + out * 0.71 + 0.01, [1, 1, 1], 1, 1); box(G.roofP, F, -0.9, 0.9, Hw + 1.9, Hw + 2.05, zs - 0.85, zs + 0.85, [1, 1, 1], 1, 1); }
      const brick = col('#8a4a3a');
      for (let i = 0, n = 1 + (r() < 0.5 ? 1 : 0); i < n; i++) { const cx = (r() - 0.5) * (W - 2), cz = side * r() * 2; box(G.det, F, cx - 0.32, cx + 0.32, Hw + 1.0, Hw + rh + 0.9, cz - 0.32, cz + 0.32, brick, 1, 1); box(G.det, F, cx - 0.4, cx + 0.4, Hw + rh + 0.9, Hw + rh + 1.05, cz - 0.4, cz + 0.4, darken(brick, 0.8), 1, 1); }
    } else {
      G.roofF.quad(R(-W / 2, Hw, -D / 2), R(W / 2, Hw, -D / 2), R(W / 2, Hw, D / 2), R(-W / 2, Hw, D / 2), [0, 1, 0], [0, 0], [W / 8, 0], [W / 8, D / 8], [0, D / 8], [1, 1, 1]);
      const pc = fam === 'modern' ? col('#5f6b78') : li;
      for (const [xa, xb, za, zb] of [[-W / 2, W / 2, -D / 2, -D / 2 + 0.3], [-W / 2, W / 2, D / 2 - 0.3, D / 2], [-W / 2, -W / 2 + 0.3, -D / 2, D / 2], [W / 2 - 0.3, W / 2, -D / 2, D / 2]]) box(G.det, F, xa, xb, Hw, Hw + 0.7, za, zb, pc, 1, 1);
      for (let i = 0, n = 1 + ((r() * 3) | 0); i < n; i++) { const cx = (r() - 0.5) * (W - 3), cz = (r() - 0.5) * (D - 3); box(G.det, F, cx - 0.6, cx + 0.6, Hw, Hw + 0.9, cz - 0.45, cz + 0.45, col('#c9c9c4'), 1, 1); }
      if (r() < 0.5) put(G.det, CYL12, F, (r() - 0.5) * (W - 4), Hw + 1.2, (r() - 0.5) * (D - 4), 1.8, 2.4, 1.8, col('#8a8580'));
      if (fam === 'panel' || fam === 'modern') box(G.det, F, -2, 2, Hw, Hw + 2.6, -1.5, 1.5, pc, 1, 1);
      if (r() < 0.4) box(G.metal, F, 0.5, 0.58, Hw, Hw + 5, 0.5, 0.58, [1, 1, 1], 1, 1);
      if (fam === 'stalinka' && floors >= 7 && r() < 0.35) {   // Kyiv-style corner turret with a spire
        const tx = W / 2 - 3; box(G.wall[fam], F, tx - 2.4, tx + 2.4, Hw, Hw + fh * 1.6, -2.4, 2.4, cl, tf.bw, tf.fh, false, Hw, tx - 2.4);
        box(G.det, F, tx - 2.7, tx + 2.7, Hw + fh * 1.6, Hw + fh * 1.6 + 0.5, -2.7, 2.7, li, 1, 1);
        put(G.gold, new CylinderGeometry(0, 1.8, 1, 8), F, tx, Hw + fh * 1.6 + 4.5, 0, 1, 8, 1, col('#c9a440'));
      }
    }
    // facade relief by family
    fb(G.det, -W / 2, W / 2, -2, 0.65, 0, 0.1, fam === 'brick' ? col('#7a6a5c') : dk);                                  // plinth
    if (fam === 'austro' || fam === 'classic' || fam === 'stalinka' || fam === 'brick') {
      for (const x of [-W / 2, W / 2 - 0.36]) fb(G.det, x, x + 0.36, 0.65, Hw - 0.3, 0, 0.09, li);
      for (let k = 1; k < floors; k++) if (k === 1 || fam !== 'stalinka' || k === floors - 1) fb(G.det, -W / 2 - 0.04, W / 2 + 0.04, k * fh - 0.16, k * fh + 0.02, 0, 0.16, li);
      fb(G.det, -W / 2 - 0.2, W / 2 + 0.2, Hw - 0.45, Hw, 0, 0.42, li);
      if (fam === 'stalinka') { fb(G.det, -W / 2, W / 2, 0.65, fh, 0, 0.06, darken(cl, 0.85)); }
    }
    if (fam === 'constructivist') { const tx = (r() < 0.5 ? -1 : 1) * (W / 2 - 2.2); fb(G.glass, tx - 1.4, tx + 1.4, 0.6, Hw - 0.2, 0, 0.5, [0.8, 0.85, 0.9]); fb(G.det, -W / 2, W / 2, Hw - 0.5, Hw, 0, 0.3, li); }
    if (fam === 'modern') { for (let x = -W / 2; x <= W / 2 + 0.01; x += tf.bw / 2) fb(G.metal, x - 0.06, x + 0.06, 3, Hw, 0, 0.25, [1, 1, 1], false); fb(G.glass, -W / 2 + 0.5, W / 2 - 0.5, 0.14, 3, -0.6, 0.01, [0.7, 0.8, 0.88]); fb(G.det, -W / 2, W / 2, 2.9, 3.3, 0, 0.6, col('#5f6b78')); }
    // balconies
    const bay = fam0.bw;
    if (fam === 'panel') {
      for (let k = 1; k < floors; k++) for (let b = 1; b < h.nb; b += 2) { const x = -W / 2 + b * bay; fb(G.det, x + 0.15, x + bay - 0.15, k * fh - 0.1, k * fh + 1.0, 0, 1.1, col('#d6d3cc')); }
    } else if (fam !== 'modern' && fam !== 'constructivist') {
      for (let k = 1; k < floors; k++) {
        if (r() > (k === 1 ? 0.55 : 0.28)) continue;
        const b = 1 + ((r() * (h.nb - 2)) | 0), x0 = -W / 2 + b * bay, x1 = x0 + bay * (r() < 0.3 && b + 2 < h.nb ? 2 : 1), yb = k * fh - 0.1;
        fb(G.det, x0 - 0.05, x1 + 0.05, yb, yb + 0.16, 0, 0.8, col('#b8b0a2'));
        if (fam === 'stalinka') fb(G.det, x0, x1, yb + 0.16, yb + 1.0, 0.68, 0.8, li);
        else {
          fb(G.metal, x0, x1, yb + 1.0, yb + 1.05, 0.74, 0.8, [1, 1, 1]);
          for (let x = x0; x <= x1 + 0.01; x += 0.24) fb(G.metal, x - 0.018, x + 0.018, yb + 0.16, yb + 1.0, 0.75, 0.79, [1, 1, 1], false);
        }
      }
    }
    // ground floor: shops with signs (and awnings in café cities), or a door
    if (fam !== 'modern') {
      for (let b = 0; b < h.nb; b += 2 + ((r() * 2) | 0)) {
        const x0 = -W / 2 + b * bay + 0.3, x1 = Math.min(W / 2 - 0.3, x0 + bay * 2 - 0.6);
        if (x1 - x0 < 1.2) continue;
        if (r() < 0.6) {
          fb(G.glass, x0, x1, 0.15, 2.5, 0, 0.04, [0.85, 0.9, 1]); fb(G.det, x0 - 0.1, x1 + 0.1, 2.5, 2.62, 0, 0.1, col('#3b2b20'));
          const uv = M.signsUV((r() * 8) | 0), sy0 = 2.66, sy1 = 3.1, so = zf + out * 0.09, n = LN(F, 0, 0, out);
          G.sign.quad(R(x0, sy0, so), R(x1, sy0, so), R(x1, sy1, so), R(x0, sy1, so), n, side > 0 ? [uv[2], uv[1]] : [uv[0], uv[1]], side > 0 ? [uv[0], uv[1]] : [uv[2], uv[1]], side > 0 ? [uv[0], uv[3]] : [uv[2], uv[3]], side > 0 ? [uv[2], uv[3]] : [uv[0], uv[3]], [1, 1, 1]);
          if (city.cafe && r() < 0.5) { const ac = col(['#b8322a', '#2f6f4f', '#2c4f86', '#7a3b6e', '#c77a1e'][(r() * 5) | 0]), ya = 3.2, yb = 2.55, ob = 1.3; G.det.quad(R(x0, ya, zf), R(x1, ya, zf), R(x1, yb, zf + out * ob), R(x0, yb, zf + out * ob), LN(F, 0, 0.9, out * 0.45), [0, 0], [0, 0], [0, 0], [0, 0], ac); G.det.quad(R(x0, yb, zf + out * ob), R(x1, yb, zf + out * ob), R(x1, yb - 0.25, zf + out * ob), R(x0, yb - 0.25, zf + out * ob), LN(F, 0, 0, out), [0, 0], [0, 0], [0, 0], [0, 0], lighten(ac)); }
        } else { const cx = (x0 + x1) / 2; fb(G.det, cx - 0.6, cx + 0.6, 0.14, 2.45, 0, 0.06, col('#4a3020')); fb(G.det, cx - 0.78, cx + 0.78, 2.45, 2.7, 0, 0.14, li); fb(G.det, cx - 0.8, cx + 0.8, 0, 0.28, 0, 0.45, col('#8f877c')); }
      }
    }
  }

  // ------------------------------------------------ one chunk
  function buildChunk(c) {
    const d0 = c * CH, d1 = d0 + CH, group = new Group(), r = mulberry(seed * 7919 + c * 131 + 13);
    const G = { vpaint: new GB(), vglass: new GB(), vchrome: new GB(), vrubber: new GB(), vtrim: new GB(), vhead: new GB(), vtail: new GB(), vplate: new GB(), road: new GB(), asph: new GB(), walk: new GB(), grass: new GB(), roofP: new GB(), roofF: new GB(), det: new GB(), leaves: new GB(), metal: new GB(), gold: new GB(), glass: new GB(), lamp: new GB(), glow: new GB(), ao: new GB(), sign: new GB(), wall: {} };
    for (const f of Object.keys(M.wall)) G.wall[f] = new GB();
    const white = [1, 1, 1], yard = col('#8f8579'), dirt = col('#8a7a62'), grassC = [1, 1, 1];
    ribbon(G.road, d0, d1, -3.4, 3.4, 0, white, 6.8, 5, true);
    // ground by street kind
    for (let d = d0; d < d1;) {
      const sg = segAt(d) || { e: d1, type: 'street', kind: 'street' }, e = Math.min(sg.e, d1), kind = sg.type === 'square' ? 'square' : sg.kind || 'street';
      for (const s of [-1, 1]) {
        if (sg.type === 'corner' && s === -sg.dir) continue;
        const X = (a, b, y, g, cl, us = 2, vs = 2) => ribbon(g, d, e, s > 0 ? a : -b, s > 0 ? b : -a, y, cl, us, vs, false);
        if (sg.type === 'corner') { X(3.4, 9, 0.14, G.walk, white); curb(G.walk, d, e, s * 3.4, 0.14, col('#d8d2c6')); continue; }
        if (kind === 'square') { X(3.4, 34, 0.14, G.walk, white); curb(G.walk, d, e, s * 3.4, 0.14, col('#d8d2c6')); continue; }
        if (kind === 'avenue') { X(3.4, 5.8, 0.02, G.asph, white, 6.8, 5); X(5.8, 9, 0.16, G.walk, white); curb(G.walk, d, e, s * 5.8, 0.16, col('#d8d2c6')); X(9, 32, 0.15, G.walk, yard); }
        else { X(3.4, 5.8, 0.14, G.walk, white); curb(G.walk, d, e, s * 3.4, 0.14, col('#d8d2c6')); }
        if (kind === 'street') X(5.8, 30, 0.13, G.walk, yard);
        if (kind === 'boulevard') { X(5.8, 9.4, 0.13, G.grass, grassC, 3, 3); X(9.4, 12.5, 0.14, G.walk, white); X(12.5, 32, 0.13, G.walk, yard); }
        if (kind === 'park') X(5.8, 40, 0.13, G.grass, grassC, 3, 3);
        if (kind === 'construction') X(5.8, 40, 0.12, G.walk, dirt);
      }
      d = e;
    }
    // houses (from the deterministic per-side sequence)
    for (const s of [-1, 1]) {
      const H = house[s]; H.until(d1 + 40);
      for (const h of H.list) {
        if (h.s < d0 || h.s >= d1) continue;
        const k0 = kindAt(h.s), k1 = kindAt(h.s + h.W), km = kindAt(h.s + h.W / 2);
        if (k0 !== k1 || k0 !== km || !STT[k0] || !STT[k0].bx || nearCorner(h.s, h.W)) continue;
        buildHouse(G, h, s, STT[k0].bx, STT[k0].flo || 0);
      }
    }
    // per-kind dressing along both sides
    for (let d = Math.ceil(d0 / 2) * 2; d < d1; d += 2) {
      const sg = segAt(d); if (!sg || sg.type === 'corner' || nearCorner(d)) continue;
      const kind = sg.type === 'square' ? 'square' : sg.kind || 'street', step = Math.round(d) % 8 === 0;
      for (const s of [-1, 1]) {
        if (kind === 'avenue' && Math.round(d) % 9 === (s > 0 ? 0 : 4)) { const F = frameAt(d); tree(G, F, 0, s * 7.2, 1.05, city.tree, r); box(G.det, F, -0.7, 0.7, 0.15, 0.19, s * 7.2 - 0.7, s * 7.2 + 0.7, col('#5a4a3a'), 1, 1); }
        const stop = Math.floor(d / 90), atStop = s > 0 && (stop * 7 + seed) % 3 === 0, sd = stop * 90 + 30;
        if (kind === 'avenue' && atStop && Math.round(d) === sd && segAt(d + 8) && segAt(d - 8) && segAt(d + 8).kind === 'avenue' && segAt(d - 8).kind === 'avenue' && !nearCorner(d, 8)) busStop(G, d, s, r);
        else if (kind === 'avenue' && Math.round(d) % 7 === (s > 0 ? 1 : 4) && !(atStop && Math.abs(d - sd) < 11) && r() < 0.6) car(G, frameAt(d), 0, s * 4.6, r);
        if (kind === 'boulevard' && step) { tree(G, frameAt(d + (s > 0 ? 0 : 4)), 0, s * 7.6, 1.1, city.tree, r); }
        if (kind === 'boulevard' && Math.round(d) % 16 === (s > 0 ? 6 : 14)) furniture(G, d, s, r, 10.9);
        if (kind === 'park' && Math.round(d) % 6 === (s > 0 ? 0 : 3)) { for (let i = 0; i < 2; i++) tree(G, frameAt(d + r() * 4), 0, s * (9 + r() * 22), 0.9 + r() * 0.4, r() < 0.3 ? 'chestnut' : city.tree, r); }
        if (kind === 'park' && Math.round(d) % 2 === 0) { const F = frameAt(d); box(G.metal, F, -1, 1, 0.9, 0.96, s * 6.1 - 0.03, s * 6.1 + 0.03, white, 1, 1); box(G.metal, F, -0.04, 0.04, 0.13, 1.0, s * 6.1 - 0.04, s * 6.1 + 0.04, white, 1, 1); }
        if (kind === 'construction' && Math.round(d) % 2 === 0) { const F = frameAt(d); box(G.det, F, -1.0, 1.0, 0.12, 2.3, s * 6.1 - 0.04, s * 6.1 + 0.04, Math.round(d) % 12 < 2 ? col('#c94b2c') : col('#5e7a5a'), 1, 1); }
        if ((kind === 'street' || kind === 'avenue') && Math.round(d) % 10 === (s > 0 ? 3 : 8) && r() < 0.55) furniture(G, d, s, r, kind === 'avenue' ? 8.2 : 5.0);
      }
    }
    // building sites: a concrete frame and a tower crane per site
    for (const q of SEGS) {
      if (q.kind !== 'construction' || q.type === 'corner' || q.type === 'square' || q.s + 10 < d0 || q.s + 10 >= d1) continue;
      for (const s of [-1, 1]) {
        if (q.e - q.s < 40) continue;
        const F = frameAt(q.s + 24, s * 18), rr = mulberry(q.s * 3 + s), fl = 3 + ((rr() * 4) | 0), con = col('#b5b1a8');
        for (let k = 0; k <= fl; k++) box(G.det, F, -12, 12, k * 3.2, k * 3.2 + 0.3, -6, 6, con, 1, 1);
        for (let x = -12; x <= 12; x += 6) for (const z of [-6, 0, 6]) box(G.det, F, x - 0.2, x + 0.2, 0, fl * 3.2, z - 0.2, z + 0.2, con, 1, 1);
        if (s > 0) {
          const cx = 0, cz = 10, Hc = 34, yel = col('#e3b23c');
          for (let y = 0; y < Hc; y += 2) { box(G.det, F, cx - 0.9, cx + 0.9, y, y + 0.12, cz - 0.9, cz + 0.9, yel, 1, 1); }
          for (const [ox, oz] of [[-0.85, -0.85], [0.85, -0.85], [-0.85, 0.85], [0.85, 0.85]]) box(G.det, F, cx + ox - 0.1, cx + ox + 0.1, 0, Hc, cz + oz - 0.1, cz + oz + 0.1, yel, 1, 1);
          box(G.det, F, cx - 8, cx + 26, Hc, Hc + 1.4, cz - 0.6, cz + 0.6, yel, 1, 1); box(G.det, F, cx - 8, cx - 4, Hc - 1.6, Hc, cz - 1, cz + 1, col('#777'), 1, 1);
          box(G.det, F, cx - 1.2, cx + 1.2, Hc - 2.6, Hc, cz - 1.2, cz + 1.2, col('#d9d4c4'), 1, 1); box(G.metal, F, cx + 18, cx + 18.06, Hc - 14, Hc, cz - 0.03, cz + 0.03, white, 1, 1);
          box(G.det, F, cx + 17.2, cx + 18.8, Hc - 15, Hc - 14, cz - 0.6, cz + 0.6, col('#8a5a3a'), 1, 1);
        }
      }
    }
    // lamps
    const sp = 14;
    for (let d = Math.ceil(d0 / sp) * sp; d < d1; d += sp) {
      const sg = segAt(d); if (!sg || sg.type === 'corner') continue;
      const kind = sg.type === 'square' ? 'square' : sg.kind || 'street', x = kind === 'avenue' ? 6.2 : 3.9;
      lamp(G, d, -x); lamp(G, d + sp / 2, x);
    }
    // overhead lines: tram (one wire over the middle) or trolleybus (two wires), poles and span wires
    if (city.tram || city.trolley) {
      const wires = city.tram ? [0] : [-0.35, 0.35];
      for (let d = d0; d < d1; d++) for (const wx of wires) {
        const a = place(d, wx, 6.6, {}), b = place(d + 1, wx, 6.6, {}), n = LN(makeFrame(0, 0, 0, a.th), 0, 0, 0.009);
        G.metal.quad([a.wx - n[0], a.wy, a.wz - n[2]], [a.wx + n[0], a.wy, a.wz + n[2]], [b.wx + n[0], b.wy, b.wz + n[2]], [b.wx - n[0], b.wy, b.wz - n[2]], [0, -1, 0], [0, 0], [0, 0], [0, 0], [0, 0], white);
      }
      for (let d = Math.ceil(d0 / 28) * 28 + 3; d < d1; d += 28) {
        const sg = segAt(d); if (blocked(sg) || nearCorner(d)) continue;
        const kind = sg.kind || 'street', px = kind === 'avenue' ? 5.6 : 5.55, F = frameAt(d);
        for (const s of [-1, 1]) put(G.metal, CYL8, F, 0, 3.5, s * px, 0.2, 7.0, 0.2, white);
        box(G.metal, F, -0.01, 0.01, 6.6, 6.63, -px, px, white, 1, 1);
      }
    }
    // corners: the old street carries straight on, with houses
    for (const q of SEGS) {
      if (q.type !== 'corner' || q.s < d0 || q.s >= d1) continue;
      const F = frameAt(q.s), R = (x, y, z) => L(F, x, y, z), o = -q.dir, up = [0, 1, 0];
      const flat = (g, x0, x1, z0, z1, y, cl) => g.quad(R(x0, y, z0), R(x1, y, z0), R(x1, y, z1), R(x0, y, z1), up, [z0 / 2, x0 / 2], [z0 / 2, x1 / 2], [z1 / 2, x1 / 2], [z1 / 2, x0 / 2], cl);
      G.road.quad(R(0, -0.02, -3.4), R(48, -0.02, -3.4), R(48, -0.02, 3.4), R(0, -0.02, 3.4), up, [0, 0], [0, 9.6], [1, 9.6], [1, 0], white);
      flat(G.walk, -6, 48, o * 3.4, o * 5.8, 0.14, white); flat(G.walk, -6, 48, o * 5.8, o * 18, 0.13, yard);
      flat(G.walk, -6, 2 * CORNER_R - 10, q.dir * 3.4, q.dir * 16, -0.05, yard);
      flat(G.walk, 2 * CORNER_R - 10, 48, q.dir * 3.4, q.dir * 5.8, 0.14, white); flat(G.walk, 2 * CORNER_R - 10, 48, q.dir * 5.8, q.dir * 16, 0.13, yard);
      const fam = city.fac[0], tf = M.fac[fam], fh = TX.FAMILY[fam].fh, rr = mulberry(q.s | 0);
      for (let x = 4; x < 46; x += 8.4) { const cl = col(city.pal[(rr() * city.pal.length) | 0]), Hh = fh * (3 + ((rr() * 2) | 0)); box(G.wall[fam], F, x, x + 8, -2, Hh, -q.dir * 15, -q.dir * 6, cl, tf.bw, tf.fh, false, 0, x); box(G.det, F, x - 0.1, x + 8.1, Hh - 0.4, Hh, -q.dir * 6.35, -q.dir * 6, lighten(cl), 1, 1); G.roofF.quad(R(x, Hh, -q.dir * 15), R(x + 8, Hh, -q.dir * 15), R(x + 8, Hh, -q.dir * 6), R(x, Hh, -q.dir * 6), up, [0, 0], [1, 0], [1, 1], [0, 1], white); }
      for (let x = 2 * CORNER_R + 4; x < 46; x += 8.4) { const cl = col(city.pal[(rr() * city.pal.length) | 0]), Hh = fh * 3; box(G.wall[fam], F, x, x + 8, -2, Hh, q.dir * 6, q.dir * 15, cl, tf.bw, tf.fh, true, 0, x); }
      tree(G, F, 6, q.dir * 9, 1.1, city.tree, rr); tree(G, F, 12, q.dir * 11, 0.9, city.tree, rr);
    }
    // squares: the city's landmarks, trees and benches round the edge
    for (const q of SEGS) {
      if (q.type !== 'square' || q.s < d0 || q.s >= d1) continue;
      const land = city.land, spots = [[40, -22], [45, 22], [98, -22]];
      land.forEach((k, i) => { const [dd, x] = spots[i]; landmark(k, frameAt(q.s + dd, x), Math.sign(x), G); });
      if (land.length < 3) landmark('statue', frameAt(q.s + 92, 16), 1, G);
    }
    for (let d = Math.ceil(d0 / 12) * 12; d < d1; d += 12) {
      const sg = segAt(d); if (!sg || sg.type !== 'square' || d < sg.s + 6 || d > sg.e - 6) continue;
      const F = frameAt(d, 0, 0.14), spots = [[40, -1], [45, 1], [98, -1], [92, 1]].slice(0, Math.max(city.land.length, 2) + (city.land.length < 3 ? 1 : 0));
      for (const s of [-1, 1]) {
        if (spots.some(([dd, ss]) => ss === s && Math.abs(d - (sg.s + dd)) < 30)) continue;   // keep the view of the landmarks open
        tree(G, F, 0, s * 8.5, 1 + r() * 0.25, city.tree, r); if (r() < 0.5) furniture(G, d + 4, s, r, 6.5);
      }
    }
    // bake meshes
    const mats = [['road', M.road, 0, 1], ['asph', M.asph, 0, 1], ['walk', M.walk, 0, 1], ['grass', M.grass, 0, 1], ['roofP', M.roofP, 1, 1], ['roofF', M.roofF, 1, 1], ['det', M.det, 1, 1], ['leaves', M.leaves, 1, 1], ['metal', M.metal, 1, 0], ['gold', M.gold, 1, 0], ['glass', M.glass, 0, 0], ['lamp', M.lamp, 0, 0], ['sign', M.sign, 0, 0], ['ao', M.ao, 0, 0], ['glow', M.glow, 0, 0],
      ['vpaint', M.v.paint, 1, 1], ['vglass', M.v.glass, 1, 0], ['vchrome', M.v.chrome, 0, 0], ['vrubber', M.v.rubber, 1, 0], ['vtrim', M.v.trim, 1, 0], ['vhead', M.v.head, 0, 0], ['vtail', M.v.tail, 0, 0], ['vplate', M.v.plate, 0, 0]];
    for (const f of Object.keys(G.wall)) mats.push([null, M.wall[f], 1, 1, G.wall[f]]);
    for (const [k, m, cast, recv, gb] of mats) {
      const geo = (gb || G[k]).build(); if (!geo) continue;
      const mesh = new Mesh(geo, m); mesh.castShadow = !!cast; mesh.receiveShadow = !!recv; if (cast) mesh.customDepthMaterial = DEPTH;
      if (m === M.glow || m === M.ao) mesh.renderOrder = 1;
      group.add(mesh);
    }
    scene.add(group);
    return group;
  }
  function disposeChunk(g) { g.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); scene.remove(g); }
  return { buildChunk, disposeChunk };
}
