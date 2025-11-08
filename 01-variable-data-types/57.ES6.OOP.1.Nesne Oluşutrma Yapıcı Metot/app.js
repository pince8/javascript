//OOP GİRİŞ

let a;

class Insan {//Sınıf
    /*
    1-Özellikler
    2-Yapıcı Metot
    3-Function
    */

    constructor(name, surname, yas, maas) {//Yapıcı Metot
        this.name = name;
        this.surname = surname;
        this.yas = yas;
        this.maas = maas;

    }

    bilgileriGoster() {
        console.log(
            `İsim:${this.name}
             Soyisim:${this.surname}
             Yas:${this.yas}
             Maas:${this.maas}`
        )
    }

}

//nesne oluşturma
const insan1 = new Insan("Ali", "mal", 23, 23456);
insan1.bilgileriGoster();
console.log(insan1.name)