/*
Desafio 2 - Melhorar Programa Bhaskara
Melhore o programa de Bhaskara do desafio anterior, adicionando IFs para verificar se:
a) A variável “a” é válida (não pode ser zero);
b) Se não existem raízes reais, e informar;
c) Se existe apenas uma raiz real, e informar essa raiz;
d) Se existem duas raízes reais, e as informar
*/

let a = -1
let b = 1
let c = 6
let x1 = 0
let x2 = 0

if (a != 0 ) {
    delta = b**2 -4 * a * c

    console.log("Delta:",delta)

    x1 = (-b + Math.sqrt(delta)) / 2*a 

    x2 = (-b - Math.sqrt(delta)) / 2*a


} else {
        console.log("[ERRO] A variavel A é invalida")
    }

    console.log("Valor de x1 é", x1)
    console.log("Valor de x2 é", x2)   

