var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var [A,B,C,D] = input.split('\n');
var diferenca = ((parseInt(A) * parseInt(B)) - (parseInt(C) * parseInt(D)))
console.log('DIFERENCA = '+diferenca)