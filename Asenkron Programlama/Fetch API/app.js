//FETCH API

function getData(url){
    fetch(url)
    .then((response)=>{
       return response.json();
    })
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
getData("https://jsonplaceholder.typicode.com/users");

function getDataa(url){
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
}
getDataa("https://jsonplaceholder.typicode.com/albums");

