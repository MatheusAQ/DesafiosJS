/*
Crie um programa simples que simula um gerenciador de lista de compras. O usuário
poderá adicionar itens à lista, remover itens e visualizar a lista de compras. O programa
deve usar vetores (arrays) e funções para organizar o código.

Regras:
1. O programa deve ter um array chamado listaDeCompras que começa vazio.
2. Deve oferecer as seguintes opções ao usuário:
o Adicionar um item à lista.
o Remover um item da lista.
o Exibir os itens da lista.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. As funções devem ser utilizadas para organizar as operações principais:
o adicionarItem(item): Adiciona um item ao array.
o removerItem(item): Remove um item do array (se existir).
o exibirLista(): Mostra todos os itens da lista no console.
Dicas:
 Use console.log() para exibir mensagens.
 Para manter o programa rodando, utilize um loop while e um switch-case para as
opções.
*/

const prompt = require("prompt-sync")();
let listadecompras = []
let item 
let escolha 





while (escolha != "4"){
    console.log("=============================================================")
    console.log("1- Adcionar item \n2- Remover item\n3- Exibir lista\n4- Sair ")
    escolha = prompt("Escolha uma opção: ")
        

    switch (escolha) {
        case "1":
            adcionaritem()
        break;

        case "2":
            removeritem()
         break;

        case "3":
            exibirlista()
        break

    }
}

function adcionaritem(){
    item = prompt("Digite o nome do item: ")
    listadecompras.push(item);
    console.log(`Item "${item}" adcionado`)

}

function removeritem(){
    item = prompt("Digite o nome do item para remover: ")
    const indice = listadecompras.indexOf(item);
    if (indice > -1) { 
        listadecompras.splice(indice, 1); 
        console.log(`Item "${item}" removido`);
    } else {
        console.log(`Item "${item}" não encontrado na lista.`);
    }    

}

function exibirlista(){
    console.log("Lista de compras:")
    let l = listadecompras.length

    for(let i=0; i < l; i++) 
    console.log(listadecompras[i])
}