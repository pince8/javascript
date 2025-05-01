//AJAX

function prepareURL(url,id){
    if(id===null){
        return url;
    }
    return `${url}?postId=${id}`;

}

function getComments(url,id){
   let newURL=prepareURL(url,id);
   const xhr=new XMLHttpRequest();
   xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState===4 && xhr.status===200){
        console.log(xhr.responseText);
    }
   })

   xhr.open("GET",newURL);
   xhr.send();
}
getComments("https://jsonplaceholder.typicode.com/posts/1/comments",null);