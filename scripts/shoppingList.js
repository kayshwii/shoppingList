const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');


addButton.addEventListener('click', function(){
    const li = document.createElement('li');
    const checkButton = document.createElement('input')
    checkButton.setAttribute('type', 'checkbox')
    checkButton.setAttribute('onclick', 'strike()');
    const delButton = document.createElement('button');
    const delButtonX = document.createTextNode('x');
    const text = document.createTextNode(enterItem.value);
    delButton.setAttribute('onclick', 'remove()');
    delButton.appendChild(delButtonX);
    li.appendChild(text);
    li.appendChild(checkButton)
    li.appendChild(delButton);
    shoppingList.appendChild(li);
    localStorage.setItem('items', shoppingList.innerHTML)
    enterItem.value = '';
})

function remove(){
    const button = this.event.currentTarget.parentNode;
    shoppingList.removeChild(button);
}

function strike(){
    const line = this.event.currentTarget.parentNode;
    const box = this.event.currentTarget;
    if (box.checked == true){
        line.style.textDecoration = "line-through"
    } else {
        line.style.textDecoration = null;
    }
}

if (localStorage['items']){
    shoppingList.innerHTML = localStorage.getItem('items')
}
