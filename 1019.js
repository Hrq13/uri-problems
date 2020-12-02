var lines = [140153];

var tempo = lines.shift();
let hora = 0, min = 0, sec = 0;

while (tempo >= 3600) {
    hora += 1;
    tempo -= 3600;
}
while (tempo >= 60) {
    min += 1;
    tempo -= 60;
}
while (tempo >= 1) {
    sec += 1;
    tempo -= 1;
}
console.log(`${hora}:${min}:${sec}`);