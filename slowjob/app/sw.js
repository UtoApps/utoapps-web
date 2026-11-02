// Service worker de la app de prueba de Slow-Job — versión 7964c511ed
// Página: primero la red (así llegan las versiones nuevas) y, sin conexión, la copia guardada. Resto: primero la copia.
const CACHE = 'slowjob-app-7964c511ed';
const FICHEROS = ["./", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png", "./fonts/Poppins-400.woff2", "./fonts/Poppins-500.woff2", "./fonts/Poppins-600.woff2", "./fonts/Poppins-700.woff2", "./fonts/Poppins-800.woff2"];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHEROS))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(resp => { const copia = resp.clone(); caches.open(CACHE).then(c => c.put('./', copia)); return resp; })
      .catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(r).then(x => x || fetch(r)));
});
