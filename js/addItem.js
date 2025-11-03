export { addItemtoArray };
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