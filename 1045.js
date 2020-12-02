var lines = ['7.0 5.0 7.0'];

getLine();
function getLine(){
    const entrada = lines.shift().split(' ').map(val => val = parseFloat(val));
    const organizado = entrada.sort((a, b) => b - a);
    verify(organizado[0], organizado[1], organizado[2]);
}
function verify(a, b, c){
    if(b + c <= a) console.log('NAO FORMA TRIANGULO');
    else {
        if(a*a === b*b + c*c) console.log('TRIANGULO RETANGULO');
        if(a*a > b*b + c*c) console.log('TRIANGULO OBTUSANGULO');
        if(a*a < b*b + c*c) console.log('TRIANGULO ACUTANGULO');
        if(a === b && b === c) console.log('TRIANGULO EQUILATERO');
        if((a === b || a === c || b === c) && (a !== b || c !== a || b !== c)) console.log('TRIANGULO ISOSCELES');
    }
}