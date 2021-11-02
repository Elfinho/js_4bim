var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var [id_item1,qtd_item1,vl_item1] = lines.shift().split(" ");
var [id_item2,qtd_item2,vl_item2] = lines.shift().split(" ");

var tot_item1 = qtd_item1 * vl_item1;
var tot_item2 = qtd_item2 * vl_item2;

var tot_compra = tot_item1 + tot_item2;

console.log("VALOR A PAGAR: R$ "+tot_compra.toFixed(2));