var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(" ");

var R = parseFloat(lines);
var volume;
var pi = 3.14159;

volume = (4/3) * pi * ( R * R * R);

console.log('VOLUME = '+volume.toFixed(3));