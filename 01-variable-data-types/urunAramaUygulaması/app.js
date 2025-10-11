let urun1 = {
    isim: "Acer Swift",
    kategori: "Teknoloji",
    fiyat: 10000
}
let urun2 = {
    isim: "Acer Nitro 5",
    kategori: "Teknoloji",
    fiyat: 10000
}
let urun3 = {
    isim: "Lenova V15",
    kategori: "Teknoloji",
    fiyat: 10000
}
let urun4 = {
    isim: "Lenova V14",
    kategori: "Teknoloji",
    fiyat: 10000
}

let urun5 = {
    isim: "Acer Swift V2",
    kategori: "Teknoloji",
    fiyat: 10000
}
let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Aradığınız ürün ismini giriniz");

filtreliUrunlerDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunlerDoldur(urunler) {
    urunler.forEach(function (urun) {
        //0 → aramaya metnin başından başla demek 2 yazsaydı 2 den başlayacaktık
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun);
        }
    });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("-------------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
    });
}
