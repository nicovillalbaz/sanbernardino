const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = vm.createContext({
  console, URLSearchParams, BigInt,
  window: {location: {search: ''}},
  document: {getElementById: () => null, querySelectorAll: () => []}
});
for (const file of ['catalogo-ampliado.js', 'catalogo-revision.js', 'catalogo-rubros.js', 'catalogo-zonas.js', 'negocios.js', 'mapa-lugares.js', 'mapa-coordenadas.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'assets', file), 'utf8'), context, {filename: file});
}
const {businesses, places, coordinates} = vm.runInContext('({businesses:businesses.filter(item=>!item.inactive),places:lugaresMapa,coordinates:coordenadasMapa})', context);
const errors = [];
const boundary = {south:-25.39,north:-25.225,west:-57.36,east:-57.215};
const inside = (lat,lng) => Number.isFinite(lat) && Number.isFinite(lng) && lat >= boundary.south && lat <= boundary.north && lng >= boundary.west && lng <= boundary.east;
const cidOf = url => url?.match(/[?&]cid=(\d+)/)?.[1];
const urlCoords = url => url?.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);
let businessPins = 0;
const usedCids = new Set();
for (const item of businesses) {
  const explicit = urlCoords(item.maps);
  const cid = cidOf(item.maps);
  const saved = cid && coordinates[cid];
  if (explicit || saved) {
    businessPins++;
    const lat = explicit ? Number(explicit[1]) : saved.lat;
    const lng = explicit ? Number(explicit[2]) : saved.lng;
    if (!inside(lat,lng)) errors.push(`${item.name}: coordenadas fuera del área`);
    if (saved) {
      usedCids.add(cid);
      if (saved.name !== item.name) errors.push(`${item.name}: CID atribuido a ${saved.name}`);
    }
  }
}
for (const cid of Object.keys(coordinates)) if (!usedCids.has(cid)) errors.push(`CID ${cid}: no corresponde a una ficha visible`);
if (new Set(Object.values(coordinates).map(point => `${point.lat},${point.lng}`)).size !== Object.keys(coordinates).length) errors.push('Dos fichas CID tienen la misma coordenada: revisar si comparten sede');
for (const place of places) {
  if (!inside(place.lat,place.lng)) errors.push(`${place.name}: coordenadas fuera del área`);
  if (!place.source?.includes('google.com/maps')) errors.push(`${place.name}: falta enlace a su punto Maps`);
  if (!place.photo || !fs.existsSync(path.join(root,place.photo))) errors.push(`${place.name}: foto local ausente`);
}
console.log(`${businesses.length} negocios · ${businessPins} en mapa · ${places.length} lugares · ${errors.length} errores`);
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
