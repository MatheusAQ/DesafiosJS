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

