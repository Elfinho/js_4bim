var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var [num,qtd_horas,vl_hora] = input.split('\n');
var salario = parseInt(qtd_horas) * parseFloat(vl_hora);
console.log('NUMBER = '+parseInt(num));
console.log('SALARY = U$ '+salario.toFixed(2));