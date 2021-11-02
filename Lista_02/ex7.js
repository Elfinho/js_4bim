var input = require('fs').readFileSync('stdin', 'utf8');
var [tempo, vm_media] = input.split('\n');

const tot_percorrido = tempo * vm_media;
const qtd_combustivel = tot_percorrido / 12;

console.log(qtd_combustivel.toFixed(3))