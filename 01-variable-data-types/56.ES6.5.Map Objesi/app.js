//Map ----> key(anahtar) value(değer)

//let array=[1,2,3]

const map1 = new Map();

//SET
// map1.set(1, "Enes");
// map1.set(true, 5);
// map1.set([1, 2, 3], { firstName: "Enes", lastName: "Bayram" });
// map1.set(true, "5");

map1.set(34, "İstanbul")
map1.set(35, "İzmir")
map1.set(6, "Ankara")
map1.set(1, "Adana")

//GET
// console.log(map1.get(6))
// console.log(map1.get(34))
// console.log(map1.get(35))

//SİZE
value = map1.size;

//DELETE
value = map1.delete(34);
console.log(map1.size)
console.log(value)

//HAS
console.log(map1.has(55))

//For OF map üzeirnde dönebiliriz

for (let value of map1) {
    console.log(value)
}

for (let [key, value] of map1) {//destructing
    console.log(key, value);
}

// let array = [34, "İstanbul"];
// let [a, b] = array;
// console.log(a, b);

const keys = Array.from(map1.keys())
keys.forEach((key) => {
    console.log(key, map1.get(key))
})

for (let key of map1.keys()) {
    console.log(key)
}

for (let value of map1.values()) {
    console.log(value)
}
//ARRAY'i Mape çevirmek

// const arrray2 = [
//     [34, "İstanbul"],
//     [35, "İzmir"],
//     [6, "Ankara"],
//     [1, "Adana"]
// ]

// const myMap = new Map(array2);

// const myArray = Array.from(myMap);
// console.log(myArray);


let key = [1, 2, 3];

map1.set(34, "İstanbul")
map1.set(35, "İzmir")
map1.set(6, "Ankara")
map1.set(1, "Adana")
map1.set(key, "Array")

//keyin bir referans tür olup olmadığını iki kez düşün
console.log(map1.get(key));