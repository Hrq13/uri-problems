var lines = ['10.0 20.1 5.1'];

const entrada = lines.shift().split(' ');
const A = parseFloat(entrada[0]);
const B = parseFloat(entrada[1]);
const C = parseFloat(entrada[2]);
const raiz = Math.sqrt((B*B) - 4 * A * C);
if (raiz && A && B && C) {
    let R1 = ((-B) + raiz) / (2 * A);
    let R2 = ((-B) - raiz) / (2 * A);
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
} else console.log('Impossivel calcular');