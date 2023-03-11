//var items=document.getElementsByClassName("list-group-item");
//items[2].style.backgroundColor="pink";
//for(var i=0;i<items.length;i++){
  //  items[i].style.fontWeight="bold";

//}
//var eachitem=document.getElementsByTagName("li");
//for(var j=0;j<eachitem.length;j++){
 //   eachitem[j].style.backgroundColor="#f4f4f4";
//}
//var itemlist=document.querySelector('#items');
//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor="#cccc";
//console.log(itemlist.firstElementChild);
//itemlist.firstElementChild.style.backgroundColor="#ccc";
//itemlist.firstElementChild.textContent="bindu";
//itemlist.lastElementChild.textContent="janu";
//console.log(itemlist.nextElementSibling);
//console.log(itemlist.previousElementSibling);
//itemlist.previousElementSibling.style.color="yellow";
var newdiv=document.createElement("div");
newdiv.className="hello1";
newdiv.id="hello2";
newdiv.setAttribute('title',"hello3");

var divnext=document.createTextNode("Hello");
newdiv.appendChild(divnext);
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
console.log(newdiv);
container.insertBefore(newdiv,h1);
var parentNode11=document.getElementById("items");
var parentNode12=document.createTextNode("Hello World");

parentNode11.innerHTML='<li>Hello World</li>'+parentNode11.innerHTML


