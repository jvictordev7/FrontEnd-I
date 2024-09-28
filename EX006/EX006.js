// Leitura dos dados de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n').map(Number);

for (let i = 0; i < input.length; i++) {
    let X = input[i];
    
    // Se o valor de X for 0, paramos o loop
    if (X === 0) break;
    
    // Se X for ímpar, o próximo número par é X + 1
    if (X % 2 !== 0) {
        X += 1;
    }

    // Calculando a soma dos 5 pares consecutivos
    let sum = 0;
    for (let j = 0; j < 5; j++) {
        sum += X + (j * 2);
    }
    
    // Exibir o resultado
    console.log(sum);
}
