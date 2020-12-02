lines = ['12 1 5.30', '16 2 5.10'];

let aPagar = 0;
let peca1 = lines.shift().split(' ');
let numPeca1 = parseInt(peca1[0]);
let qtPeca1 = parseInt(peca1[1]);
let precoPeca1 = parseFloat(peca1[2]);
aPagar += qtPeca1 * precoPeca1;

let peca2 = lines.shift().split(' ');
let numPeca2 = parseInt(peca2[0]);
let qtPeca2 = parseInt(peca2[1]);
let precoPeca2 = parseFloat(peca2[2]);
aPagar += qtPeca2 * precoPeca2;

console.log(`VALOR A PAGAR: R$ ${aPagar.toFixed(2)}`);