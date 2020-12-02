var lines = ['56 231 98'];

let entrada = lines.shift().split(' ');
let crescente = [...entrada];
crescente.forEach((val, ind) => crescente[ind] = Number(crescente[ind]));
crescente.sort((a, b) => a - b);
for (let val of crescente) console.log(val);
console.log();
crescente.sort((a, b) => b - a);
for (let val of entrada) console.log(val);