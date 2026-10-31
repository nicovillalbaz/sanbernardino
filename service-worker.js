const CACHE_NAME = 'san-bernardino-v52';
const APP_FILES = [
  'index.html', 'actividades.html', 'lugares.html', 'negocios.html', 'mapa.html',
  'historia.html', 'creditos.html', 'manifest.webmanifest',
  'assets/styles.css', 'assets/v2.css', 'assets/app.js', 'assets/mapa.css', 'assets/mapa.js', 'assets/mapa-lugares.js', 'assets/mapa-coordenadas.js',
  'assets/vendor/leaflet/dist/leaflet.css', 'assets/vendor/leaflet/dist/leaflet.js', 'assets/vendor/markercluster/MarkerCluster.css', 'assets/vendor/markercluster/leaflet.markercluster.js',
  'assets/agenda.js', 'assets/negocios.js',
  'assets/catalogo-ampliado.js', 'assets/catalogo-revision.js', 'assets/catalogo-rubros.js', 'assets/catalogo-zonas.js', 'assets/creditos-negocios.js',
  'assets/icons/icon-192.png', 'assets/icons/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES.map(path => new URL(path, self.registration.scope)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('san-bernardino-') && name !== CACHE_NAME).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (request.destination === 'image') {
      const saved = await cache.match(request);
      if (saved) return saved;
    }

    try {
      const response = await fetch(request);
      if (response.ok) await cache.put(request, response.clone());
      return response;
    } catch (error) {
      const saved = await cache.match(request, {ignoreSearch: true});
      if (saved) return saved;
      if (request.mode === 'navigate') {
        const home = await cache.match(new URL('index.html', self.registration.scope));
        if (home) return home;
      }
      throw error;
    }
  })());
});




