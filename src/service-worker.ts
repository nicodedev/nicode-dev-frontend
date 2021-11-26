/// <reference lib="WebWorker" />

import { build, files, timestamp } from '$service-worker';

var CACHE_NAME = `nicode-${timestamp}`;
var urlsToCache = [...build];

self.addEventListener('install', (event) => {
	console.log('Service Worker: Installing');
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			return response ? response : fetch(event.request);
		})
	);
});
