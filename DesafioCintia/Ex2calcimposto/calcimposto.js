/*
Desafio 1 - Adicional, Calculadora
A calculadora precisa conter 3 variáveis: uma que recebe um preço de um produto(em decimal, por favor), uma que informe se o produto tem direito a desconto (desconto de 10%), e o ICMS (que pode variar entre 12 e 25%)

O ICMS deverá ser calculado após o produto receber (ou não desconto).

O progama deverá retornar o valor do produto original, se ele teve desconto, o valor do produto com desconto e o valor do produto com o imposto aplicado.

Pra tornar as coisas mais interessantes, como o valor do imposto é variável, vamos brincar de loteria e deixar o valor do imposto randômico (entre os valores informados.... 12 a 25%)
*/

let preco = 20.50
let direitoadesconto = true
let desconto = 10

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let icsm = aleatorio(12, 25);



if (direitoadesconto == true) {

    precodesconto =  preco - (preco * desconto / 100)
    precoimposto = precodesconto - (precodesconto * icsm / 100)
    
    let precoimpostoform = precoimposto.toFixed(2);

    console.log("Preço original:",preco, "\nPreço com desconto:", precodesconto, "\nPreço final com imposto:",precoimpostoform)
    
    
}
