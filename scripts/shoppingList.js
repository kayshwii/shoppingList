const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');
const itemList = [];


addButton.addEventListener('click', function(){
    itemList.push(enterItem.value)
    const li = document.createElement('li');
    const text = document.createTextNode(enterItem.value);
    li.appendChild(text);
    shoppingList.appendChild(li);
    localStorage.setItem('items', shoppingList.innerHTML)
    console.log(itemList);
    enterItem.value = '';
})

if (localStorage['items']){shoppingList.innerHTML = localStorage.getItem('items')}
