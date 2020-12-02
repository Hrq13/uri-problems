lines = ['500', '35.0'];

let X = parseFloat(lines.shift());
let Y = parseFloat(lines.shift());
let consumo = X / Y;
console.log(`${consumo.toFixed(3)} km/l`)
