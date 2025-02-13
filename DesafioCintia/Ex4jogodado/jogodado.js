let pontos = 10
let dado = 0
let rodada = 1

dado = Math.floor(Math.random() * 6) + 1


while (rodada <= 20) {
    dado = Math.floor(Math.random() * 6) + 1
    console.log("=============================================================")
    console.log(`RODADA: ${rodada}`)
    console.log(`DADO: ${dado}`)
    
    if (pontos >= 0){

        if (dado % 2 == 0){       //se é par
            pontos = pontos - 5
            console.log(`[PAR PERDEU 5 PONTOS] PONTUAÇÃO:${pontos}`)
        } else if(dado % 2 == 1){ // se é impar
            pontos = pontos + 10
            console.log(`[IMPAR GANHOU 10 PONTOS] PONTUAÇÃO:${pontos}`)
        } 
        if (rodada % 3 == 0){     // se for multiplo de 3
            pontos = pontos + 15
            console.log(`[RODADA MULTIPLA GANHOU 15 PONTOS] PONTUAÇÃO:${pontos}`)
        } else if (rodada % 4 == 0){  // se for multiplo de 4
            pontos = pontos - 20
            console.log(`[RODADA MULTIPLA PERDEU 20 PONTOS] PONTUAÇÃO:${pontos}`)
        }
   }

   if (pontos < 0){
        console.log("[PONTUAÇÃO NEGATIVA PERDERA MAIS PONTOS]")

        if (dado % 2 == 0){       //se é par
            pontos = pontos - 10
            console.log(`[PAR PERDEU 10 PONTOS] PONTUAÇÃO:${pontos}`)
        } else if(dado % 2 == 1){ // se é impar
            pontos = pontos + 10
            console.log(`[IMPAR GANHOU 5 PONTOS] PONTUAÇÃO:${pontos}`)
        } 
        if (rodada % 3 == 0){     // se for multiplo de 3
            pontos = pontos + 15
            console.log(`[RODADA MULTIPLA GANHOU 15 PONTOS] PONTUAÇÃO:${pontos}`)
        } else if (rodada % 4 == 0){  // se for multiplo de 4
            pontos = pontos - 40
            console.log(`[RODADA MULTIPLA PERDEU 40 PONTOS] PONTUAÇÃO:${pontos}`)
        }   


   }


        rodada++
}


if (pontos >= 50){
    console.log("============================================")
    console.log(`[VITORIA] VOCÊ TERMINOU COM ${pontos} PONTOS`)

}else {
    console.log("============================================")
    console.log(`[DERROTA] VOCÊ TERMINOU COM ${pontos} PONTOS`)
}
