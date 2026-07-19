/* Service worker Module Monitor
   Verhoog het versienummer hieronder bij elke update van de app.
   Studenten krijgen de nieuwe versie dan automatisch bij de eerstvolgende
   keer dat ze de app openen met internet. */
const CACHE = "module-monitor-v3";

const BASIS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(BASIS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((sleutels) =>
      Promise.all(sleutels.filter((s) => s !== CACHE).map((s) => caches.delete(s)))
    ).then(() => self.clients.claim())
  );
});

/* Strategie: eerst cache (snel en offline), daarna op de achtergrond verversen.
   Werkt ook voor de Google Fonts-bestanden. */
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((inCache) => {
      const vers = fetch(e.request)
        .then((antwoord) => {
          if (antwoord && antwoord.status === 200 && (antwoord.type === "basic" || antwoord.type === "cors")) {
            const kopie = antwoord.clone();
            caches.open(CACHE).then((c) => c.put(e.request, kopie));
          }
          return antwoord;
        })
        .catch(() => inCache);
      return inCache || vers;
    })
  );
});
