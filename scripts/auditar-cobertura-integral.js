// Auditoría de fotos y pines sobre todas las fichas activas del directorio.
// Ejecutar desde san-bernardino: node scripts/auditar-cobertura-integral.js [--pendientes]
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = {document: {getElementById: () => null, querySelectorAll: () => []}, window: {location: {search: ''}}, URLSearchParams};
vm.createContext(context);
for (const name of ['catalogo-ampliado.js', 'catalogo-revision.js', 'catalogo-rubros.js', 'catalogo-zonas.js', 'negocios.js', 'mapa-coordenadas.js']) {
  let source = fs.readFileSync(path.join(root, 'assets', name), 'utf8');
  if (name === 'negocios.js') source = source.split('const businessGrid =')[0];
  vm.runInContext(source, context, {filename: name});
}

const businesses = vm.runInContext('businesses.filter(item => !item.inactive)', context);
const coordinates = vm.runInContext('coordenadasMapa', context);
const directPosition = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)|[?&]q=loc:(-?\d+\.\d+),(-?\d+\.\d+)/;
const hasPin = item => directPosition.test(item.maps || '') || Boolean(coordinates[(item.maps || '').match(/[?&]cid=(\d+)/)?.[1]]);
const hasPhoto = item => Boolean(item.photo && item.photoSource && item.photoCredit && item.photoAlt && fs.existsSync(path.join(root, item.photo)));
const linkedCids = new Set(businesses.map(item => (item.maps || '').match(/[?&]cid=(\d+)/)?.[1]).filter(Boolean));
const pinErrors = Object.entries(coordinates).flatMap(([cid, point]) => {
  const errors = [];
  if (!linkedCids.has(cid)) errors.push(`CID ${cid}: ninguna ficha activa enlaza esta ubicación`);
  if (!Number.isFinite(point.lat) || !Number.isFinite(point.lng) || point.lat < -25.39 || point.lat > -25.19 || point.lng < -57.36 || point.lng > -57.215) {
    errors.push(`CID ${cid}: coordenadas fuera del área del mapa`);
  }
  return errors;
});
const counts = {
  fichas: businesses.length,
  conFoto: businesses.filter(hasPhoto).length,
  conPin: businesses.filter(hasPin).length,
  completas: businesses.filter(item => hasPhoto(item) && hasPin(item)).length,
  sinFoto: businesses.filter(item => !hasPhoto(item)).length,
  sinPin: businesses.filter(item => !hasPin(item)).length,
  sinAmbos: businesses.filter(item => !hasPhoto(item) && !hasPin(item)).length
};
console.log(Object.entries(counts).map(([key, value]) => `${key}: ${value}`).join(' · '));
for (const error of pinErrors) console.error(error);
if (pinErrors.length) process.exitCode = 1;
if (process.argv.includes('--pendientes')) {
  for (const item of businesses.filter(item => !hasPhoto(item) || !hasPin(item))) {
    console.log(`${hasPhoto(item) ? 'F' : '-'}${hasPin(item) ? 'P' : '-'}\t${item.category}\t${item.name}\t${item.maps}`);
  }
}
