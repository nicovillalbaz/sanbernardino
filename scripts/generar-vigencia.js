// Genera el control editorial de vigencia a partir del catálogo público y sus revisiones.
// Ejecutar desde san-bernardino: node scripts/generar-vigencia.js
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
const reviews = JSON.parse(fs.readFileSync(path.join(root, 'data', 'vigencia-revisiones.json'), 'utf8'));
const byName = new Map(businesses.map(item => [item.name, item]));
for (const [name, review] of Object.entries(reviews)) {
  if (!byName.has(name)) throw new Error(`Revisión sin ficha activa: ${name}`);
  if (!review.date || !review.signal || !review.observation) throw new Error(`Revisión incompleta: ${name}`);
}

const sections = [
  ['comer', 'Comer y tomar'], ['dormir', 'Alojamiento'], ['noche', 'Noche'],
  ['recreacion', 'Actividades y recreación'], ['belleza', 'Belleza'],
  ['deportes', 'Deportes'], ['compras', 'Compras'], ['salud', 'Salud'],
  ['mascotas', 'Mascotas'], ['hogar', 'Hogar'], ['movilidad', 'Movilidad'],
  ['servicios', 'Servicios'], ['inmuebles', 'Vivir e invertir']
];
const reviewed = Object.keys(reviews).length;
const confirmed = Object.values(reviews).filter(review => review.confirmed === true).length;
const counts = Object.values(reviews).reduce((result, review) => {
  result[review.signal] = (result[review.signal] || 0) + 1;
  return result;
}, {});
let output = `# Vigencia de los negocios del directorio\n\n` +
  `Control editorial local. **${businesses.length} fichas activas; ${reviewed} fichas consultadas en esta pasada; ${businesses.length - reviewed} pendientes de revisar.** Ninguna consulta a Maps, ni siquiera un horario publicado, demuestra por sí sola que el local atienda hoy.\n\n` +
  `## Criterio\n\n` +
  `- Revisar el enlace de la sede exacta en Maps y buscar avisos de cierre, reseñas o fotos recientes y horarios. Si el enlace directo no abre ficha, buscar por nombre, dirección y zona antes de darla por desaparecida.\n` +
  `- Contrastar los casos dudosos con publicaciones recientes del propio negocio o contacto directo. Una reseña antigua, una foto de Street View o un horario cargado no bastan para confirmar operación.\n` +
  `- Distinguir cierre permanente, cierre temporal y apertura de temporada. Las discotecas y negocios de verano pueden estar cerrados entre temporadas.\n` +
  `- Ante un cierre permanente comprobado, quitar la ficha del directorio activo y del mapa. Una señal ambigua requiere segunda fuente; documentar «pendiente de verificar» y el próximo paso.\n` +
  `- Registrar fecha y evidencia al revisar cada ficha nueva o conseguir una foto. Las urbanizaciones, cajeros y proyectos inmobiliarios se comprueban por existencia o disponibilidad, no por horario de atención.\n\n` +
  `## Resultado de esta pasada\n\n` +
  `- Señal reciente de actividad: **${counts.reciente || 0}**. Horario publicado sin prueba reciente: **${counts.horario || 0}**. Estado incierto: **${counts.incierto || 0}**. Cierre temporal indicado por Maps: **${counts.temporal || 0}**. Maps advierte posible cierre: **${counts.posible_cierre || 0}**.\n` +
  `- **Operación actual confirmada directamente: ${confirmed}.** La revisión de Maps permite priorizar, pero todavía hace falta contraste con el negocio o sus canales actuales.\n` +
  `- Grido San Bernardino aparece como cerrado permanentemente en Maps, pero es una ficha distinta de **Grifo Helados**; no se traslada ese estado a Grifo.\n\n`;

output += `### Revisar primero\n\n`;
for (const [name, review] of Object.entries(reviews).filter(([, review]) => ['temporal', 'posible_cierre'].includes(review.signal))) {
  output += `- **${name}**: ${review.observation} [Maps](${byName.get(name).maps})\n`;
}
output += '\n';

for (const [category, title] of sections) {
  const rows = businesses.filter(item => item.category === category);
  if (!rows.length) continue;
  output += `## ${title} · ${rows.length} fichas\n\n`;
  for (const item of rows) {
    const review = reviews[item.name];
    const name = item.name.replaceAll('*', '\\*');
    output += `- [${review ? 'x' : ' '}] **${name}** · ${item.type || item.category} · [Maps](${item.maps})`;
    if (review) output += ` · ${review.date} · **${review.signal.replaceAll('_', ' ')}**: ${review.observation}`;
    else output += ' · pendiente de verificar; revisar la sede en Maps y contrastar con canal actual';
    output += '\n';
  }
  output += '\n';
}

fs.writeFileSync(path.join(root, 'VIGENCIA-NEGOCIOS.md'), `${output.trimEnd()}\n`, 'utf8');
console.log(`${reviewed}/${businesses.length} fichas consultadas; ${businesses.length - reviewed} pendientes`);
