let sayi=Number(prompt("Bir sayi giriniz:"));
let asalMi=true;
for(let i=2;i<sayi;i++){
    if(sayi%i==0){
        asalMi=false;
        break;
    }

}
if(asalMi){
    alert(sayi + " Asal sayidir");
}else{
    alert(sayi + " Asal değildir");
}