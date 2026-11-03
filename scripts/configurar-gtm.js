// Instala los dos fragmentos oficiales del contenedor web de Google Tag Manager.
// Uso: node scripts/configurar-gtm.js [GTM-ID]
const fs = require('node:fs');
const path = require('node:path');

const id = process.argv[2] || 'GTM-W6FRFP9K';
if (!/^GTM-[A-Z0-9]+$/.test(id)) throw new Error('ID de contenedor GTM invalido');

const root = path.resolve(__dirname, '..');
const pages = [
  'index.html', 'actividades.html', 'lugares.html', 'negocios.html',
  'mapa.html', 'historia.html', 'creditos.html'
];
const head = `\n  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${id}');</script>
  <!-- End Google Tag Manager -->`;
const body = `\n  <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${id}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->`;

for (const page of pages) {
  const file = path.join(root, page);
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/\s*<!-- Google Tag Manager -->[\s\S]*?<!-- End Google Tag Manager -->/g, '');
  html = html.replace(/\s*<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->/g, '');
  if (!/<head>/i.test(html) || !/<body>/i.test(html)) throw new Error(`HTML incompleto: ${page}`);
  html = html.replace(/<head>/i, match => match + head);
  html = html.replace(/<body>/i, match => match + body);
  fs.writeFileSync(file, html);
}
console.log(`GTM ${id} instalado en ${pages.length} paginas`);
