lines = ['2.0 4.0 7.5 8.0', 6.4];

let entrada = lines.shift().split(' ');
let nota1 = parseFloat(entrada[0]).toFixed(1), nota2 = parseFloat(entrada[1]).toFixed(1);
let nota3 = parseFloat(entrada[2]).toFixed(1), nota4 = parseFloat(entrada[3]).toFixed(1);
let estado = [];

let MEDIA = ((nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4 * 1) / 10).toFixed(1);
MEDIA = Number(MEDIA);

if (MEDIA < 5) { estado[0] = 'Aluno reprovado.'; estado[1] = 0}
else if (MEDIA < 7.0) { estado[0] = 'Aluno em exame.'; estado[1] = 1 }
else { estado[0] = 'Aluno aprovado.'; estado[1] = 2 }

if (estado[1] === 1){
    let notaExam = parseFloat(lines.shift());
    console.log(`Media: ${MEDIA.toFixed(1)}`);
    console.log(`${estado[0]}`);
    console.log(`Nota do exame: ${notaExam.toFixed(1)}`);
    MEDIA = (notaExam + MEDIA) / 2;
    if (MEDIA >= 5) { estado[1] = 2; console.log(`Aluno aprovado.`); }
    else { delete estado[1]; console.log(`Aluno reprovado.`); }
    console.log(`Media final: ${MEDIA.toFixed(1)}`);
} else if (estado[1] === 2){
    console.log(`Media: ${MEDIA.toFixed(1)}`);
    console.log(estado[0]);
} else if (estado[1] === 0){
    console.log(`Media: ${MEDIA}`);
    console.log(estado[0]);
}