/*
	Service worker for the Aseel Software site.

	Precaches the page and everything it needs so it opens when installed to a
	home screen, including with no connection. Bump CACHE on every release:
	the old cache is deleted on activate, so visitors get the new files.
*/

const CACHE = 'aseel-v1';

const ASSETS = [
	'./',
	'./index.html',
	'./manifest.webmanifest',
	'./assets/css/main.css',
	'./assets/css/rtl.css',
	'./assets/css/font-awesome.min.css',
	'./assets/js/main.js',
	'./assets/fonts/fontawesome-webfont.woff2',
	'./assets/icons/icon-192.png',
	'./assets/icons/icon-512.png',
	'./assets/icons/icon-maskable-512.png',
	'./assets/icons/apple-touch-icon.png',
	'./images/bg-dim-desk-portrait-v3.png',
	'./images/empty-workspace-hero.png',
	'./images/service-web-development-v2.png',
	'./images/service-mobile-apps-v2.png',
	'./images/service-custom-software-v2.png',
	'./images/site-qr.png'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE)
			/* one missing file must not fail the whole install */
			.then(cache => Promise.all(
				ASSETS.map(url => cache.add(url).catch(() => null))
			))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys()
			.then(keys => Promise.all(
				keys.filter(key => key !== CACHE).map(key => caches.delete(key))
			))
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', event => {

	const request = event.request;

	/* only plain page loads and same-origin assets; the fonts come from
	   Google and are left to the browser's own cache */
	if (request.method !== 'GET') return;
	if (new URL(request.url).origin !== self.location.origin) return;

	event.respondWith(
		caches.match(request).then(hit => hit || fetch(request)
			.then(response => {
				if (response && response.ok) {
					const copy = response.clone();
					caches.open(CACHE).then(cache => cache.put(request, copy));
				}
				return response;
			})
			.catch(() => caches.match('./index.html'))
		)
	);

});
