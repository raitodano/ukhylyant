// Tiny geometry builder: everything of one material in a chunk goes into ONE BufferGeometry (few draw calls).
import { BufferGeometry, Float32BufferAttribute, Color, Matrix4, Matrix3, Vector3 } from 'three';
const tmpC = new Color();
export function col(hex) { tmpC.set(hex); return [tmpC.r, tmpC.g, tmpC.b]; }   // sRGB hex -> linear vertex colour
export class GB {
  constructor() { this.p = []; this.n = []; this.u = []; this.c = []; }
  tri(a, b, c, nrm, ua, ub, uc, cl) {
    // keep winding consistent with the given outward normal (front faces only => cheaper)
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const gx = uy * vz - uz * vy, gy = uz * vx - ux * vz, gz = ux * vy - uy * vx;
    if (gx * nrm[0] + gy * nrm[1] + gz * nrm[2] < 0) { const t = b; b = c; c = t; const tu = ub; ub = uc; uc = tu; }
    this.p.push(a[0], a[1], a[2], b[0], b[1], b[2], c[0], c[1], c[2]);
    this.n.push(nrm[0], nrm[1], nrm[2], nrm[0], nrm[1], nrm[2], nrm[0], nrm[1], nrm[2]);
    this.u.push(ua[0], ua[1], ub[0], ub[1], uc[0], uc[1]);
    this.c.push(cl[0], cl[1], cl[2], cl[0], cl[1], cl[2], cl[0], cl[1], cl[2]);
  }
  quad(a, b, c, d, nrm, ua, ub, uc, ud, cl) { this.tri(a, b, c, nrm, ua, ub, uc, cl); this.tri(a, c, d, nrm, ua, uc, ud, cl); }
  // append a three.js geometry (smooth normals kept) placed by a Matrix4, in one colour
  geo(g, m, cl) {
    const src = g.index ? g.toNonIndexed() : g, P = src.attributes.position, N = src.attributes.normal, U = src.attributes.uv;
    const nm = new Matrix3().getNormalMatrix(m), v = new Vector3();
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i).applyMatrix4(m); this.p.push(v.x, v.y, v.z);
      v.fromBufferAttribute(N, i).applyMatrix3(nm).normalize(); this.n.push(v.x, v.y, v.z);
      this.u.push(U ? U.getX(i) : 0, U ? U.getY(i) : 0); this.c.push(cl[0], cl[1], cl[2]);
    }
    if (src !== g) src.dispose();
  }
  get empty() { return !this.p.length; }
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
// Matrix4 of a local frame + offset/rotation/scale (for gb.geo)
export function frameMatrix(F, x, y, z, rotY = 0, sx = 1, sy = 1, sz = 1) {
  // same axes as L(): geometry +x → along the route, +z → to the right, +y up
  const P = L(F, x, y, z), phi = Math.PI / 2 - Math.atan2(F.fx, -F.fz) + rotY;
  return new Matrix4().makeRotationY(phi).setPosition(P[0], P[1], P[2]).multiply(new Matrix4().makeScale(sx, sy, sz));
}
// a box in a local frame. uv: facade bays of bw × bh metres on the 4 walls (v measured from v0), plain corner on top
export function box(gb, F, x0, x1, y0, y1, z0, z1, cl, bw = 1.9, bh = 3.3, top = true, v0 = y0, u0 = 0) {
  const P = (x, y, z) => L(F, x, y, z);
  const wu = (a) => (a - u0) / bw, wv = (y) => (y - v0) / bh;
  gb.quad(P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0), LN(F, 0, 0, -1), [wu(x0), wv(y0)], [wu(x1), wv(y0)], [wu(x1), wv(y1)], [wu(x0), wv(y1)], cl);
  gb.quad(P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1), LN(F, 0, 0, 1), [-wu(x0), wv(y0)], [-wu(x1), wv(y0)], [-wu(x1), wv(y1)], [-wu(x0), wv(y1)], cl);
  gb.quad(P(x0, y0, z0), P(x0, y0, z1), P(x0, y1, z1), P(x0, y1, z0), LN(F, -1, 0, 0), [-wu(z0), wv(y0)], [-wu(z1), wv(y0)], [-wu(z1), wv(y1)], [-wu(z0), wv(y1)], cl);
  gb.quad(P(x1, y0, z0), P(x1, y0, z1), P(x1, y1, z1), P(x1, y1, z0), LN(F, 1, 0, 0), [wu(z0), wv(y0)], [wu(z1), wv(y0)], [wu(z1), wv(y1)], [wu(z0), wv(y1)], cl);
  if (top) gb.quad(P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1), [0, 1, 0], [wu(x0), wu(z0)], [wu(x1), wu(z0)], [wu(x1), wu(z1)], [wu(x0), wu(z1)], cl);
}
