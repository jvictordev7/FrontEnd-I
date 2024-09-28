// Leitura do valor de entrada
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const salario = parseFloat(input);

let imposto = 0;

// Verificação das faixas de isenção e cálculos
if (salario <= 2000.00) {
    console.log("Isento");
} else {
    if (salario > 4500.00) {
        imposto += (salario - 4500.00) * 0.28;
    }
    if (salario > 3000.00) {
        imposto += (Math.min(salario, 4500.00) - 3000.00) * 0.18;
    }
    if (salario > 2000.00) {
        imposto += (Math.min(salario, 3000.00) - 2000.00) * 0.08;
    }
    
    // Imprime o valor final com duas casas decimais
    console.log(`R$ ${imposto.toFixed(2)}`);
}
