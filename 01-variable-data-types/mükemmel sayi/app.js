//mükemmel sayi uygulaması
//Mükemmel sayılar, kendisi hariç pozitif 
//bölenlerinin toplamı kendisine eşit olan sayılardır.

function isPerfectNumber(number){
    let sum=0;
    for(let i=1;i<=number/2;i++){
        if(number%i==0){
            sum+=i;
        }
    }
    if(sum==number){
        console.log("Mükemmel sayidir.");
    }else{
        console.log("Mükemmel sayi değildir.");
    }
}
isPerfectNumber(456);