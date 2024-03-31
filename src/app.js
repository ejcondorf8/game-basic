import html from './app.html?raw'
import {getRandomComputer, play} from './use-case'

export const App=(element)=>{

    const displayResult=()=>{
        const btn=document.querySelector('#rock')
const btn2=document.querySelector('#paper')
const btn3=document.querySelector('#scissors')
const resultHTML=document.querySelector('#result')
let optionUse=0
let optionComputer=0
let optionCompueterHtml=''

btn.addEventListener('click', ()=>{
    [optionComputer,optionCompueterHtml]=getRandomComputer();
    optionComputer=Number(optionComputer)
    optionUse=1
    let result=play(optionUse,optionComputer)
    resultHTML.innerHTML=result+': Tu opcion fue roca  y la computadora eligio '+ optionCompueterHtml
})

btn2.addEventListener('click', ()=>{
    [optionComputer,optionCompueterHtml]=getRandomComputer();
    optionComputer=Number(optionComputer)
    optionUse=2
    let result=play(optionUse,optionComputer)
    resultHTML.innerHTML=result+': Tu opcion fue papel  y la computadora eligio '+ optionCompueterHtml
})
btn3.addEventListener('click', ()=>{
    [optionComputer,optionCompueterHtml]=getRandomComputer();
    optionComputer=Number(optionComputer)
    optionUse=3
    let result=play(optionUse,optionComputer)
    resultHTML.innerHTML=result+': Tu opcion fue tijera  y la computadora eligio '+ optionCompueterHtml
})


        
        
    }
    
    (()=>{
        const app=document.createElement('div')
        app.innerHTML=html
        document.querySelector(element).append(app)
        displayResult()
        console.log('app',app)
    
    })();



}