const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');


addButton.addEventListener('click', function(){
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const delButtonX = document.createTextNode('x');
    const text = document.createTextNode(enterItem.value);
    delButton.setAttribute('onclick', 'remove()');
    delButton.appendChild(delButtonX);
    li.appendChild(text);
    li.appendChild(delButton);
    li.setAttribute('onclick', 'strike()');
    shoppingList.appendChild(li);
    localStorage.setItem('items', shoppingList.innerHTML)
    enterItem.value = '';
})

function remove(){
    const button = this.event.currentTarget.parentNode;
    shoppingList.removeChild(button);
}

function strike(){
    const line = this.event.currentTarget;
    if (line.style.textDecoration === 'none'){
        line.style.textDecoration = 'line-through';
    } else {
        line.style.textDecoration = 'none';
    }
}

if (localStorage['items']){
    shoppingList.innerHTML = localStorage.getItem('items')
}
