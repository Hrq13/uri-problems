var lines = ['15 3'];

const entrada = lines.shift().split(' ').map(val => val = Number(val));
if(entrada[0] < entrada[1]) [entrada[0], entrada[1]] = [entrada[1], entrada[0]];
if(entrada[0] % entrada[1] === 0) console.log('Sao Multiplos');
else console.log('Nao sao Multiplos');