lines = ['217 321 369'];

const conjunto = lines.shift().split(' ');
for (let val in conjunto) conjunto[val] = parseInt(conjunto[val]);
let ehMaior = (conjunto[0] + conjunto[1] + Math.abs(conjunto[0] - conjunto[1])) / 2
if (ehMaior < conjunto[2]) ehMaior = conjunto[2];
console.log(`${ehMaior} eh o maior`);