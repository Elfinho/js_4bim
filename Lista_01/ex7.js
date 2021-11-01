var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = input.split('\n');

var pA = 2, pB = 3, pC = 5;
var peso = parseFloat(pA) + parseFloat(pB) + parseFloat(pC);
var [A,B,C] = input.split('\n');
var media = ((parseFloat(A) * parseFloat(pA)) + (parseFloat(B) * parseFloat(pB)) + (parseFloat(C) * parseFloat(pC))) / parseFloat(peso)

console.log('MEDIA = '+media.toFixed(1));

/*
A tem peso 2
B tem peso 3 
C tem peso 5


Mp = [(N1 x P1) + ... (Nx x Px)] 
        ÷ (P1 + ... Px).

Mp é a média ponderada (o resultado que você quer descobrir)
N é cada valor do conjunto
P é o peso correspondente de cada valor do conjunto
*/