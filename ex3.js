var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var raio = input;
var n = '3.14159';
let raio2 = (raio * raio);
let area = (n * raio2);
console.log('A='+area.toFixed(4));