//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(input);
const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];

console.log('NOTAS:');
for (let nota of notas) {
    let qtd_notas = parseInt(valor / nota);
    console.log(`${qtd_notas} nota(s) de R$ ${nota.toFixed(2)}`);
    valor = valor % nota;
}
console.log('MOEDAS:');
for (let moeda of moedas) {
    let qtd_moedas = parseInt(valor / moeda);
    console.log(`${qtd_moedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    valor = (valor % moeda) + 0.00001;
}