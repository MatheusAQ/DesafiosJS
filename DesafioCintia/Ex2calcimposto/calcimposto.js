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
