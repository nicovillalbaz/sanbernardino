// Regenera la tabla editorial desde los archivos del directorio.
// Ejecutar desde san-bernardino: node scripts/generar-cobertura.js
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
const photographed = businesses.filter(item => item.photo).length;
const sections = [
  ['comer', 'Comer y tomar'], ['dormir', 'Alojamiento'], ['noche', 'Noche'],
  ['recreacion', 'Actividades y recreación'],
  ['belleza', 'Belleza'], ['deportes', 'Deportes'], ['compras', 'Compras'],
  ['salud', 'Salud'], ['mascotas', 'Mascotas'], ['hogar', 'Hogar'],
  ['movilidad', 'Movilidad'], ['servicios', 'Servicios'], ['inmuebles', 'Vivir e invertir']
];
const clean = value => String(value).replaceAll('|', '\\|');
let markdown = `# Cobertura fotográfica de las fichas comerciales\n\n` +
  `Revisión local del 31/10/2026. Son ${businesses.length} fichas: ${photographed} con foto específica integrada y ${businesses.length - photographed} con acceso directo a Maps sin foto local. Cada ficha conserva una fuente en los archivos de datos. La procedencia de las fotografías integradas figura en \`san-bernardino/creditos.html\`.\n\n` +
  `La ficha de Maps permite abrir la ubicación y su galería. No implica que el local esté abierto ni autoriza por sí sola a republicar las fotos de terceros. Para incorporar una foto, comprobar sede, autor, fecha y atribución.\n\n`;

for (const [category, title] of sections) {
  const rows = businesses.filter(item => item.category === category);
  markdown += `## ${title} (${rows.filter(item => item.photo).length}/${rows.length} con foto)\n\n` +
    `| Ficha | Foto integrada | Fuente y ubicación |\n|---|---|---|\n`;
  for (const item of rows) {
    const photo = item.photo ? `Sí · \`${path.basename(item.photo)}\`` : 'No · ver galería en Maps';
    const source = item.photoSource || item.source || item.maps;
    markdown += `| ${clean(item.name)} | ${photo} | [Fuente](${source}) · [Maps](${item.maps}) |\n`;
  }
  markdown += '\n';
}

const target = path.resolve(root, '../docs/iniciativas/san-bernardino/12-cobertura-fichas.md');
fs.writeFileSync(target, markdown, 'utf8');
console.log(`${businesses.length} fichas, ${photographed} con foto, ${businesses.length - photographed} sin foto local`);
