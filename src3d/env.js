// Light, sky, weather and post-processing. A physical sky (Rayleigh/Mie scattering with its own clouds) by day,
// a gradient dome with stars and the moon by night; the same sky is baked into an environment map (PMREM) so
// PBR materials pick up its light and glass / wet stone reflect it. Quality tiers trade shadows, resolution and bloom.
import {
  Color, Vector3, FogExp2, HemisphereLight, DirectionalLight, PointLight, Mesh, MeshBasicMaterial, SphereGeometry, CircleGeometry,
  BackSide, BufferGeometry, BufferAttribute, Points, PointsMaterial, LineSegments, LineBasicMaterial, AdditiveBlending, DynamicDrawUsage,
  Scene, PMREMGenerator, Texture, EquirectangularReflectionMapping, WebGLRenderTarget, HalfFloatType, Vector2, PCFShadowMap, ACESFilmicToneMapping, SRGBColorSpace
} from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { glowTexture } from './textures.js';
import { PH } from './assets.js';

export const TOD_NAMES = { day: ['День', '☀️'], sunset: ['Захід сонця', '🌇'], night: ['Ніч', '🌙'] };
export const WX_NAMES = { clear: ['Ясно', '🌤️'], rain: ['Дощ', '🌧️'], storm: ['Гроза', '⛈️'], snow: ['Сніг', '🌨️'], fog: ['Туман', '🌫️'] };
export const TIERS = ['ultra', 'high', 'medium', 'low'];
export const TIER_NAMES = { ultra: 'Ультра', high: 'Високі', medium: 'Середні', low: 'Низькі' };
const TOD = {
  day: { dir: [-0.45, 0.8, 0.42], sunCol: '#fff3e0', sunI: 3.2, hemiSky: '#cfe3ff', hemiGround: '#7a6650', hemiI: 0.45, envI: 1.0, fog: '#bcd0e2', win: 0, lamp: 0.3, top: '#5f9fd8', hor: '#cfe1ee', turb: 2.6, ray: 1.1, mie: 0.004, gain: 1.0 },
  sunset: { dir: [-0.82, 0.12, 0.56], sunCol: '#ffa65e', sunI: 2.8, hemiSky: '#f3c7a6', hemiGround: '#4f3a36', hemiI: 0.4, envI: 0.9, fog: '#e2aa84', win: 0.7, lamp: 1.4, top: '#3a4f86', hor: '#e9a77c', turb: 6, ray: 2.6, mie: 0.006, gain: 1.0 },
  night: { dir: [0.35, 0.6, -0.7], sunCol: '#a9bbff', sunI: 0.42, hemiSky: '#3c4c7c', hemiGround: '#141420', hemiI: 0.3, envI: 0.35, fog: '#141b33', win: 1.6, lamp: 3.2, top: '#050a1c', hor: '#1c2748' }
};
const WX = {
  clear: { tint: null, mix: 0, sun: 1, dens: 0.0055, cover: 0.32, cden: 0.35, drops: 0 },
  rain: { tint: '#7c8693', mix: 0.62, sun: 0.28, dens: 0.011, cover: 0.85, cden: 0.85, drops: 1000, gain: 0.6 },
  storm: { tint: '#4a525e', mix: 0.82, sun: 0.12, dens: 0.015, cover: 0.97, cden: 1.0, drops: 1600, gain: 0.38 },
  snow: { tint: '#cfd6df', mix: 0.55, sun: 0.42, dens: 0.013, cover: 0.85, cden: 0.7, drops: 0, snow: true, gain: 0.8 },
  fog: { tint: '#c2c7cd', mix: 0.8, sun: 0.3, dens: 0.034, cover: 0.7, cden: 0.6, drops: 0, gain: 0.75 }
};
const RAIN_N = 1600, SNOW_N = 1600, BOX = { x: 22, y0: -3, y1: 20, z: 22 };
const wrap = (v, a, b) => { const w = b - a; return v < a ? v + w * Math.ceil((a - v) / w) : v >= b ? v - w * Math.ceil((v - b + 1e-6) / w) : v; };

