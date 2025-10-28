//Session Storage

//Değer Ekleme

sessionStorage.setItem("345", "Enes");
sessionStorage.setItem("344", "Pınar");
sessionStorage.setItem("343", "Bilal");
sessionStorage.setItem(36, 56);

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

let names = ["Ali", "Enes", "Kübra", "Adem"];

sessionStorage.setItem("names", JSON.stringify(names));

let value = JSON.parse(sessionStorage.getItem("names"));
value.forEach(function (name) {
    console.log(name);
})
console.log(value);