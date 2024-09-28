// Leitura dos dados de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ');

// Extraindo valores de N (número de anões) e X (distância)
let N = parseInt(input[0]);
let X = parseInt(input[1]);

// Calculando o número de dias necessários
let pessoas = N + 2;
let dias = X / pessoas;

// Imprimindo o resultado com duas casas decimais
console.log(dias.toFixed(2));
