// ➕ src/service-worker.js
self.addEventListener('install', e => {
  e.waitUntil(caches.open('v1').then(c => c.addAll(['/', '/index.html'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
// PWA 缓存支持