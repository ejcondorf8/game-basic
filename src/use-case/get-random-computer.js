import _ from 'underscore'
/**
 * Get random computer
 * @augments {void}
 * @returns {Array}
 * @example
 * const [optionComputer,optionCompueterHtml]=getRandomComputer();
 */
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