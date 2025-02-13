/*
Desafio 3 - Jogo de Adivinhação
Crie um programa que simula um jogo de adivinhação. O programa deve gerar um número aleatório entre 1 e 100 e permitir que o usuário tente adivinhar o número. O programa deve informar se o palpite é maior ou menor que o número secreto até que o usuário acerte.

Regras:

O número secreto deve ser gerado aleatoriamente entre 1 e 100.
O usuário pode fazer quantas tentativas quiser até acertar.
Após cada tentativa, o programa deve exibir se o número é maior ou menor que o palpite.
Quando o usuário acertar, o programa deve exibir uma mensagem de parabéns e o número de tentativas usadas.

*/
// Usei o console do navegador

let aleatorio = 0
let numero = 0
let tentativas = 0
aleatorio = Math.round(Math.random() * 100);

while (numero != aleatorio ) {
    numero = prompt("Advinhe o valor:")
    if (numero < aleatorio){
        console.log("Seu palpite foi menor que o numero secreto")
    } else if (numero > aleatorio){
        console.log("Seu palpite foi maior que o numero secreto")
    }
    tentativas++

}

console.log(`Parabens você acertou, você teve ${tentativas} tentativas`)
