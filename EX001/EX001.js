// Leitura dos valores de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// Converte os valores de entrada para inteiros
const A = parseInt(input[0]);
const B = parseInt(input[1]);

// Calcula a soma
const SOMA = A + B;

// Imprime o resultado no formato solicitado
console.log("SOMA = " + SOMA);
