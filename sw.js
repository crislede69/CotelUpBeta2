// Asignar nombre y versión  de la caché
const  CACHE_NAME = 'v1_cotelup_pwa';

//Ficheros a cachear   en la aplicación 
 var urlsToCache = [
    ',/',
    './css/styles.css',
    './css/font-awesome.css',
    './img2/01.png',
    './img2/02.png',
    './img2/03.png',
    './img2/04.png',
    './img2/05png',
    './img2/06.png',
    './img2/07.png',
    './img2/08.png',
    './img2/09.png',
    './img2/10.png',
    './img2/11.png',
    './img2/12.png',
    './img2/13.png',
    './img2/14.png',
    './img2/15.png',
    './img2/16.png',
    './img2/17.png',
    './img2/18.png',
    './img2/19.png',
    './img2/20.png',
    './img2/21.png',
    './img2/22.png',
    './img2/23.png',
    './img2/24.png',
    './img2/25.png',
    './img2/26.png',
    './img2/27.png',
    './img2/28.png',
    './img2/29.png',
    './img2/30.png',
    './img2/31.png',
    './img2/32.png',
    './img2/33.png',
    './img2/34.png',
    './img2/35.png',
    './img2/36.png',
    './img2/37.png',
    './img2/38.png',
    './img2/39.png',
    './img2/40.png',
    './img2/41.png',
    './img2/42.png',
    './img2/43.png',

    './img2/facebook.png',
    './img2/instagram.png',
    './img2/twitter.png',

    './img2/logo.png',
    './img2/logoblanco.png',

    './img2/03-1024.png',    
    './img2/03-512.png',
    './img2/03-384.png',
    './img2/03-256.png',
    './img2/03-192.png',
    './img2/03-128.png',
    './img2/03-96.png',
    './img2/03-64.png',
    './img2/03-32.png',
    './img2/03-16.png'
 ];

 //Evento Install
//Instalacion del service Worker, guardar en cahe los recursos estaticos de la aplicación
 self.addEventListener('install', e => {
     e.waitUntil(
        caches.open(CACHE_NAME)
         .then(cache => {
             return cache.addAll(urlsToCache)
             .then (() => {
                 self.skipWaiting();  
             });
         })
         .catch(err => console.log('No se ha registrado  el cache', err))
     );
 });

 //Evento Activate
//Que la app funciones sin conexion
 self.addEventListener('activate',e => {
    const cacheWhitelist = [CACHE_NAME]; 

    e.waitUntil(
        caches.keys()
        .then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {

                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        //Borrar archivos que no necesitamos
                        return caches.delete(cacheName);
                    }   
                })
            );           
        })
        
        .then(()=> {
            //Activa caché en el dispositivo
            self.clients.claim();
        })
    );   
});
 //Evento fetch
 self.addEventListener('fetch', e => {
     e.respondWith(
         caches.match(e.request) 
          .then (res => {
              if (res) {
                  //Devulve datos desde caché
                  return res;
              }
                  return fetch(e.request);  
          })
     );
 })