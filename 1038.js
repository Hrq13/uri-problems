let lines = ['4 3'];
let entrada = lines.shift().split(' ');
let quantidade = parseInt(entrada[1]);
let preco = 0;

switch(parseInt(entrada[0])){
    case 1:
        preco = 4.00 * quantidade;
        console.log(`Total: R$ ${preco.toFixed(2)}`);
        break;
    case 2:
        preco = 4.50 * quantidade;
        console.log(`Total: R$ ${preco.toFixed(2)}`);
        break;
    case 3:
        preco = 5.00 * quantidade;
        console.log(`Total: R$ ${preco.toFixed(2)}`);
        break;
    case 4:
        preco = 2.00 * quantidade;
        console.log(`Total: R$ ${preco.toFixed(2)}`);
        break;
    case 5:
        preco = 1.50 * quantidade;
        console.log(`Total: R$ ${preco.toFixed(2)}`);
        break;
}