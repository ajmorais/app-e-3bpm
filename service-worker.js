self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Evento fetch obrigatório para PWA
self.addEventListener('fetch', (e) => {
  // Apenas deixa a requisição passar, mas satisfaz o requisito do Chrome
  e.respondWith(fetch(e.request));
});
