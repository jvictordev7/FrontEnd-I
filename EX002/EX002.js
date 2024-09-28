// Leitura dos valores de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

// Conversão das entradas para números de ponto flutuante
const x = parseFloat(input[0]);
const y = parseFloat(input[1]);

// Verificação das condições
if (x === 0 && y === 0) {
    console.log("Origem");
} else if (x === 0) {
    console.log("Eixo Y");
} else if (y === 0) {
    console.log("Eixo X");
} else if (x > 0 && y > 0) {
    console.log("Q1");
} else if (x < 0 && y > 0) {
    console.log("Q2");
} else if (x < 0 && y < 0) {
    console.log("Q3");
} else if (x > 0 && y < 0) {
    console.log("Q4");
}
