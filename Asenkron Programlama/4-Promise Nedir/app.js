// PROMİSE

//Asenkron yapıları senkrona çevirmek için kullanıyoruz.
//Callbaklerin alternatifi

let check=true;
function createPromise(){
    return new Promise((resolve,reject)=>{
        if(check){
            resolve("Promiste herhangi bir sıkıntı yok.")
        }
        else{
            reject("Sıkıntı büyük")
        }
    })
}
createPromise()
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("Her zaman çalışır"));

//-----PROMİSE + XMLHTTPREQUEST

function readStudents(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error); 
        }

        xhr.open("GET",url);
        xhr.send();
    })
}
/*
    readStudents("students.json")
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
*/
function getUsers(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.addEventListener("readystatechange",()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })

        xhr.open("GET",url);
        xhr.send();
    })
}

/*
getUsers("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    //console.log(data)
    data.forEach((user)=>{
        console.log(user.name)
    })
    console.log("Daha sonra  farklı asenkron kodlarını çalıştırabiriz.")
})
.catch((err)=>console.log(err))
.finally(()=>{
    //mail atma kodlarını yazarsın 
    //her zaman çalışır burası
});
*/

function getCommentsByUserID(url){
    return new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest();
        xhr.addEventListener("readystatechage",()=>{
            try{
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            }catch(error){
                reject(error);
            }
        })
        xhr.open("GET",url);
        xhr.send();
    })
}
//Then içinde then çağırma örneği
getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data)=>{
    console.log(data);
    return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
})
.then((res)=>console.log(readStudents))
.catch((err)=>console.log(err))
.finally(()=>{
    //mail atma kodlarını yazabilirsiniz.
});


//promise all
const p1= Promise.resolve("birinici promise başarılı")
const p2= Promise.resolve("birinici promise başarılı")
const p3= new Promise ((resolve,reject)=>{
    resolve("üçüncü promise başarılı")
})
const p4= Promise.reject("Hata var reis");
   
Promise.all([p1,p2,p3,p4])
.then((res)=>{
    console.log(res);
})
.catch((err)=>console.log(err))