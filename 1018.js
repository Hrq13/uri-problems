var lines = [503];

var valor = parseInt(lines.shift());
var inicial = valor;
var nota100 = 0; var nota50 = 0; var nota20 = 0; var nota10 = 0;
var nota5 = 0; var nota2 = 0; var nota1 = 0;

while (valor >= 100) {valor -= 100; nota100 += 1;}
while (valor >= 50) {valor -= 50; nota50 += 1;}
while (valor >= 20) {valor -= 20; nota20 += 1;}
while (valor >= 10) {valor -= 10; nota10 += 1;}
while (valor >= 5) {valor -= 5; nota5 += 1;}
while (valor >= 2) {valor -= 2; nota2 += 1;}
while (valor >= 1) {valor -= 1; nota1 += 1;}

console.log(inicial);
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);