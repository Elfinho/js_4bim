//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function simplify(str) {
    var result = '', data = str.split('/'), 
        numOne = Number(data[0]), 
        numTwo = Number(data[1]);
    for (var i = Math.max(numOne, numTwo); i > 1; i--) {
    if ((numOne % i === 0) && (numTwo % i === 0)) {
        numOne /= i;
        numTwo /= i;
    }
    }
    if (numTwo === 1) {
    result = numOne.toString()
    } else {
    result = numOne.toString() + '/' + numTwo.toString()
    }
    return result
}

let [numero1,operador1,denominador1,operacao1,numero2,operador2,denominador2] = lines[1].split(' ').map(item => parseInt(item));
let [numero3,operador3,denominador3,operacao2,numero4,operador4,denominador4] = lines[2].split(' ').map(item => parseInt(item));
let [numero5,operador5,denominador5,operacao3,numero6,operador6,denominador6] = lines[3].split(' ').map(item => parseInt(item));
let [numero7,operador7,denominador7,operacao4,numero8,operador8,denominador8] = lines[4].split(' ').map(item => parseInt(item));

const soma = `${numero1*denominador2 + numero2*denominador1}/${denominador1*denominador2}`;
const subtracao = `${numero3*denominador4 - numero4*denominador3}/${denominador3*denominador4}`;
const multiplicacao = `${numero5*numero6}/${denominador5*denominador6}`;
const divisao = `${numero7*denominador8}/${numero8*denominador7}`;

let resultado = `${soma} = ${simplify(soma)}
${subtracao} = ${simplify(subtracao)}
${multiplicacao} = ${simplify(multiplicacao)}
${divisao} = ${simplify(divisao)}`;

console.log(resultado);