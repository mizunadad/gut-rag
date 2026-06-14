const CACHE = 'gut-rag-v2';
const FILES = [
  '/gut-rag/',
  '/gut-rag/gut-logger-v2.html',
  '/gut-rag/gut-brain-map.html',
  '/gut-rag/gut-socratic.html',
  '/gut-rag/gut-rag-graph-v2.html',
  '/gut-rag/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
