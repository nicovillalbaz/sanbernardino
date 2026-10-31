// Control reproducible de fichas, mapas y archivos fotográficos del directorio.
// Ejecutar desde san-bernardino: node scripts/validar-catalogo.js
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = {document: {getElementById: () => null, querySelectorAll: () => []}, window: {location: {search: ''}}, URLSearchParams};
vm.createContext(context);
for (const name of ['catalogo-ampliado.js', 'catalogo-revision.js', 'catalogo-rubros.js', 'catalogo-zonas.js', 'negocios.js']) {
  const file = path.join(root, 'assets', name);
  let script = fs.readFileSync(file, 'utf8');
  if (name === 'negocios.js') script = script.split('const businessGrid =')[0];
  vm.runInContext(script, context, {filename: file});
}

const businesses = vm.runInContext('businesses.filter(item => !item.inactive)', context);
const publicBusinessText = vm.runInContext('publicBusinessText', context);
const errors = [];
const names = new Set();
const opaqueZone = /\b[23456789CFGHJMPQRVWX]{4}(?:\+[23456789CFGHJMPQRVWX]{2,3})?\b/i;
const photoSource = fs.readFileSync(path.join(root, 'assets', 'negocios.js'), 'utf8');
const photoBlock = photoSource.split('const fotosAmpliadas = {')[1]?.split('\n};')[0] || '';
const photoNames = new Set();
for (const match of photoBlock.matchAll(/^\s*(['"])(.*?)\1\s*:/gm)) {
  if (photoNames.has(match[2])) errors.push(`${match[2]}: metadatos de foto duplicados`);
  photoNames.add(match[2]);
}
for (const item of businesses) {
  if (names.has(item.name)) errors.push(`${item.name}: nombre duplicado`);
  names.add(item.name);
  for (const field of ['name', 'area', 'description', 'photoAlt']) {
    if (opaqueZone.test(publicBusinessText(item[field]))) errors.push(`${item.name}: código de zona visible en ${field}`);
  }
  if (!item.maps || !/^https:\/\/(www\.)?google\.com\/maps/.test(item.maps)) {
    errors.push(`${item.name}: falta enlace directo a Maps`);
  }
  if (item.photo) {
    const file = path.resolve(root, item.photo);
    if (!file.startsWith(path.resolve(root, 'assets', 'images') + path.sep) || !fs.existsSync(file)) {
      errors.push(`${item.name}: archivo de foto inexistente o fuera de assets/images`);
    }
    const missing = ['photoSource', 'photoCredit', 'photoAlt'].filter(field => !item[field]);
    if (missing.length) errors.push(`${item.name}: faltan ${missing.join(', ')}`);
  }
}
console.log(`${businesses.length} fichas · ${businesses.filter(item => item.photo).length} fotos · ${errors.length} errores`);
for (const error of errors) console.error(error);
if (errors.length) process.exitCode = 1;
