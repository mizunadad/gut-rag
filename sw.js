const CACHE = 'gut-rag-v1';
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
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
