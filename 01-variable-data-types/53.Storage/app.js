//Session Storage

//Değer Ekleme

// sessionStorage.setItem("345", "Enes");
// sessionStorage.setItem("344", "Pınar");
// sessionStorage.setItem("343", "Bilal");
// sessionStorage.setItem(36, 56);

//Değer Silme

// sessionStorage.removeItem("344");

// let value = sessionStorage.getItem("342");
// if (value === null) {
//     console.log("Değer Bulunamadı.");
// } else {
//     console.log("Değer bulundu:", value);
// }

//Hepsini Silme

// sessionStorage.clear();

let val = sessionStorage.getItem(36);
console.log(typeof val);

//SessionStorage - Array Yazdırma

// let names = ["Ali", "Enes", "Kübra", "Adem"];

// sessionStorage.setItem("names", JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));
// value.forEach(function (name) {
//     console.log(name);
// })
// console.log(value);

//Locale Storage KUllanımı

//Değer Ekleme
localStorage.setItem("motion1", "Push up");
localStorage.setItem("motion2", "Barfix");
localStorage.setItem("motion3", "Burpee");
localStorage.setItem("motion4", "Squat");

//Değerlerini Almak

let valu = localStorage.getItem("motion1");
console.log(valu);

//Tümünü Temizle
// localStorage.clear();

let motions = ["Push up", "Barfix", "Burpee", "Squat"];
localStorage.setItem("motions", JSON.stringify(motions));

let va = JSON.parse(localStorage.getItem("motions"));
console.log(va);