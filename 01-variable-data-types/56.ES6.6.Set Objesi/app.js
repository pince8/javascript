//SET --->dizi çeşitidir aynı değeri eklememek için

const set = new Set();

//add metodu

set.add(true)
set.add(3.14)
set.add("Enes")
set.add("Enes")
set.add(7)
set.add({ userName: "Enes", lastName: "Bayram" });
set.add([1, 2, 3, 4])

console.log(set.size)

//HAS
// console.log(set.has("0"))

//For of döngüsü

// for (let value of set) {
//     console.log(value)
// }


//arraye çevirme
const values = Array.from(set);
values.forEach(val => { console.log(val) })

//SET DEN ARRAY Oluşturma 
const valuess = Array.from(set);

//ARRAY den SET Oluşturma
let array = [1, "Enes", true, "Mustafa", 15, [1, 2, 3]];
const newSet = new Set(array);
console.log(newSet);

