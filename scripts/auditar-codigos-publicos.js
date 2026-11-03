// Revisa los textos que se muestran en fichas de Negocios y Mapa.
// Ejecutar desde san-bernardino: node scripts/auditar-codigos-publicos.js
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const context = {document: {getElementById: () => null, querySelectorAll: () => []}, window: {location: {search: ''}}, URLSearchParams};
vm.createContext(context);
for (const name of ['catalogo-ampliado.js', 'catalogo-revision.js', 'catalogo-rubros.js', 'catalogo-zonas.js', 'negocios.js']) {
  let source = fs.readFileSync(path.join(root, 'assets', name), 'utf8');
  if (name === 'negocios.js') source = source.split('const businessGrid =')[0];
  vm.runInContext(source, context, {filename: name});
}

const businesses = vm.runInContext('businesses.filter(item => !item.inactive)', context);
const publicBusinessText = vm.runInContext('publicBusinessText', context);
const plusCode = /\b[23456789CFGHJMPQRVWX]{4}\+[23456789CFGHJMPQRVWX]{2,3}\b/i;
const bareZone = /\b[23456789CFGHJMPQRVWX]{4}\b/i;
const fields = ['name', 'type', 'area', 'description', 'photoAlt'];
const errors = [];
for (const item of businesses) {
  for (const field of fields) {
    const raw = String(item[field] || '');
    const visible = publicBusinessText(raw);
    if (plusCode.test(visible) || bareZone.test(visible)) errors.push(`${item.name} · ${field}: ${visible}`);
  }
}
console.log(`${businesses.length} fichas activas · ${errors.length} textos con código opaco visible`);
for (const error of errors) console.error(error);
if (errors.length) process.exitCode = 1;
