var input = require('fs').readFileSync('stdin', 'utf8');

const qtd_min = (60 * input) / 30;

console.log(qtd_min+" minutos")