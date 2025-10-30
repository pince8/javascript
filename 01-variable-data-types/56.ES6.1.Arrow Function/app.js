// const yazdir = () => {
//     console.log("Merhaba");
// }

// yazdir();

// const yazdir = (firstName, lastName) => console.log("Merhaba", firstName, lastName);

// yazdir("Pınar", "Çelik");

//tek satır olduğunda {} bunu ve () bunu kullanmamıza gerek yok
const yazdir = firstName => console.log("Merhaba", firstName)
yazdir("Enes");


//En basit hali bu şekilde 
// const a = ()=>{

// }

const kupAl = x => x * x * x
const kareAl = (x) => x * x

console.log("Değer", kupAl(3))