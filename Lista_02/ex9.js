var input = require('fs').readFileSync('stdin', 'utf8');
let qtd_seg = parseInt(input);

const qtd_horas = parseInt(qtd_seg / 3600);
qtd_seg = qtd_seg % 3600;

const qtd_min = parseInt(qtd_seg / 60);
qtd_seg = qtd_seg % 60;

console.log(`${qtd_horas}:${qtd_min}:${qtd_seg}`);