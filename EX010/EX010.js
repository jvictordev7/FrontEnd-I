const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

function findLetterRanges(line) {
    if (line.trim() === "") {
        return ""; // Retorna uma linha vazia se a entrada estiver vazia
    }

    // Remover espaços e letras duplicadas
    const uniqueChars = new Set(line.replace(/\s+/g, '').split(''));
    
    // Converter o Set em um array e ordenar
    const sortedChars = Array.from(uniqueChars).sort();
    
    const ranges = [];
    let start = sortedChars[0]; // Começa com o primeiro caractere
    let end = start; // Inicializa o final da faixa

    for (let i = 1; i < sortedChars.length; i++) {
        // Se a letra atual é consecutiva à anterior
        if (sortedChars[i].charCodeAt(0) === end.charCodeAt(0) + 1) {
            end = sortedChars[i]; // Atualiza o final
        } else {
            // Adiciona a faixa anterior
            ranges.push(`${start}:${end}`);
            start = sortedChars[i]; // Reinicia a faixa
            end = start; // Reinicia o final da faixa
        }
    }

    // Adiciona a última faixa
    ranges.push(`${start}:${end}`);

    return ranges.join(', ');
}

// Processar cada linha de entrada
const results = input.map(findLetterRanges);
console.log(results.join('\n'));
