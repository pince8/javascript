//Armstrong sayılar bir sayının basamaklarının küpünün toplamı kendisine eşitse o sayıya armstrong sayısı denir.
//Örnek: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

let sayi=(prompt("Bir sayi giriniz:"));
let toplam=0;
for(let i=0;i<sayi.length;i++){
    let rakam =sayi.charAt(i);
    toplam += rakam*rakam*rakam;
}
if(sayi==toplam){
    alert("Amstrong sayisidir.");

}else{
    alert("Amstrong sayisi değildir.");
}