var input = require('fs').readFileSync('stdin', 'utf8');

var [A,B] = input.split('\n');
let X = parseInt(A) + parseInt(B)
console.log('X =',X)
