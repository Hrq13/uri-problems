var lines = ['6.0 4.0 2.1'];

getLine();
function getLine(){
    const entrada = lines.shift().split(' ').map((val, ind) => val = parseFloat(val));
    const verificacao = verify(entrada[0], entrada[1], entrada[2]);
    if(verificacao === false){
        const area = calcArea(entrada[0], entrada[1], entrada[2]);
        console.log('Area = ' + area.toFixed(1));
    } else {
        const perimetro = entrada[0] + entrada[1] + entrada[2];
        console.log('Perimetro = ' + perimetro.toFixed(1));
    }
}
function verify(a, b, c){
    if(a + b > c) if(a + c > b) if(b + c > a) return true;
    return false;
}
function calcArea(a, b, c){
    return ((a + b) / 2) * c;
}
