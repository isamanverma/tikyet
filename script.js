let add_item = () => {
    let add_item_box = document.querySelector('#add-item-box');
    let add_item = add_item_box.value;
    let newItem = document.createElement('li');
    newItem.textContent = add_item;
    newItem.onclick = function (event) {
        check(event);
    };
    let list = document.querySelector('ol')
    list.appendChild(newItem)
    add_item_box.value = "";
};

let check = function (event) {
    if (event.target.style.textDecoration !== 'line-through') {
        event.target.style.textDecoration = 'line-through';
        event.target.style.color = 'rgb(72, 206, 72)';
    }
    else {
        event.target.style.textDecoration = 'none';
        event.target.style.color = 'white';
    }
}

