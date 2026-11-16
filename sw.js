// Fonctionnement sans connexion : tous les fichiers de l'appli sont gardés sur le téléphone.
// À CHAQUE MODIFICATION de l'appli ou du contenu : augmenter VERSION, et ajouter tout nouveau fichier à FICHIERS.

const VERSION = 1;
const CACHE = `boutdelalangue-v${VERSION}`;

const FICHIERS = [
  './',
  'index.html',
  'manifest.webmanifest',
  'css/app.css',
  'fonts/atkinson-hyperlegible-next.woff',
  'fonts/borel.woff',
  'icons/favicon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'js/app.js',
  'js/banque.js',
  'js/calendrier.js',
  'js/dessins.js',
  'js/etat.js',
  'js/fx.js',
  'js/moteur.js',
  'js/outils.js',
  'js/question.js',
  'js/serie.js',
  'js/sons.js',
  'js/textes.js',
  'js/voix.js',
  'js/vues/accueil.js',
  'js/vues/bienvenue.js',
  'js/vues/cahier.js',
  'js/vues/defi.js',
  'js/vues/jeux.js',
  'js/vues/mot.js',
  'js/vues/plus.js',
  'js/vues/tac.js',
  'js/data/index.js',
  'js/data/antiseche.js',
  'js/data/liens.js',
  'js/data/conjugaison.js',
  'js/data/grammaire.js',
  'js/data/orthographe.js',
  'js/data/vocabulaire.js',
  'js/data/familier.js',
  'js/data/usage.js',
  'js/data/oral.js',
  'js/data/expressions.js',
  'js/data/fautes.js',
  'js/data/ordre.js',
  'js/data/situations.js',
  'js/data/tac.js',
  'js/data/mots.js',
  'js/data/fete.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(FICHIERS.map((f) => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((noms) => Promise.all(noms.filter((n) => n.startsWith('boutdelalangue-') && n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const garde = await cache.match(req, { ignoreSearch: true });
      if (garde) return garde;
      try {
        return await fetch(req);
      } catch (e) {
        if (req.mode === 'navigate') {
          const accueil = await cache.match('index.html');
          if (accueil) return accueil;
        }
        throw e;
      }
    }),
  );
});
