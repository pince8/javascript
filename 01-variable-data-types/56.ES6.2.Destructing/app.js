//Destructing

let langs = ["C#", "C++", "Javascript", "Python"]
let lang1, lang2, lang3, lang4

//uzun hali bu şekilde 
// lang1=langs[0]
// lang2=langs[1]
// lang3=langs[2]
// lang4=langs[3]

//destructing kullanılmış halide bu şekilde
[lang1, lang2, lang3, lang4] = langs;
console.log(langs)

//Dizilerde Kullanımı
const hesapla = (a, b) => {
    const toplam = a + b;
    const cikar = a - b;
    const carp = a * b;
    const bol = a / b;

    const dizi = [toplam, cikar, carp, bol]
    return dizi
}
[a, b, c, d] = hesapla(-4, 2)

console.log(a, b, c, d)



//Objelerde Kullanımı ->bu şekilde objenin keyiyle değişkenin isminin aynı olması gerekiyor
// const person = {
//     firstName: "Pınar",
//     lastName: "Çelik",
//     salary: 3900,
//     age: 20

// }

// let { firstName: isim, lastName: soyisim, salary: maas, age: yas } = person

// console.log(isim, soyisim, maas, yas)