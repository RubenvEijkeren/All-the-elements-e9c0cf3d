document.querySelector("h1").classList.add("header");
//console.log(document.querySelectorAll("p"));
var ele = document.querySelectorAll("p");
for (i in ele){
	ele[i].classList.add("para");
}