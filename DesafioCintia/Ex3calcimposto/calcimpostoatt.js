function calcular() {

    let preco = 20.50
    let precodesconto = 0
    let precoimposto = 0
    let codigojs = document.querySelector("input#codigo");
    let estadojs = document.querySelector("input#estado")
    let res = document.querySelector("div#res")
    let final = document.querySelector("div#final")
    let desconto = 15
    let frete = 0 
    let precofinal = 0

    function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let icsm = aleatorio(12, 25);


    if (estadojs.value == "São Paulo"){
        frete = 10

    } else if (estadojs.value == "Rio de Janeiro"){
        frete = 20
    } else {
        frete = 30
    }

    

    if (codigojs.value == "PROMO15") {     
        precodesconto =  preco - (preco * desconto / 100)
        precoimposto = (precodesconto * icsm) / 100
        precofinal = precoimposto + (frete + precodesconto)

        final.innerHTML = `Preço original: ${preco}<br>
        Preço com desconto:${precodesconto}<br>
        Preço final com imposto e o frete calculado:${precofinal}`
        

    } else if (codigojs != "PROMO15"){
        precoimposto = (preco * icsm) / 100
        precofinal = precoimposto + (frete + preco)
        res.innerHTML = "Sem desconto"
        final.innerHTML = `Preço original: ${preco}<br>
        Preço final com imposto e o frete:${precofinal}`
    } 

    
    
     
    

}