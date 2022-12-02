const addButton = document.getElementById('addEntry');
const enterItem = document.getElementById('enterItem');
const shoppingList = document.getElementById('shoppingList');

addButton.addEventListener('click', function(){
    const item = document.createElement('li');
    item.innerText = enterItem.value;
    shoppingList.appendChild(item);
    enterItem.value = '';
})