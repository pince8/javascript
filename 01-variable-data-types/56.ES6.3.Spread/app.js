//Spread Kullanımı

let numbers = [10, 20, 30, 40]

function add(a, b, c, d) {
    console.log(a + b + c + d)
}
//Eski Yöntem
// add(numbers[0], numbers[1], numbers[2], numbers[3])

//Yeni Yöntem
// add(...numbers)
/*
       ...numbers = numbers[0], numbers[1], numbers[2], numbers[3]
*/

const diller1 = ["Java", "C#"]
// const diller2 = ["Php", "Python", diller1[0], diller1[1]]
const diller2 = ["Php", "Python", ...diller1]

console.log(diller2)




const array1 = ["Enes", "Ali", "Veli", "Mehmet"]
//uzun yöntem
// let array2=[];
// array2[0]=array1[0]
// array2[1]=array1[1]
// array2[2]=array1[2]
// array2[3]=array1[3]
// array1[0],array1[1],array1[2],array1[3]

//Spread kullanarak yapılışı basit hali
const array2 = [...array1]
console.log(array2)