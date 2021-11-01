var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var [A,B] = input.split('\n');
var PROD = A * B
console.log('PROD = '+PROD);