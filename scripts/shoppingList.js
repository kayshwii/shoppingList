const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');
const itemList = [];


addButton.addEventListener('click', function(){
    itemList.push(enterItem.value)
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const delButtonX = document.createTextNode('x');
    const text = document.createTextNode(enterItem.value);
    delButton.setAttribute('onclick', 'remove()');
    delButton.appendChild(delButtonX);
    li.appendChild(text);
    li.appendChild(delButton);
    shoppingList.appendChild(li);
    localStorage.setItem('items', shoppingList.innerHTML)
    console.log(itemList);
    enterItem.value = '';
})

function remove(){
    const button = this.event.currentTarget.parentNode;
    shoppingList.removeChild(button);
    localStorage.setItem('items', shoppingList.innerHTML)
}

if (localStorage['items']){
    shoppingList.innerHTML = localStorage.getItem('items')
}
