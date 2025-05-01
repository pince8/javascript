// 10 luk sayilari 2 lik sayilara cevirme

convertDecimalToBinary(10);
function convertDecimalToBinary(number){

let binary="";
while(true){
    binary+=(number%2).toString();
    number=Math.floor(number/2);
    if(number==1){
        binary+=1;
        break;
    }
}
   let result=reserve(binary);
   console.log("Sonuc: " +result);
}

function reserve(binary){
    let reservedBinary="";
    for(let i=binary.lenght-1;i>=0;i--){
        reservedBinary+=binary.charAt(i);
    }
    return reservedBinary;
}