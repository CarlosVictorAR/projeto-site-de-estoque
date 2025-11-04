import { addItemtoArray, validateItemInput } from "./addItem.js";
let arrayOfItems = [];
class Item {
    constructor (id, name, category, quantity, price, dateEntry){
        this.id = id;
        this.name = name;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.dateEntry = dateEntry;
    }
}

// addButton on Add Itens Page
let addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
    if(validateItemInput()){
        addItemtoArray(Item, arrayOfItems);
        console.log(arrayOfItems);
    }

});



