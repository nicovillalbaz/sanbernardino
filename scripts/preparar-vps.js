// Copia únicamente los archivos públicos. Uso: node scripts/preparar-vps.js <directorio-nuevo>
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = process.argv[2] && path.resolve(process.argv[2]);
if (!output || output === root || !output.startsWith(root + path.sep)) {
  throw new Error('Elegí un directorio nuevo dentro del proyecto, por ejemplo exports/vps-20261112');
}
if (fs.existsSync(output)) throw new Error(`El directorio ya existe: ${output}`);

const files = [
  'index.html', 'actividades.html', 'lugares.html', 'negocios.html',
  'mapa.html', 'historia.html', 'creditos.html', '404.html',
  'manifest.webmanifest', 'service-worker.js', 'robots.txt', 'sitemap.xml',
  'googlecee064d9443158bb.html'
];
fs.mkdirSync(output, {recursive: true});
for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(output, file));
}
fs.cpSync(path.join(root, 'assets'), path.join(output, 'assets'), {recursive: true});
console.log(`${files.length} archivos públicos y assets copiados a ${output}`);
