// Leitura dos dados de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.trim().split('\n');

// Processamento dos pontos
for (let i = 0; i < lines.length; i++) {
    const [x, y] = lines[i].split(' ').map(Number);
    
    // Encerrar o programa se uma das coordenadas for nula
    if (x === 0 || y === 0) {
        break;
    }

    // Verifica em qual quadrante o ponto se encontra
    if (x > 0 && y > 0) {
        console.log('primeiro');
    } else if (x < 0 && y > 0) {
        console.log('segundo');
    } else if (x < 0 && y < 0) {
        console.log('terceiro');
    } else if (x > 0 && y < 0) {
        console.log('quarto');
    }
}
