/// <reference types="@sveltejs/kit" />
// Offline-first: precache the whole static site (all prerendered pages, assets, search index).
import { build, files, prerendered, version } from '$service-worker';

const CACHE = `prep-${version}`;
const ASSETS = [...build, ...files, ...prerendered];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((c) => c.addAll(ASSETS))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
			.then(() => self.clients.claim())
	);
});

self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') return;
	const url = new URL(event.request.url);
	if (url.origin !== location.origin) return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE);
			// Pages are prerendered without trailing slash; normalise.
			const path = url.pathname.replace(/\/$/, '') || '/';
			const hit = (await cache.match(path)) ?? (await cache.match(event.request, { ignoreSearch: true }));
			if (hit) return hit;
			try {
				const res = await fetch(event.request);
				if (res.ok) cache.put(event.request, res.clone());
				return res;
			} catch {
				return (await cache.match('/')) ?? Response.error();
			}
		})()
	);
});
