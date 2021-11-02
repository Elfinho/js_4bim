var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

var pi = 3.14159
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var triang = (A * C)/2;
var circ = pi * (C * C);
var trapez = ((A+B) * C)/2;
var quad = B * B;
var retan = A * B;
 
console.log("TRIANGULO: "+triang.toFixed(3) );
console.log("CIRCULO: "+circ.toFixed(3) );
console.log("TRAPEZIO: "+trapez.toFixed(3) );
console.log("QUADRADO: "+quad.toFixed(3) );
console.log("RETANGULO: "+retan.toFixed(3) );