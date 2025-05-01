//CALLBACK NEDİR?

//timing - event - http istekleri

//callback -promise -async await

function getName(){
    setTimeout(()=>{
        //servisten ismimi getirdi.
        console.log("Enes");
    }, 1000);
}

function getSurname(){
    setTimeout(()=>{
        console.log("Bayram");
    }, 500);
}
//Callback : bir fonksiyonu bir fonksiyona parmatre geçerek 
//asenkron yapıyı senkrona çeviririz.


function getName(callback){
    setTimeout(()=>{
        //servisten ismimi getirdi.
        console.log("Enes");
        callback();
    }, 1000);
}

function getSurname(){
    setTimeout(()=>{
        console.log("Bayram");
    }, 500);
}

getName(getSurname);

//--------------------------
function getName(callback){
    setTimeout(()=>{
       let name="Enes";
        callback(name);
    }, 1000);
}

function getSurname(name){
    setTimeout(()=>{
        let surname="Bayram";
        console.log(name, surname);
    }, 500);
}

getName(getSurname);

//------------------------
function getName(callback){
    setTimeout(()=>{
       let name="Enes";
        callback(name);
    }, 1000);
}

function getSurname(name, callback){
    setTimeout(()=>{
        let surname="Bayram";
        console.log(name, surname);
    }, 500);
}

//getName(getSurname)
getName((name)=>{
    getSurname(name, (surname)=>{
        console.log(name, surname)
    })
})
//--------
function getAge(name,surname, callback){
    setTimeout(()=>{
        let age=25; //ismi enes ve soyisimi bayram olanı servisten getir
        callback(age);
    }, 300);
}

getName((name) =>{
    getSurname(name,(surname)=>{
        getAge(name,surname,(age)=>{
            console.log(name,surname,age);
        })
    })
})