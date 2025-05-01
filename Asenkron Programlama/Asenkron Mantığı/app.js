/* Javascript Senkron Çalışan bir pogramlama dilidir.

---------Asenkron çalışmasına neden olanlar---------
1-Timing
2-Event(Olay)
3-Http İsteklerinde


-----CALLBACK - PROMİSE - ASYNC & AWAİT -----
--->Asenkron yapıları senkrona çevirip yönetiyoruz.

*/
console.log("Enes");

setTimeout(() =>{
    console.log("1000ms Süre doldu ve çalıştı.")
},1000);

setTimeout(() =>{
    console.log("500ms Süre doldu ve çalıştı.")
},500);

console.log("Bayram");