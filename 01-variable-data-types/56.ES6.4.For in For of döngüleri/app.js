//For in For of Döngüleri 
let names = ["Ela", "Merve", "Hasan", "Pınar"];

// names.forEach(function (name) {
//     console.log(name);
// })

//kısa foreach
// names.forEach(name => console.log(name));

//For in Döngüsü -->indexleri yazdırıyor
//değişken tanımlama, in , diziIsmi

for (let name in names) {
    console.log(name, names[name]);
}

//For of Döngüsü

for (let isim of names) {
    console.log(isim, names.indexOf(isim));
}