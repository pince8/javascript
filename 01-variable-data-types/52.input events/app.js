//İNOUT EVENTLARI

//focus
//blur
//inputun içine giridğimizde focus çıktığımızda blur 

//copy
//paste
//cut
//select ->başladık mousle seçtik elimizi bıraktık select yazar
const todo = document.querySelector("#todoName");
// todo.addEventListener("focus", run);
// todo.addEventListener("blur", run);

//kopyaladığımızı bile tutuyorlar
// todo.addEventListener("copy", run);

// todo.addEventListener("paste", run);

// todo.addEventListener("cut", run);

todo.addEventListener("select", run);

function run(e) {
    console.log(e.type);
}