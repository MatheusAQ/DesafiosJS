/*Crie um programa simples que permite ao usuário gerenciar um cadastro de pessoas.
Cada pessoa terá um nome, idade e e-mail armazenados como um objeto dentro de um
array. O usuário poderá adicionar, remover e listar os cadastros.
Regras:
1. O programa deve armazenar os usuários em um array de objetos, onde cada
objeto representa uma pessoa com as propriedades:
o nome
o idade
o email
2. O usuário poderá escolher entre as seguintes opções:
o Adicionar um novo usuário.
o Remover um usuário pelo email.
o Listar todos os usuários cadastrados.
o Sair do programa.
3. O programa deve rodar até que o usuário escolha sair.
4. Não pode haver mais de um usuário com o mesmo e-mail.
*/

const prompt = require("prompt-sync")();
let opcao = "0"
const cadastros = []

function usuario(nome, idade, email) {
    this.nome = nome
    this.idade = idade
    this.email = email
    
    
}
console.log("=============================================================")
console.log("CADASTRO DE USUARIOS")

while (opcao != 4){
    console.log("=============================================================")
    console.log("1- Adcionar novo usuario \n2- Remover usuario pelo email\n3- Exibir lista de usuarios\n4- Sair ")
    opcao = prompt("Escolha uma opção: ")

    switch(opcao){
        case "1":
            console.log("Adcionar usuario")
            adcionarusuario()
        break;
        case "2":
            removerusuario()
        break;
        case "3":
            exibirusuario()
        break;
        default:
            console.log("Insira um comando válido")
    } 
}




function adcionarusuario(){
    let nome = prompt("Nome do usuario: ")
    let idade = prompt("Idade do usuario: ")
    let email = prompt("Email do usuario: ")
    const novousuario = new usuario(nome, idade, email);
    const emailcadastrado = cadastros.some(user => user.email === email);
    
    if (emailcadastrado == true){
        console.log("[ERRO EMAIL JA EXISTENTE]")
    }else{
        cadastros.push(novousuario) 
        console.log("Email cadastrado com sucesso")
    }
    
}

function exibirusuario(){
    console.log("=====================")
    console.log("USUARIOS CADASTRADOS")
    cadastros.forEach(user => {
        console.log(`Nome: ${user.nome} Idade: ${user.idade} Email: ${user.email}`)
    })
}
function removerusuario(){
    console.log("====================")
    console.log("REMOVER USUARIO")
    let excluir = prompt("Email do usuario: ")
    const indice = cadastros.findIndex(user => user.email === excluir)
    if (indice > -1){
        cadastros.splice(indice, 1)
        console.log("Usuario removido com sucesso")
    }else {
        console.log("Usuario não encontrado")
    }
    
      
}