var lines = ['1 16'];

const entrada = lines.shift().split(' ').map(val => val = parseFloat(val));
let duracao = ((24 - entrada[0]) + entrada[1]) % 24;
if(duracao >= 24 || duracao < 1) duracao = 24;
console.log('O JOGO DUROU '+ duracao + ' HORA(S)');