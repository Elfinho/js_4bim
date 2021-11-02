var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt (lines.shift());
var B = parseInt (lines.shift());
var C = parseInt (lines.shift());
var mab = (A+B + Math.abs(A-B)) / 2
var resultado = (mab + C + Math.abs(mab - C)) / 2

console.log(resultado + " eh o maior");