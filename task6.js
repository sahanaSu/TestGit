//parentElement
var itemlist = document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "#f4f4f4";
//firstchild
console.log(itemlist.firstChild);
//firstElementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "Hello 1";
//lastchild
console.log(itemlist.lastChild);
//lastElementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = "Hello 4";
//nextsibling
console.log(itemlist.nextSibling);
//nextelementslobling
console.log(itemlist.nextElementSibling);
//previoussibling
console.log(itemlist.previousSibling);
//previoussiblingelement
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = "green";
//create element 
// div
var newDiv = document.createElement('div');
newDiv.className = "container";
newDiv.setAttribute('title','Hello div');
var newDivText = document.createTextNode("HELLO WORLD");
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

var secondDiv = document.createElement('div');
var secDivText = document.createTextNode('hello world');
secondDiv.appendChild(secDivText);

var classafter = document.querySelectorAll('.title')
var sec = classafter[1];
var listbefore = document.querySelectorAll('#items');
var items1 = listbefore.firstElementChild;
console.log(secondDiv);
sec.insertBefore(secondDiv,items1);



