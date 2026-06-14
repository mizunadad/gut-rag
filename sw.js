const CACHE = 'gut-rag-v3';
const FILES = [
  '/gut-rag/',
  '/gut-rag/index.html',
  '/gut-rag/gut-logger-v2.html',
  '/gut-rag/gut-brain-map.html',
  '/gut-rag/gut-socratic.html',
  '/gut-rag/gut-rag-graph-v2.html',
  '/gut-rag/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
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
  // HTMLは常にネットワーク優先（キャッシュは古くなるため）
  if (e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          caches.open(CACHE).then(c => c.put(e.request, r.clone()));
          return r;
        })
        .catch(() => caches.match(e.request)) // オフライン時のみキャッシュ
    );
    return;
  }
  // その他（manifest等）はキャッシュ優先
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
