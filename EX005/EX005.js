// Leitura dos dados de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [X, Y] = input.trim().split(' ').map(Number);

// Processamento e impressão da sequência
let result = [];
for (let i = 1; i <= Y; i++) {
    result.push(i);
    
    // Verifica se já alcançou o X-ésimo número para quebrar a linha
    if (i % X === 0) {
        console.log(result.join(' '));
        result = [];
    }
}

// Se houver números restantes na última linha
if (result.length > 0) {
    console.log(result.join(' '));
}
