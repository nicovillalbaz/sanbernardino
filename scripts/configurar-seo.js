// Genera metadatos sociales, URL canonicas y archivos de descubrimiento.
// Uso: node scripts/configurar-seo.js [origen-publico]
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const origin = (process.argv[2] || 'https://sanbernardino.pages.dev').replace(/\/+$/, '');
const pages = [
  'index.html', 'actividades.html', 'lugares.html', 'negocios.html',
  'mapa.html', 'historia.html', 'creditos.html'
];
const creditsDescription = 'Fuentes de la guía local de San Bernardino, fotografías, atribuciones y criterios editoriales del directorio.';
const shareImage = `${origin}/assets/images/lago-atardecer.jpg`;
const escapeAttribute = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

for (const page of pages) {
  const file = path.join(root, page);
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/\s*<!-- seo:start -->[\s\S]*?<!-- seo:end -->/g, '');

  if (!/<meta name="description"/i.test(html)) {
    html = html.replace(/<title>/i, `<meta name="description" content="${creditsDescription}"><title>`);
  }

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  if (!title || !description) throw new Error(`Faltan titulo o descripcion: ${page}`);

  const url = page === 'index.html' ? `${origin}/` : `${origin}/${page}`;
  const tags = [
    '<!-- seo:start -->',
    `<link rel="canonical" href="${escapeAttribute(url)}">`,
    '<meta name="robots" content="index,follow,max-image-preview:large">',
    '<meta property="og:type" content="website">',
    '<meta property="og:locale" content="es_PY">',
    '<meta property="og:site_name" content="San Bernardino · guía local">',
    `<meta property="og:title" content="${escapeAttribute(title)}">`,
    `<meta property="og:description" content="${escapeAttribute(description)}">`,
    `<meta property="og:url" content="${escapeAttribute(url)}">`,
    `<meta property="og:image" content="${escapeAttribute(shareImage)}">`,
    '<meta property="og:image:width" content="1280">',
    '<meta property="og:image:height" content="720">',
    '<meta property="og:image:alt" content="Atardecer sobre el lago Ypacaraí en San Bernardino">',
    '<meta name="twitter:card" content="summary_large_image">'
  ];
  if (page === 'index.html') {
    tags.push(`<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'San Bernardino · guía local',
      url: `${origin}/`,
      inLanguage: 'es-PY',
      description
    })}</script>`);
  }
  tags.push('<!-- seo:end -->');
  html = html.replace(/<title>[^<]+<\/title>/i, match => `${match}\n  ${tags.join('\n  ')}`);
  fs.writeFileSync(file, html);
}

const sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map(page => `  <url><loc>${origin}${page === 'index.html' ? '/' : `/${page}`}</loc></url>`),
  '</urlset>', ''].join('\n');
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`${pages.length} paginas con SEO · sitemap.xml · robots.txt · ${origin}`);
