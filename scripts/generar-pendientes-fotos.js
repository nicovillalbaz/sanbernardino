// Mantiene un checklist de las fichas que alguna vez estuvieron sin foto.
// Ejecutar desde san-bernardino: node scripts/generar-pendientes-fotos.js
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const target = path.join(root, 'PENDIENTES-FOTOS.md');
const context = {document: {getElementById: () => null, querySelectorAll: () => []}, window: {location: {search: ''}}, URLSearchParams};
vm.createContext(context);
for (const name of ['catalogo-ampliado.js', 'catalogo-revision.js', 'catalogo-rubros.js', 'catalogo-zonas.js', 'negocios.js']) {
  let source = fs.readFileSync(path.join(root, 'assets', name), 'utf8');
  if (name === 'negocios.js') source = source.split('const businessGrid =')[0];
  vm.runInContext(source, context, {filename: name});
}

const businesses = vm.runInContext('businesses.filter(item => !item.inactive)', context);
const sections = [
  ['comer', 'Comer y tomar'], ['dormir', 'Alojamiento'], ['noche', 'Noche'],
  ['recreacion', 'Actividades y recreación'], ['belleza', 'Belleza'],
  ['deportes', 'Deportes'], ['compras', 'Compras'], ['salud', 'Salud'],
  ['mascotas', 'Mascotas'], ['hogar', 'Hogar'], ['movilidad', 'Movilidad'],
  ['servicios', 'Servicios'], ['inmuebles', 'Vivir e invertir']
];
const hasPhoto = item => Boolean(item.photo && item.photoAlt && item.photoCredit && item.photoSource && fs.existsSync(path.join(root, item.photo)));
const previous = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : '';
const previousEntries = [...previous.matchAll(/^- \[[ x]\] \*\*.+?\*\* · \[Maps\]\((https:\/\/www\.google\.com\/maps[^)]+)\)(.*)$/gm)];
const previouslyTracked = new Set(previousEntries.map(match => match[1]));
const previousNotes = new Map(previousEntries.map(match => [match[1], match[2].replace(/ · \[Foto\]\([^)]+\)/, '')]));
const tracked = businesses.filter(item => !hasPhoto(item) || previouslyTracked.has(item.maps));
const pending = tracked.filter(item => !hasPhoto(item)).length;
const date = new Intl.DateTimeFormat('es-PY', {timeZone: 'America/Asuncion', day: '2-digit', month: '2-digit', year: 'numeric'}).format(new Date());

let markdown = `# Fichas pendientes de foto\n\n` +
  `Actualizado el ${date}. **${pending} pendientes** de ${businesses.length} fichas activas; ${tracked.length - pending} completadas desde que empezó este checklist. El catálogo y sus fuentes son la referencia: este archivo es una lista de trabajo, no una galería pública.\n\n` +
  `## Cómo mantenerlo\n\n` +
  `1. Abrir el enlace de Maps de una ficha sin foto, revisar su vigencia en \`VIGENCIA-NEGOCIOS.md\` y comprobar que la imagen retrata ese negocio concreto. Un horario de Maps no demuestra operación actual.\n` +
  `2. Añadir el archivo y los campos \`photo\`, \`photoAlt\`, \`photoCredit\` y \`photoSource\` a la ficha.\n` +
  `3. Ejecutar \`node scripts/generar-cobertura.js\`. El generador marca automáticamente \`[x]\` si la imagen existe y los cuatro campos están completos; conserva las fichas ya marcadas para ver el avance.\n` +
  `4. Ejecutar \`node scripts/validar-catalogo.js\` y \`node scripts/auditar-cobertura-integral.js\`.\n\n` +
  `Si se agrega una ficha nueva sin imagen, aparecerá aquí al regenerar. Si una ficha deja de estar activa, saldrá de la lista. Se pueden añadir notas al final de cada línea (por ejemplo, «Maps revisado: solo Street View»); el generador las conserva para evitar repetir búsquedas sin resultado. Una foto atribuida no acredita por sí sola permiso para republicarla.\n\n`;

for (const [category, title] of sections) {
  const rows = tracked.filter(item => item.category === category);
  if (!rows.length) continue;
  markdown += `## ${title} · ${rows.filter(item => !hasPhoto(item)).length} pendientes\n\n`;
  for (const item of rows) {
    const done = hasPhoto(item);
    const name = item.name.replaceAll('*', '\\*');
    markdown += `- [${done ? 'x' : ' '}] **${name}** · [Maps](${item.maps})`;
    if (done) markdown += ` · [Foto](${item.photo})`;
    markdown += previousNotes.get(item.maps) || '';
    markdown += '\n';
  }
  markdown += '\n';
}

fs.writeFileSync(target, markdown, 'utf8');
console.log(`${pending} fichas pendientes de foto · ${tracked.length - pending} completadas en el checklist`);
