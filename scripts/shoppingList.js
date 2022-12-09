const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');


addButton.addEventListener('click', function(){
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const delButtonX = document.createTextNode('x');
    const text = document.createTextNode(enterItem.value);
    delButton.addEventListener('click', remove)
    delButton.appendChild(delButtonX);
    li.appendChild(text);
    li.appendChild(delButton);
    li.addEventListener('click', strike);
    shoppingList.appendChild(li);
    localStorage.setItem('items', shoppingList.innerHTML)
    enterItem.value = '';
})

function remove(e){
    const button = e.currentTarget.parentNode;
    console.log(button);
    shoppingList.removeChild(button);
}

function strike(e){
    const line = e.currentTarget;
    console.log(line);
    if (line.style.textDecoration === 'line-through'){
        line.style.textDecoration = 'none';
    } else {
        line.style.textDecoration = 'line-through';
    }
}

if (localStorage['items']){
    shoppingList.innerHTML = localStorage.getItem('items')
}
