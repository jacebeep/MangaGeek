// Self-destroying service worker to clear aggressive caches in local development
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => {
      return self.registration.unregister();
    }).then(() => {
      console.log('[Service Worker] Caches cleared and service worker unregistered successfully.');
    })
  );
});

