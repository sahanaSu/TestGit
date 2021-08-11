var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = "green";
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.visibility = "hidden";

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = "green";
}
var secitem = document.querySelectorAll('.list-group-item');
secitem[1].style.backgroundColor = "green";
