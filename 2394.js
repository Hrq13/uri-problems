let initial = lines.shift();
let pilotVoltas = initial.split(' ');
voltasSomadas = [];

for (let x = 1; x <= pilotVoltas[0]; x++){
    let tempo = lines.shift();
    tempo = tempo.split(' ');
    let sum = 0
    for (let i of tempo){
        sum += parseInt(i);
    }
    voltasSomadas[x] = sum;
}

let menorValor = voltasSomadas[1];
let menorValorInd = 1;
for (let x in voltasSomadas){
    if (voltasSomadas[x] < menorValor){
        menorValor = voltasSomadas[x];
        menorValorInd = x;
    }
}
console.log(menorValorInd);