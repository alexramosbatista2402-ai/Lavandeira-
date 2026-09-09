// Service worker mínimo — necessário para o navegador considerar o app
// "instalável" (ícone na tela inicial / like a native app).
const CACHE_NAME = 'conferencia-diaria-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
