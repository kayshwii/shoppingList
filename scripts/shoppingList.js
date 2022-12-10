
const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');


addButton.addEventListener('click', function(){
    const ul = document.createElement('ul');
    const delButton = document.createElement('button');
    const delButtonX = document.createTextNode('x');
    const text = document.createTextNode(enterItem.value);
    delButton.addEventListener('click', remove)
    delButton.setAttribute('class', 'btn btn-danger')
    delButton.appendChild(delButtonX);
    ul.appendChild(delButton);
    ul.appendChild(text);
    ul.addEventListener('click', strike);
    shoppingList.appendChild(ul);
    localStorage.setItem('items', shoppingList.innerHTML)
    enterItem.value = '';
})

function remove(e){
    const button = e.currentTarget.parentNode;
    shoppingList.removeChild(button);
}

function strike(e){
    const line = e.currentTarget;
    if (line.style.textDecoration === 'line-through'){
        line.style.textDecoration = 'none';
    } else {
        line.style.textDecoration = 'line-through';
    }
}

if (localStorage['items']){
    shoppingList.innerHTML = localStorage.getItem('items')
}
