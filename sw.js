const CACHE = 'vacanze-es-v30';
const ASSETS = [
    './index.html',
    './css/style.css',
    './js/app.js',
    './js/zona.js',
    './js/notes.js',
    './js/fuel.js',
    './js/weather.js',
    './js/checklist.js',
    './js/spese.js',
    './js/listaspesa.js',
    './js/spiagge.js',
    './manifest.json',
    './icons/icon.svg'
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});
