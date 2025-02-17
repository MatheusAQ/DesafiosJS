/*
Vocês vão criar um sistema de análise de desempenho de uma equipe. 
 
A quantidade de membros da equipe fica de acordo com o gosto de vocês, desde que seja um mínimo de 3 pessoas. 
 
Cada pessoa receberá uma pontuação com base na quantidade de tarefas que forem completadas e, para considerar a nota final, deverão ser levados em conta os seguintes critérios:
 
1) Cada tarefa recebe uma pontuação de 0 a 10
2) o número de tarefas varia entre 5 e 10, por pessoa da equipe.
 
A pontuação final de cada membro é feita de acordo com a média ponderada. Ou seja, tarefas ímpares recebem peso 2, enquanto tarefas pares recebem peso 1. 
 
Caso a média ponderada de um membro seja maior que 8, ele recebe um bônus de 2 pontos. 
 
O sistema precisa retornar o nome e a média de cada pessoa do time, quem teve o melhor desempenho, e quem teve o pior desempenho
*/



// ALGUMAS PARTES APRENDI DURANTE O PROCESSO COM AJUDA 

let equipe = ['Matheus', 'Paulo', 'Alessandra'];
let tarefas = [5, 7, 9];
let notastarefa = [];
let pesostarefa = [];
let desempenho = []; 

function randomico(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcularmedia(notastarefa, pesostarefa, membro) {
    let somapesos = 0;
    let somanotas = 0;

    for (let i = 0; i < notastarefa[membro].length; i++) {
        somanotas = somanotas + notastarefa[membro][i] * pesostarefa[membro][i];
        somapesos = somapesos + pesostarefa[membro][i];
    }
    return somanotas / somapesos;
}

for (let i = 0; i < equipe.length; i++) {
    notastarefa[i] = [];
    pesostarefa[i] = [];

    for (let j = 0; j < tarefas[i]; j++) {
        let nota = randomico(0, 10);
        notastarefa[i].push(nota);

        let peso = (j % 2 === 0) ? 1 : 2;
        pesostarefa[i].push(peso);
    }

    let media = calcularmedia(notastarefa, pesostarefa, i);
    let bonus = media > 8 ? 2 : 0; 
    let pontuacaoFinal = media + bonus; 

    desempenho.push({
        nome: equipe[i],
        media: media,
        bonus: bonus,
        pontuacaoFinal: pontuacaoFinal
    });
}


let melhorDesempenho = desempenho[0];
let piorDesempenho = desempenho[0];

for (let i = 1; i < desempenho.length; i++) {
    if (desempenho[i].pontuacaoFinal > melhorDesempenho.pontuacaoFinal) {
        melhorDesempenho = desempenho[i];
    }
    if (desempenho[i].pontuacaoFinal < piorDesempenho.pontuacaoFinal) {
        piorDesempenho = desempenho[i];
    }
}


console.log("Desempenho da Equipe:");
for (let membro of desempenho) {
    console.log(`${membro.nome}: Média = ${membro.media.toFixed(2)}`);
}

console.log("\nMelhor Desempenho:");
console.log(`${melhorDesempenho.nome}: ${melhorDesempenho.pontuacaoFinal.toFixed(2)}`);

console.log("\nPior Desempenho:");
console.log(`${piorDesempenho.nome}: ${piorDesempenho.pontuacaoFinal.toFixed(2)}`);
