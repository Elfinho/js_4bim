var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

var R = parseFloat(lines);
var volume;
var pi = 3.14159;

volume = (4/3) * pi * (Math.pow(R,3));

console.log('VOLUME = '+volume.toFixed(3));