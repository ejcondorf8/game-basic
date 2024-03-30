
export const play = (player, computer) => {
    //1: piedra, 2: papel, 3: tijera


    if (player === computer) {
        return 'Empate';
    } else if (
        (player === 1 && computer === 3) ||
        (player === 2 && computer === 1) ||
        (player === 3 && computer === 2)
        
    ) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}