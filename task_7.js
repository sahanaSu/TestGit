var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    //create edit button element
    var button_edit = document.createElement('button');
    button_edit.className="btn btn-danger btn-sm float-right delete";
    button_edit.appendChild(document.createTextNode("E"));
    //button_delete.appendChild(button_edit);
    li.appendChild(button_edit);
    //create delete button element
    var button_delete = document.createElement('button');
    button_delete.className="btn btn-danger btn-sm float-right delete";
    button_delete.style.marginRight="5px";
    button_delete.appendChild(document.createTextNode('X'));
    li.appendChild(button_delete);
    
    itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure?")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
