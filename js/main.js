import { addItemtoArray } from "./addItem.js";
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

let addButon = document.querySelector('.add-button');
// Passamos a classe Item e o array para evitar dependência circular entre módulos
addButon.addEventListener('click', () => addItemtoArray(Item, arrayOfItens));


