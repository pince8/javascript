let mesaj =
    `
Migrosa Hoşgeldiniz.
Money Kartınız Var mı?
1-Evet
2-Hayır

`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15,
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 600,
    },
    {
        urunIsmi: "Kahve",
        fiyat: 150,
    }
]

//true veya false

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
    //Money Kartı vardır.
    let isim = prompt("Adını Giriniz:");
    let soyisim = prompt("Soyismini Giriniz:");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `
        Müşteri Bilgileri: ${isim} ${soyisim}
        Ödenecek Tutar: ${odenecekTutar}
        `
    );
}
else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödencek Tutar : ${odenecekTutar}`);
}