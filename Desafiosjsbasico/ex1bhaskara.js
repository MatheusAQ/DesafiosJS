/*
Desafio 1 - Bhaskara
Faça um programa em Javascript para calcular os valores x1 e x2 da fórmula de Bhaskara, usando as variáveis a, b e c, e mostre os valores x1 e x2. Usando os operadores de atribuição e aritméticos.
*/


let a = -1
let b = 2
let c = 3
let x1 = 0
let x2 = 0
let delta = 0

if (a != 0 ) {
    delta = b**2 -4 * a * c

    x1 = (-b + Math.sqrt(delta)) / 2*a 

    x2 = (-b - Math.sqrt(delta)) / 2*a
    if(delta > 0){

        console.log("Delta:",delta)
        console.log("A equação terá duas raízes reais e distintas")
        console.log("Valor de x1 é", x1)
        console.log("Valor de x2 é", x2) 
    }
    if(delta == 0){

        console.log("Delta:",delta)
        console.log("A equação apresentará uma raiz real")
        console.log("Valor de x1 é", x1)
        console.log("Valor de x2 é", x2) 
    }
    if(delta <= 0){

        console.log("Delta:",delta)
        console.log("A equação não possui raízes reais")
    }
   
} else {
        console.log("[ERRO] A variavel A é invalida")
    }

    

