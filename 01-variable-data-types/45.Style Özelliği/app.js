//Style Özelliğini Anlamak.

const todo = document.querySelectorAll(".list-group-item")[0];
const todoList = document.querySelector(".list-group");

const clearButton = document.querySelector("#todoClearButton");

console.log(clearButton);

todo.style.color= "#fff";
todo.style.backgroundColor = "purple";
todo.style.fontWeight="bold";
todo.style.paddingTop = "20px";
todo.style.paddingLeft = "70px";


todoList.style.marginTop="60px";
// todoList.style.marginLeft = "100px";

clearButton.style.backgroundColor="red";
clearButton.style.fontWeight = "bold";
clearButton.style.padding="10px";
// clearButton.style.marginTop="100px";
clearButton.style.borderRadius ="50px";


