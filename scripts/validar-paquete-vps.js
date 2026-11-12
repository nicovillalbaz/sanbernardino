// Uso: node scripts/validar-paquete-vps.js <directorio-del-paquete>
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(process.argv[2] || '');
if (!fs.existsSync(path.join(root, 'index.html'))) throw new Error('Falta index.html en el paquete');
const missing = [];
for (const page of fs.readdirSync(root).filter(name => name.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  for (const match of html.matchAll(/(?:src|href)=["']([^"']+)["']/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (/^(https?:|tel:|mailto:|data:|#|javascript:)/i.test(url)) continue;
    const pathname = url.split(/[?#]/)[0];
    const file = pathname.startsWith('/')
      ? path.resolve(root, `.${pathname}`, pathname === '/' ? 'index.html' : '')
      : path.resolve(root, path.dirname(page), pathname);
    if (!(file === root || file.startsWith(root + path.sep)) || !fs.existsSync(file)) missing.push(`${page} → ${url}`);
  }
}
if (missing.length) throw new Error(`Referencias locales faltantes:\n${missing.join('\n')}`);
console.log('Páginas y referencias locales presentes en el paquete');
