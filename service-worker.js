self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker ativo');
});

self.addEventListener('fetch', event => {
  // necessário para tornar instalável
});
