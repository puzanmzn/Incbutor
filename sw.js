self.addEventListener("install", e=>{
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["./", "./src/style.css", "./image/logo190.img"]);
        })
    )
})

self.addEventListener("fetch", e => {
    caches.match(e.request).then(response => {
        return response || fetch(e.request);
    })
});