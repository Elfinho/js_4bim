var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var [nome,sal_fixo,mont_vendas] = input.split('\n');
var total = parseFloat(sal_fixo) + (parseFloat(mont_vendas) * 0.15)
console.log('TOTAL = R$ '+total.toFixed(2));