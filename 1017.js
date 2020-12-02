var lines = [10, 85];

let horas = parseInt(lines.shift());
let velMedia = parseInt(lines.shift());
let consumo = ((velMedia * horas) / 12).toFixed(3);
console.log(consumo);