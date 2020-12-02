var lines = ['0.0 0.0'];

let entrada = lines.shift().split(' ');
let X = parseFloat(entrada[0]);
let Y = parseFloat(entrada[1]);

if (X > 0){
    if (Y > 0) console.log('Q1');
    else if(Y < 0) console.log('Q4');
    else console.log('Eixo X');
} else if (X < 0){
    if (Y > 0) console.log('Q2');
    else if(Y < 0) console.log('Q3');
    else console.log('Eixo X');
} else {
    if (Y > 0) console.log('Eixo Y');
    else if(Y < 0) console.log('Eixo Y');
    else console.log('Origem');
}