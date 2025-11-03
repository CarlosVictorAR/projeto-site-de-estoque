import { addItemtoArray, validateItemInput } from "./addItem.js";
let arrayOfItens = [];
class Item {
    constructor (id, nome, categoria, quantidade, preco, dataEntrada){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.preco = preco;
        this.dataEntrada = dataEntrada;
    }
}

let addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
    if(validateItemInput()){
        addItemtoArray(Item, arrayOfItens);
        console.log(arrayOfItens);
    }

});

