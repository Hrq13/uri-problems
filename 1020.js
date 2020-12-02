var lines = [30];

var emDias = lines.shift();
let ano = 0, mes = 0, dia = 0;

while (emDias >= 365) {
    ano += 1;
    emDias -= 365;
}
while (emDias >= 30) {
    mes += 1;
    emDias -= 30;
}
while (emDias >= 1) {
    dia += 1;
    emDias -= 1;
}
console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);