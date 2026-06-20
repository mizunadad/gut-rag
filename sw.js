const CACHE = 'gut-rag-v18';
const FILES = [
  '/gut-rag/',
  '/gut-rag/index.html',
  '/gut-rag/gut-logger-v2.html',
  '/gut-rag/gut-brain-map.html',
  '/gut-rag/gut-socratic.html',
  '/gut-rag/gut-rag-graph-v2.html',
  '/gut-rag/knowledge.js',
  '/gut-rag/demo_responses.js',
  '/gut-rag/design-log.html',
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
  const url = new URL(e.request.url);

  // 外部オリジン（Anthropic API等）はSWをバイパス
  if (url.origin !== self.location.origin) return;

  // HTML・JSは常にネットワーク優先
  if (e.request.destination === 'document' ||
      e.request.destination === 'script') {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          if (r && r.status === 200) {
            const toCache = r.clone(); // cloneしてからreturn
            caches.open(CACHE).then(c => c.put(e.request, toCache));
          }
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // その他はキャッシュ優先
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
