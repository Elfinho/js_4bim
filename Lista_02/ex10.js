var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var N = parseInt(lines);
var x = parseInt(lines.shift());
var dia = (x % 365) % 30
var mes = (x % 365) / 30
var ano = x / 365

console.log(ano.toFixed(0) + " ano(s)" + "\n" +mes.toFixed(0)+" mes(es)"+ "\n" + dia.toFixed(0)+" dia(s)");