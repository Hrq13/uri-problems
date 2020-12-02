var lines = [100];

let entrada = lines.shift();
if (entrada <= 25 && entrada >= 0) console.log('Intervalo [0,25]');
else if (entrada <= 50 && entrada >= 0) console.log('Intervalo (25,50]');
else if (entrada <= 75 && entrada >= 0) console.log('Intervalo (50,75]');
else if (entrada <= 100 && entrada >= 0) console.log('Intervalo (75,100]');
else console.log('Fora de intervalo');