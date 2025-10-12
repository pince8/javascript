//DATE  Kullanımı 

let tarih = new Date();

console.log(tarih);
console.log(typeof tarih);
console.log(tarih.toString());

console.log(typeof tarih.toString());
console.log(tarih);
//sadece yılı (2025)
console.log(tarih.getFullYear());
//ayın hangi günü olduğu
console.log(tarih.getDate());
//haftanın hangi günü olduğu 
console.log(tarih.getDay());
//saati
console.log(tarih.getHours());
//milisaniyesi
console.log(tarih.getMilliseconds());
//dakikası
console.log(tarih.getMinutes());
//ayı ama 0 dan başlıyor 
console.log(tarih.getMonth());
//hem tarih hemde saat
console.log(tarih.toLocaleString());
//sadece tarih genel
console.log(tarih.toLocaleDateString());
//sadece saat genel
console.log(tarih.toLocaleTimeString());

//SET METOTLARI
console.log(tarih);
// tarih.setDate(24);
// tarih.setHours(15);
// tarih.setMonth(11);
// tarih.setMinutes(40);
tarih.setHours(tarih.getHours() + 2);
console.log(tarih);