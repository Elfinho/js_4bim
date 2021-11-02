var input = require('fs').readFileSync('stdin', 'utf8');
let qtd_dias = parseInt(input);
let qtd_anos, qtd_meses;

qtd_anos = parseInt(qtd_dias / 365);
qtd_dias = qtd_dias % 365;

qtd_meses = parseInt(qtd_dias / 30);
qtd_dias = qtd_dias % 30;

let resultado =
`${qtd_anos} ano(s)
${qtd_meses} mes(es)
${qtd_dias} dia(s)`

console.log(resultado)