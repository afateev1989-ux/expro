// Records when this service worker version activated, so the page can tell an
// update-triggered reload apart from a real app open (intro must not replay).
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.open('expro-meta').then((c) => c.put('./__sw-activated', new Response(String(Date.now())))).catch(() => {}));
});
