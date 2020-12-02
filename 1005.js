lines = [5.0, 7.1];

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let MEDIA = (A * 3.5 + B * 7.5) / 11;
console.log(`MEDIA = ${(MEDIA).toFixed(5)}`);