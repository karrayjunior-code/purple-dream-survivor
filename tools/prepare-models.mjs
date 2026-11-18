// Prepara los modelos KayKit (CC0) para el juego: quita accesorios, deja solo las
// animaciones necesarias, reduce polígonos/textura y recolorea al estilo del juego.
// Uso: node prepare-models.mjs <carpeta_origen> <carpeta_destino>
// Dependencias (solo para este script, no para el juego):
//   npm i @gltf-transform/core@4 @gltf-transform/functions@4 meshoptimizer pngjs
import { NodeIO } from '@gltf-transform/core';
import { prune, resample, weld, simplify, dedup } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import { PNG } from 'pngjs';
import path from 'path';

const [SRC, DST] = process.argv.slice(2);
const CFG = {
  mago: { src: 'Mage.glb', drop: ['Spellbook', 'Spellbook_open', '1H_Wand'],
    anims: { Idle: 'idle', Running_A: 'run', Hit_A: 'hit', Death_A: 'die', Spellcast_Shoot: 'cast' }, tex: 64 },
  esqueleto: { src: 'Skeleton_Minion.glb', drop: [],
    anims: { Walking_D_Skeletons: 'walk', Hit_A: 'hit', Death_A: 'die' }, bake: true, ratio: 0.2, error: 0.05, recolor: 'skeleton' },
  encapuchado: { src: 'Rogue_Hooded.glb', drop: ['Knife_Offhand', '1H_Crossbow', '2H_Crossbow', 'Knife', 'Throwable'],
    anims: { Walking_A: 'walk', Hit_A: 'hit', Death_A: 'die' }, bake: true, ratio: 0.28, error: 0.04, recolor: 'hooded' },
};

// --- color helpers ---
function rgb2hsv(r, g, b) { const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn; let h = 0;
  if (d) h = mx === r ? ((g - b) / d + 6) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; return [h * 60, mx ? d / mx : 0, mx]; }
function hsv2rgb(h, s, v) { const f = n => { const k = (n + h / 60) % 6; return v - v * s * Math.max(0, Math.min(k, 4 - k, 1)); }; return [f(5), f(3), f(1)]; }
function grade(c, mode) {
  let [h, s, v] = rgb2hsv(...c);
  if (mode === 'hooded') {
    if (h > 90 && h < 180 && s > 0.3) { h = 352; s = Math.min(1, s * 1.1); v = Math.min(1, v * 1.25); }  // capa verde -> roja
    else if (h > 10 && h < 40 && s > 0.25 && s < 0.6 && v > 0.82) { h = 225; s = 0.12; v *= 0.85; }       // cara -> máscara plateada
  }
  if (mode === 'skeleton' && s < 0.35 && v > 0.55) { s *= 0.35; v = Math.min(1, v * 1.1); }                // huesos más blancos
  if (s > 0.3) s = Math.min(1, s * 1.3);                                                                 // más saturado (retro), sin teñir blancos/huesos
  return hsv2rgb(h, s, v);
}
const decode = img => PNG.sync.read(Buffer.from(img));
function sample(png, u, v) {
  const x = Math.min(png.width - 1, Math.floor((((u % 1) + 1) % 1) * png.width)), y = Math.min(png.height - 1, Math.floor((((v % 1) + 1) % 1) * png.height));
  const o = (y * png.width + x) * 4; return [png.data[o] / 255, png.data[o + 1] / 255, png.data[o + 2] / 255];
}
function shrink(png, size) {
  const out = new PNG({ width: size, height: size }), k = png.width / size;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const acc = [0, 0, 0];
    for (let j = 0; j < k; j++) for (let i = 0; i < k; i++) { const o = ((y * k + j) * png.width + x * k + i) * 4; acc[0] += png.data[o]; acc[1] += png.data[o + 1]; acc[2] += png.data[o + 2]; }
    const c = grade(acc.map(a => a / (k * k * 255)));
    const o = (y * size + x) * 4; out.data[o] = c[0] * 255; out.data[o + 1] = c[1] * 255; out.data[o + 2] = c[2] * 255; out.data[o + 3] = 255;
  }
  return PNG.sync.write(out);
}

await MeshoptSimplifier.ready;
const io = new NodeIO();
for (const [name, cfg] of Object.entries(CFG)) {
  const doc = await io.read(path.join(SRC, cfg.src)); const root = doc.getRoot();
  for (const n of root.listNodes()) if (cfg.drop.includes(n.getName())) n.dispose();
  for (const a of root.listAnimations()) { const nn = cfg.anims[a.getName()]; if (nn) a.setName(nn); else a.dispose(); }
  if (cfg.bake) {
    const flat = doc.createMaterial('color');
    for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) {
      const mat = p.getMaterial(), tex = mat && mat.getBaseColorTexture(), uv = p.getAttribute('TEXCOORD_0'), pos = p.getAttribute('POSITION');
      const png = tex && decode(tex.getImage()), n = pos.getCount(), col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        let c = png && uv ? sample(png, ...uv.getElement(i, [])) : [1, 0.85, 0.2];                       // material "Glow" (ojos) -> amarillo
        c = grade(c, cfg.recolor); col.set(c, i * 3);
      }
      p.setAttribute('COLOR_0', doc.createAccessor().setType('VEC3').setArray(col).setBuffer(pos.getBuffer()));
      for (const s of ['TEXCOORD_0', 'NORMAL']) { const a = p.getAttribute(s); if (a) { p.setAttribute(s, null); } }
      p.setMaterial(flat);
    }
    await doc.transform(weld(), simplify({ simplifier: MeshoptSimplifier, ratio: cfg.ratio, error: cfg.error }));
  } else {
    const tex = root.listTextures()[0]; tex.setImage(shrink(decode(tex.getImage()), cfg.tex));
    for (const mesh of root.listMeshes()) for (const p of mesh.listPrimitives()) p.setAttribute('NORMAL', null);
  }
  await doc.transform(resample(), dedup(), prune());
  // Elimina datos huérfanos (accesores que ya no usa nada)
  const used = new Set();
  for (const m of root.listMeshes()) for (const p of m.listPrimitives()) { p.listAttributes().forEach(a => used.add(a)); if (p.getIndices()) used.add(p.getIndices()); }
  for (const sk of root.listSkins()) if (sk.getInverseBindMatrices()) used.add(sk.getInverseBindMatrices());
  for (const an of root.listAnimations()) for (const sm of an.listSamplers()) { used.add(sm.getInput()); used.add(sm.getOutput()); }
  for (const a of root.listAccessors()) if (!used.has(a)) a.dispose();
  await io.write(path.join(DST, name + '.glb'), doc);
  let v = 0; for (const m of root.listMeshes()) for (const p of m.listPrimitives()) v += p.getAttribute('POSITION').getCount();
  console.log(name, 'verts', v, 'anims', root.listAnimations().map(a => a.getName()).join(','));
}
