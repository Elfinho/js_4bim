var input = require('fs').readFileSync('stdin', 'utf8');
var [X, Y] = input.split('\n').map(item => parseFloat(item));

var kml = X / Y 

console.log(kml.toFixed(3) + " km/l");