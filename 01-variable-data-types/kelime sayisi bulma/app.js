//Kelime sayisi bulma uygulamamız

let metin="Şuanda ders çalışmaya çalışıyorum.";
let harf=prompt("Harfi giriniz:");

let sonuc=bul(harf);
alert("Harf Sayisi: "+sonuc);
//Kelime sayısını bulma fonksiyonu
function bul(harf){
    let sayac=0;
    for(let i=0;i<metin.length;i++){
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
            sayac+=1;
        }
    }
    return sayac;
}