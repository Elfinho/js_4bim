/*
Calcular valor frete pedido por faixa de cep por regiao

CEP inicio

sudeste		0,1,2,3		>299,00	Frete gratis	<>	8% valor do pedido
sul		8,9		

Centro oeste	7		>399,00	Frete gratis	<>	12% valor do pedido


Norte		6		>499,00	Frete gratis	<>	15% valor do pedido
nordeste	4,5		
*/

const cep_inicio_sul = [8,9];
const cep_inicio_sudeste = [0,1,2,3];
const cep_inicio_centro_oeste = 7;
const cep_inicio_norte = 6;
const cep_inicio_nordeste = [4,5];

let input = require('fs').readFileSync('stdin', 'utf8');
let [cep_entrega, valor_pedido] = input.split(',');
let digito_cep = cep_entrega.charAt(0);

for ()

console.log(digito_cep)