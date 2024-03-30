import _ from 'underscore'

export const getRandomComputer = () => {
    let option={
        1: 'piedra',
        2: 'papel',
        3: 'tijera',
    }
    let optionsComputer=Object.entries(option)
    optionsComputer=_.shuffle(optionsComputer)
    return optionsComputer[0]
}