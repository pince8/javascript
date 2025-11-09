class MigrosBase {
    indirimOrani = 35;
    constructor(isim, soyisim, kartVarmi, urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;

    }

    hesapla() {

        let odencekTutar = 0;
        if (this.urunleriKontroleEt(this.urunler)) {
            //Sepetim Dolu
            if (this.kartVarmi) {
                //money kartı var
                this.urunler.forEach((urun) => {
                    odencekTutar += (urun.fiyat * (100 - this.indirimOrani) / 100);
                })
            }
            else {
                //Yoktur
                this.urunler.forEach((urun) => {
                    odencekTutar += urun.fiyat;
                })
            }
        }

        else {
            alert("En az bir tane ürün satın almalısınız!!!");
        }
        return odencekTutar;
    }

    urunleriKontroleEt(urunler) {
        if (urunler != null && urunler.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
}