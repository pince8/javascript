let kilo=Number(prompt("Kilonuzu giriniz:"));

let boy=Number(prompt("Boyunuzu giriniz:"));

let sonuc=kilo/(boy*2);

if(sonuc<18.6){
    console.log("ideal kilonun altındasınız" +sonuc);
}else if(sonuc>=18.6 && sonuc<24.9){
    console.log("ideal kilodasınız" +sonuc);
}else if(sonuc>=24.9 && sonuc<29.9){
    console.log("ideal kilonun üstündesiniz" +sonuc);
}
else if(sonuc>=29.9 && sonuc<39.9){
    console.log("ideal kilonun çok üstündesiniz(obez)" +sonuc);
}
else if(sonuc>=39.9){
    console.log("ideal kilonun çok üstündesiniz(morbid obez)"+sonuc);
}

