var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var [A,B] = input.split('\n');
let SOMA = parseInt(A) + parseInt(B);
console.log('SOMA = '+SOMA);