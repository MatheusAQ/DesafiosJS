
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
