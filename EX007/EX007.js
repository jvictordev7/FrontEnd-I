const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

// Número de casos de teste
let N = parseInt(input[0]);
let output = [];

for (let i = 1; i <= N; i++) {
    // Leitura do número de elementos no caso de teste
    let M = parseInt(input[i * 2 - 1]);
    
    // Leitura da lista de números
    let numbers = input[i * 2].split(' ').map(Number);
    
    // Filtrar apenas os números ímpares
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    
    // Ordenar os números ímpares em ordem crescente
    oddNumbers.sort((a, b) => a - b);
    
    // Lista final intercalando maior, menor, segundo maior, segundo menor, etc.
    let result = [];
    let left = 0;
    let right = oddNumbers.length - 1;
    
    while (left <= right) {
        // Primeiro maior, depois menor
        if (right >= left) result.push(oddNumbers[right--]);
        if (right >= left) result.push(oddNumbers[left++]);
    }
    
    // Armazenar o resultado no array output
    output.push(result.join(' '));
}

// Imprimir a saída final com quebra de linha entre cada caso de teste
console.log(output.join('\n'));
