const CACHE_NAME = 'menu-ar-v1';
// Lista dei file da salvare in memoria locale sul telefono del cliente
const ASSETS = [
  './index.html',
  './config.js',
  './manifest.json',
  'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
