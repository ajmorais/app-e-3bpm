self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  // apenas passa a requisição (necessário para PWA)
});
