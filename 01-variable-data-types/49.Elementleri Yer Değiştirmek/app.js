//W3 Schoolsdan replaceChild()
//Elementleri Değiştirmek

const cardBody = document.querySelectorAll(".card-body")[1];

const newTitle = document.createElement("h3");
newTitle.className = "card-title";
newTitle.textContent = "MÜkemmel Yazılımcı Karşınızda";

cardBody.children
console.log(cardBody.children);


//Bu benim yorumum
cardBody.replaceChild(newTitle, cardBody.children[3]);
//buda videodaki
cardBody.replaceChild(newTitle, cardBody.childNodes[1]);