var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

var pi = 3.14159
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var triang = (A * C)/2
 
console.log("TRIANGULO: "+triang.toFixed(3) );

var circ = pi * (C * C)

console.log("CIRCULO: "+circ.toFixed(3) );

var trapez = ((A+B) * C)/2;

console.log("TRAPEZIO: "+trapez.toFixed(3) );

var quad = B * B

console.log("QUADRADO: "+quad.toFixed(3) );

var retan = A * B

console.log("RETANGULO: "+retan.toFixed(3) );