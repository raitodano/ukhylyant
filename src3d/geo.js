// Tiny geometry builder: everything of one material in a chunk goes into ONE BufferGeometry (few draw calls).
import { BufferGeometry, Float32BufferAttribute, Color } from 'three';
const tmpC = new Color();
export function col(hex) { tmpC.set(hex); return [tmpC.r, tmpC.g, tmpC.b]; }   // sRGB hex -> linear vertex colour
export class GB {
  constructor() { this.p = []; this.n = []; this.u = []; this.c = []; }
  tri(a, b, c, nrm, ua, ub, uc, cl) {
    // keep winding consistent with the given outward normal (front faces only => cheaper)
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const gx = uy * vz - uz * vy, gy = uz * vx - ux * vz, gz = ux * vy - uy * vx;
    if (gx * nrm[0] + gy * nrm[1] + gz * nrm[2] < 0) { const t = b; b = c; c = t; const tu = ub; ub = uc; uc = tu; }
    this.p.push(...a, ...b, ...c); this.n.push(...nrm, ...nrm, ...nrm); this.u.push(...ua, ...ub, ...uc); this.c.push(...cl, ...cl, ...cl);
  }
  quad(a, b, c, d, nrm, ua, ub, uc, ud, cl) { this.tri(a, b, c, nrm, ua, ub, uc, cl); this.tri(a, c, d, nrm, ua, uc, ud, cl); }
  build() {
    if (!this.p.length) return null;
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new Float32BufferAttribute(this.n, 3));
    g.setAttribute('uv', new Float32BufferAttribute(this.u, 2));
    g.setAttribute('color', new Float32BufferAttribute(this.c, 3));
    g.computeBoundingSphere();
    return g;
  }
}
// local frame on the route: x along the street, y up, z to the right of the runner
export function makeFrame(ox, oy, oz, th) { const s = Math.sin(th), c = Math.cos(th); return { ox, oy, oz, fx: s, fz: -c, nx: c, nz: s }; }
export function L(F, x, y, z) { return [F.ox + F.fx * x + F.nx * z, F.oy + y, F.oz + F.fz * x + F.nz * z]; }
export function LN(F, x, y, z) { return [F.fx * x + F.nx * z, y, F.fz * x + F.nz * z]; }
// a box in a local frame. uv: facade bays of bw x bh metres on the 4 walls, plain corner on top
export function box(gb, F, x0, x1, y0, y1, z0, z1, cl, bw = 1.9, bh = 3.3, top = true) {
  const P = (x, y, z) => L(F, x, y, z);
  const wu = (a) => a / bw, wv = (y) => (y - y0) / bh;
  gb.quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0), LN(F, 0, 0, -1), [wu(x0), wv(y0)], [wu(x1), wv(y0)], [wu(x1), wv(y1)], [wu(x0), wv(y1)], cl);
  gb.quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), LN(F, 0, 0, 1), [wu(x0), wv(y0)], [wu(x1), wv(y0)], [wu(x1), wv(y1)], [wu(x0), wv(y1)], cl);
  gb.quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), LN(F, -1, 0, 0), [wu(z0), wv(y0)], [wu(z1), wv(y0)], [wu(z1), wv(y1)], [wu(z0), wv(y1)], cl);
  gb.quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), LN(F, 1, 0, 0), [wu(z0), wv(y0)], [wu(z1), wv(y0)], [wu(z1), wv(y1)], [wu(z0), wv(y1)], cl);
  if (top) gb.quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), [0, 1, 0], [0.02, 0.02], [0.03, 0.02], [0.03, 0.03], [0.02, 0.03], cl);
}
