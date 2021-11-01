var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var pA = 3.5, pB = 7.5;
var peso = parseFloat(pA) + parseFloat(pB);
var [A,B] = input.split('\n');
var media = ((parseFloat(A) * parseFloat(pA)) + (parseFloat(B) * parseFloat(pB))) / parseFloat(peso)

console.log('MEDIA = '+media.toFixed(5));

/*
A tem peso = 3.5
B tem peso = 7.5


Mp = [(N1 x P1) + ... (Nx x Px)] 
        ÷ (P1 + ... Px).

Mp é a média ponderada (o resultado que você quer descobrir)
N é cada valor do conjunto
P é o peso correspondente de cada valor do conjunto
*/