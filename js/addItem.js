export { addItemtoArray, validateItemInput };
let contadorID = 1;
function addItemtoArray(ItemClass, arrayOfItens) {
    let name = document.querySelector('#item-name').value;
    let category = document.querySelector('#category').value;
    let quantity = parseInt(document.querySelector('#quantity').value);
    let price = parseInt(document.querySelector('#unit-price').value);
    let entryDate = new Date().toLocaleDateString("pt-BR");
    let newItem = new ItemClass(contadorID, name, category, quantity, price, entryDate);
    arrayOfItens.push(newItem);
    contadorID++;
}

function validateItemInput(){
    let name = document.querySelector('#item-name').value;
    let quantity = parseInt(document.querySelector('#quantity').value);
    let price = parseInt(document.querySelector('#unit-price').value);
    let category = document.querySelector('#category').value;
    let isValid = true;
    if (name.trim() === "") {
        document.querySelector('.error-item-name').textContent = "Item name cannot be empty.";
        isValid = false;
    }
    if (quantity <= 0 || isNaN(quantity)) {
        document.querySelector('.error-quantity').textContent = "Quantity must be a positive number.";
        isValid = false;
    }
    if (price <= 0 || isNaN(price)) {
        document.querySelector('.error-unit-price').textContent = "Price must be a positive number.";
        isValid = false;
    }
    if (category === "") {
        document.querySelector('.error-category').textContent = "Please select a valid category.";
        isValid = false;
    }
    if (name.trim() !== "") {
        document.querySelector('.error-item-name').textContent = "";
    }
    if (quantity > 0 && !isNaN(quantity)) {
        document.querySelector('.error-quantity').textContent = "";
    }
    if (price > 0 && !isNaN(price)) {
        document.querySelector('.error-unit-price').textContent = "";
    }
    if (category !== "") {
        document.querySelector('.error-category').textContent = "";
    }
    return isValid;
}