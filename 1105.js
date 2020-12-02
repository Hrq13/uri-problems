var lines = 
['3 3', '1 1 1', '1 2 1', '2 3 2', '3 1 3',
'3 3', '1 1 1', '1 2 1', '2 3 2', '3 1 4',
'3 3', '1 1 1', '1 2 2', '2 3 2', '3 1 2',
'3 3', '2 2 2', '2 1 4', '1 3 2', '3 2 1',
'3 3', '2 2 2', '3 2 1', '2 3 1', '1 2 3', '0 0'];

do {
    let qtBancos = 0;
    let debentures = 0;
    let check = 0;
    let reservas = [];
    
    initial = lines.shift().split(' ');
    for (let ind in initial) initial[ind] = parseInt(initial[ind]);
    if (initial[0] !== 0 && initial[1] !== 0){
        qtBancos = initial[0];
        debentures = initial[1];
    } else break;

    let pegandoReservas = lines.shift().split(' ');
    for (let i = 0; i < qtBancos; ++i){
        reservas[i] = parseInt(pegandoReservas[i]);
    }
    
    for (let pag = 0; pag < debentures; ++pag){
        let paga = lines.shift().split(' ');
        for (let i in paga) paga[i] = parseInt(paga[i]);
        reservas[paga[1] - 1] += parseInt(paga[2]);
        reservas[paga[0] - 1] -= parseInt(paga[2]);
        console.log(reservas);
    }
    for (let valor of reservas){
        if (valor < 0){
            check = 1;
            break;
        }
    }
    if (check === 0) console.log('S'); else console.log('N');
} while(initial[0] !== 0 && initial !== 0);