export function createEnv(renderer, scene, camera) {
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = PCFShadowMap;
  const rnd = Math.random;
  const E = { bakeGain: 0.05, tod: 'day', wx: 'clear', tier: 'high', sunDir: new Vector3(-0.45, 0.8, 0.42).normalize(), flash: 0, nextBolt: 6, camVel: { x: 0, y: 0, z: 0 }, onThunder: null, state: {} };
  scene.fog = new FogExp2('#bcd0e2', 0.0055);
  const hemi = new HemisphereLight('#cfe3ff', '#7a6650', 0.45); scene.add(hemi);
  const sun = new DirectionalLight('#fff3e0', 3.2); scene.add(sun); scene.add(sun.target);
  sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 1, far: 200 });
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.05;
  const fill = new DirectionalLight('#9ec4ff', 0.25); scene.add(fill); scene.add(fill.target);
  const near = new PointLight('#ffd49a', 0, 16, 1.4); scene.add(near);
  Object.assign(E, { hemi, sun, fill, near });

  // --- day sky: physical scattering + clouds (with a brightness gain we can turn down under overcast)
  const mkSky = () => { const s = new Sky(); s.scale.setScalar(420); return s; };
  const sky = mkSky();
  sky.material.uniforms.skyGain = { value: 1 };
  sky.material.fragmentShader = 'uniform float skyGain;\n' + sky.material.fragmentShader.replace('gl_FragColor = vec4( texColor, 1.0 );', 'gl_FragColor = vec4( texColor * skyGain, 1.0 );');
  sky.material.fog = false; sky.renderOrder = -3; sky.frustumCulled = false; scene.add(sky);
  // --- night sky: gradient dome, stars, moon
  const domeGeo = new SphereGeometry(400, 32, 16), domeMat = new MeshBasicMaterial({ vertexColors: true, side: BackSide, fog: false, depthWrite: false });
  const dome = new Mesh(domeGeo, domeMat); dome.renderOrder = -3; dome.frustumCulled = false; scene.add(dome);
  const GLOW = glowTexture();
  const moon = new Mesh(new CircleGeometry(9, 24), new MeshBasicMaterial({ map: GLOW, color: '#e6ecff', fog: false, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  moon.renderOrder = -2; scene.add(moon);
  const sg = new BufferGeometry(), sa = new Float32Array(600 * 3);
  for (let i = 0; i < 600; i++) { const u = rnd() * Math.PI * 2, v = 0.05 + rnd() * 1.45, r = 380; sa.set([Math.cos(u) * Math.cos(v) * r, Math.sin(v) * r, Math.sin(u) * Math.cos(v) * r], i * 3); }
  sg.setAttribute('position', new BufferAttribute(sa, 3));
  const stars = new Points(sg, new PointsMaterial({ color: '#ffffff', size: 1.5, sizeAttenuation: false, fog: false, transparent: true, opacity: 0.9, depthWrite: false }));
  stars.renderOrder = -2; stars.frustumCulled = false; scene.add(stars);
  function paintDome(top, hor, glowK = 0.12) {
    const pos = domeGeo.attributes.position, arr = new Float32Array(pos.count * 3), v = new Vector3(), c = new Color(), md = E.sunDir;
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i).normalize();
      c.copy(hor).lerp(top, Math.pow(Math.max(0, v.y), 0.5)); if (v.y < 0) c.copy(hor).multiplyScalar(0.7);
      const d = Math.pow(Math.max(0, v.dot(md)), 6) * glowK; c.r += d * 0.6; c.g += d * 0.7; c.b += d;
      arr.set([c.r, c.g, c.b], i * 3);
    }
    domeGeo.setAttribute('color', new BufferAttribute(arr, 3));
  }
  // --- environment map from the same sky
  const pmrem = new PMREMGenerator(renderer), envScene = new Scene();
  const envSky = new Mesh(sky.geometry, sky.material); envSky.scale.setScalar(100); envScene.add(envSky);
  const envDome = new Mesh(domeGeo, domeMat); envDome.scale.setScalar(0.25); envScene.add(envDome);
  let envRT = null; const skyTex = {};
  function bakeEnv() {
    if (E.photo) { const rt = pmrem.fromEquirectangular(E.photo); if (envRT) envRT.dispose(); envRT = rt; scene.environment = rt.texture; return; }
    envSky.visible = !!E.phys; envDome.visible = !E.phys;
    // the sky shader's radiance is far brighter than the scene's light units and has the sun disc in it: bake without the disc, scaled down
    const u = sky.material.uniforms, g0 = u.skyGain.value, d0 = u.showSunDisc.value;
    u.skyGain.value = g0 * E.bakeGain; u.showSunDisc.value = 0;
    const rt = pmrem.fromScene(envScene, 0, 0.5, 500);
    u.skyGain.value = g0; u.showSunDisc.value = d0;
    if (envRT) envRT.dispose(); envRT = rt; scene.environment = rt.texture;
  }

  // --- weather particles
  const rainOff = new Float32Array(RAIN_N * 3), rainArr = new Float32Array(RAIN_N * 6);
  for (let i = 0; i < RAIN_N; i++) rainOff.set([(rnd() * 2 - 1) * BOX.x, BOX.y0 + rnd() * (BOX.y1 - BOX.y0), (rnd() * 2 - 1) * BOX.z], i * 3);
  const rainGeo = new BufferGeometry(); rainGeo.setAttribute('position', new BufferAttribute(rainArr, 3).setUsage(DynamicDrawUsage));
  const rain = new LineSegments(rainGeo, new LineBasicMaterial({ color: '#c3cfdc', transparent: true, opacity: 0.45, depthWrite: false }));
  rain.frustumCulled = false; rain.visible = false; scene.add(rain);
  const snowArr = new Float32Array(SNOW_N * 3);
  for (let i = 0; i < SNOW_N; i++) snowArr.set([(rnd() * 2 - 1) * BOX.x, BOX.y0 + rnd() * (BOX.y1 - BOX.y0), (rnd() * 2 - 1) * BOX.z], i * 3);
  const snowGeo = new BufferGeometry(); snowGeo.setAttribute('position', new BufferAttribute(snowArr, 3).setUsage(DynamicDrawUsage));
  const snow = new Points(snowGeo, new PointsMaterial({ color: '#ffffff', map: GLOW, size: 0.16, transparent: true, depthWrite: false, opacity: 0.95 }));
  snow.frustumCulled = false; snow.visible = false; scene.add(snow);
  let drops = 0, hemiBase = 0.45, envBase = 1, gainBase = 1;

  // --- post-processing (ultra tier): MSAA render target → bloom → tone mapping/sRGB output
  let composer = null, bloom = null;
  function makeComposer() {
    const size = renderer.getDrawingBufferSize(new Vector2());
    const rt = new WebGLRenderTarget(size.x, size.y, { type: HalfFloatType, samples: 4 });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new Vector2(size.x / 2, size.y / 2), 0.3, 0.4, 2.5); composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }

  E.apply = function (tod, wx) {
    if (tod) E.tod = tod; if (wx) E.wx = wx;
    const S = TOD[E.tod], W = WX[E.wx], night = E.tod === 'night', nk = night ? 0.2 : E.tod === 'sunset' ? 0.65 : 1;
    const tint = W.tint ? new Color(W.tint).multiplyScalar(nk) : null;
    const mixc = (c) => { const x = new Color(c); if (tint) x.lerp(tint, W.mix); return x; };
    E.sunDir.set(...S.dir).normalize();
    scene.fog.color.copy(mixc(S.fog)); scene.fog.density = W.dens * (night && E.wx === 'clear' ? 1.2 : 1);
    const phys = !night && W.mix < 0.5;   // physical sky only when it is clear; overcast/fog/snow get a grey dome
    E.phys = phys;
    sky.visible = phys; dome.visible = !phys; stars.visible = night && W.mix < 0.5; moon.visible = night && W.mix < 0.6;
    if (phys) {
      const u = sky.material.uniforms;
      u.turbidity.value = S.turb + W.mix * 6; u.rayleigh.value = S.ray * (1 - W.mix * 0.6); u.mieCoefficient.value = S.mie; u.mieDirectionalG.value = 0.8;
      u.sunPosition.value.copy(E.sunDir); u.cloudCoverage.value = W.cover; u.cloudDensity.value = W.cden; u.showSunDisc.value = W.mix < 0.5 ? 1 : 0;
      gainBase = S.gain * (W.gain || 1); u.skyGain.value = gainBase;
    } else paintDome(mixc(S.top), mixc(S.hor), night ? 0.12 : W.mix > 0.5 ? 0.05 : 0.3);
    sun.color.set(S.sunCol); sun.intensity = S.sunI * W.sun; sun.shadow.intensity = W.mix > 0.5 ? 0.4 : 1;
    E.photo = null; scene.background = null;
    if (PH.sky) {   // photographed sky panoramas (CC0, Poly Haven): background, environment light and the sun all come from the photo
      const key = night ? (W.mix > 0.5 ? 'overcast' : 'night') : E.wx === 'fog' ? 'misty' : W.mix > 0.5 ? 'overcast' : E.tod === 'sunset' ? 'sunset' : 'day';
      const sk = PH.sky[key];
      if (sk && sk.img) {
        if (!skyTex[key]) { const t = new Texture(sk.img); t.colorSpace = SRGBColorSpace; t.mapping = EquirectangularReflectionMapping; t.needsUpdate = true; skyTex[key] = t; }
        const dim = night ? (W.mix > 0.5 ? 0.1 : 1) : E.wx === 'storm' ? 0.45 : E.wx === 'rain' ? 0.72 : E.wx === 'snow' ? 0.95 : 1;
        E.photo = skyTex[key]; scene.background = E.photo; scene.backgroundIntensity = dim; E.bgBase = dim;
        sky.visible = false; dome.visible = false; stars.visible = false; moon.visible = false;
        if (!night) E.sunDir.set(-sk.sun[0], Math.max(0.08, sk.sun[1]), -sk.sun[2]).normalize();
        const sc = new Color().setRGB(sk.sunCol[0], sk.sunCol[1], sk.sunCol[2]); if (E.tod === 'sunset') sc.lerp(new Color('#ffffff'), 0.45);
        if (!night && W.mix < 0.5) sun.color.copy(sc);
        scene.fog.color.setRGB(sk.hor[0], sk.hor[1], sk.hor[2], SRGBColorSpace).multiplyScalar(dim * (night ? 0.35 : 1));
        if (W.tint && !night && key === 'day') scene.fog.color.lerp(new Color(W.tint), W.mix);
      }
    }
    hemi.color.copy(mixc(S.hemiSky)); hemi.groundColor.set(S.hemiGround); hemiBase = S.hemiI * (W.mix ? 1.3 : 1); hemi.intensity = hemiBase;
    fill.intensity = night ? 0.08 : 0.22;
    envBase = S.envI * (W.mix > 0.5 ? 0.75 : 1); scene.environmentIntensity = envBase;
    if (E.photo) { hemiBase *= 0.35; hemi.intensity = hemiBase; envBase = (night ? 0.3 : W.mix > 0.5 ? 0.45 : 0.25) * (night ? 1 : scene.backgroundIntensity); scene.environmentIntensity = envBase; scene.fog.density *= 0.55; if (!night) sun.intensity *= 1.12; }
    near.intensity = night ? 24 : (E.tod === 'sunset' || W.mix > 0.7) ? 5 : 0;
    drops = W.drops ? Math.round(W.drops * (E.tier === 'low' ? 0.5 : 1)) : 0;
    rain.visible = drops > 0; rainGeo.setDrawRange(0, drops * 2); rain.material.opacity = night ? 0.28 : 0.45;
    snow.visible = !!W.snow;
    renderer.toneMappingExposure = (night ? 1.15 : E.tod === 'sunset' ? 0.9 : 0.95) * (E.photo ? 0.9 : 1);
    const gloom = W.mix > 0.6 && !night;
    E.state = { tod: E.tod, wx: E.wx, night, gloom, wet: E.wx === 'rain' || E.wx === 'storm', snow: !!W.snow,
      win: S.win + (gloom ? 0.35 : 0), lamp: S.lamp + (W.mix > 0.7 ? 0.9 : 0), glow: night ? 0.85 : E.tod === 'sunset' ? 0.3 : W.mix > 0.7 ? 0.2 : 0 };
    bakeEnv();
    if (bloom) { bloom.strength = night ? 0.5 : 0.2; bloom.threshold = night ? 0.9 : 2.5; }
    E.nextBolt = 1.5;
    return E.state;
  };

  E.setTier = function (t) {
    E.tier = t;
    const dpr = window.devicePixelRatio || 1;
    renderer.setPixelRatio(Math.min(dpr, { ultra: 2, high: 1.6, medium: 1.3, low: 1 }[t]));
    const sh = t === 'ultra' || t === 'high';
    if (renderer.shadowMap.enabled !== sh || sun.castShadow !== sh) {
      renderer.shadowMap.enabled = sh; sun.castShadow = sh;
      scene.traverse((o) => { if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { m.needsUpdate = true; }); });
    }
    const ms = t === 'ultra' ? 2048 : 1024;
    if (sun.shadow.mapSize.x !== ms) { sun.shadow.mapSize.set(ms, ms); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    if (t === 'ultra' && !composer) { makeComposer(); E.apply(); }
    if (t !== 'ultra' && composer) { composer.dispose(); composer = null; bloom = null; }
    E.resize();
  };
  E.resize = function () {
    if (!composer) return;
    const size = renderer.getDrawingBufferSize(new Vector2());
    composer.setSize(size.x / renderer.getPixelRatio(), size.y / renderer.getPixelRatio()); composer.setPixelRatio(renderer.getPixelRatio());
  };
  E.render = function () { if (composer) composer.render(); else renderer.render(scene, camera); };

  // per frame: follow the camera, move weather, lightning
  E.update = function (dt, time, focus) {
    const cp = camera.position;
    sky.position.copy(cp); dome.position.copy(cp); stars.position.copy(cp);
    moon.position.copy(cp).addScaledVector(E.sunDir, 360); moon.lookAt(cp);
    sky.material.uniforms.time.value = time;
    sun.target.position.copy(focus); sun.position.copy(focus).addScaledVector(E.sunDir, 100);
    fill.target.position.copy(focus); fill.position.set(focus.x - E.sunDir.x * 50, focus.y + 40, focus.z - E.sunDir.z * 50);
    const v = E.camVel;
    if (rain.visible) {
      const vx = 2.5 - v.x, vy = -24 - v.y, vz = 1.0 - v.z, k = 0.045;
      for (let i = 0; i < drops; i++) {
        const j = i * 3;
        const x = wrap(rainOff[j] + vx * dt, -BOX.x, BOX.x), y = wrap(rainOff[j + 1] + vy * dt, BOX.y0, BOX.y1), z = wrap(rainOff[j + 2] + vz * dt, -BOX.z, BOX.z);
        rainOff[j] = x; rainOff[j + 1] = y; rainOff[j + 2] = z;
        const o = i * 6; rainArr[o] = x; rainArr[o + 1] = y; rainArr[o + 2] = z; rainArr[o + 3] = x - vx * k; rainArr[o + 4] = y - vy * k; rainArr[o + 5] = z - vz * k;
      }
      rainGeo.attributes.position.needsUpdate = true; rain.position.copy(cp);
    }
    if (snow.visible) {
      for (let i = 0; i < SNOW_N; i++) {
        const j = i * 3;
        snowArr[j] = wrap(snowArr[j] + (Math.sin(time * 0.9 + i) * 0.6 - v.x) * dt, -BOX.x, BOX.x);
        snowArr[j + 1] = wrap(snowArr[j + 1] + (-1.4 - v.y) * dt, BOX.y0, BOX.y1);
        snowArr[j + 2] = wrap(snowArr[j + 2] + (Math.cos(time * 0.7 + i * 1.3) * 0.5 - v.z) * dt, -BOX.z, BOX.z);
      }
      snowGeo.attributes.position.needsUpdate = true; snow.position.copy(cp);
    }
    if (E.wx === 'storm') { E.nextBolt -= dt; if (E.nextBolt <= 0) { E.flash = 1; E.nextBolt = 4 + rnd() * 7; if (E.onThunder) E.onThunder(0.4 + rnd() * 0.9); } }
    if (E.flash > 0) {
      E.flash = Math.max(0, E.flash - dt * 3.2);
      const f = E.flash > 0.75 || (E.flash > 0.3 && E.flash < 0.5) ? E.flash : 0;
      hemi.intensity = hemiBase + f * 4; scene.environmentIntensity = envBase + f * 2; if (E.photo) scene.backgroundIntensity = E.bgBase + f * 1.5; sky.material.uniforms.skyGain.value = gainBase + f * 2.5;
    } else { hemi.intensity = hemiBase; scene.environmentIntensity = envBase; if (E.photo) scene.backgroundIntensity = E.bgBase; sky.material.uniforms.skyGain.value = gainBase; }
  };
  E.flashNow = () => { E.flash = 1; };
  return E;
}
