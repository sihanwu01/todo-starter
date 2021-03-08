function addNewList() {
    
}

function addListItem() {
    let list = document.getElementById("grocery-list");
    let itemInput = document.getElementById("new-list-item");
    let newItem = document.createElement("li");
    
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}


