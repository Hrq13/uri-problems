var lines = [1000.93];

var valor = parseFloat(lines.shift());
const notasLit = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00];
var notas = [0, 0, 0, 0, 0, 0];
const moedasLit = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
var moedas = [0, 0, 0, 0, 0, 0];
const control = 6;
console.log('NOTAS:');
for (let ind = 0; ind < control; ind++){
    while (valor >= notasLit[ind]) {valor -= notasLit[ind]; notas[ind] += 1; }
}
for (let ind = 0; ind < control; ind++){
    console.log(`${notas[ind]} nota(s) de R$ ${(notasLit[ind]).toFixed(2)}`);
}
console.log('MOEDAS:');
for (let ind = 0; ind < control; ind++){
    while (valor >= moedasLit[ind]) {valor -= moedasLit[ind]; moedas[ind] += 1;
        valor = valor.toFixed(2)} // toFixed(2); para resolver a imprecisão do IEEE 754
}
for (let ind = 0; ind < control; ind++){
    console.log(`${moedas[ind]} moeda(s) de R$ ${(moedasLit[ind]).toFixed(2)}`);
}