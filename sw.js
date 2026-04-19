// This is a basic service worker to trigger the "Install App" prompt
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Pass-through fetch (allows the app to work normally)
});
