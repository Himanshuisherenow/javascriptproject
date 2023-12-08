
let randomNum = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const startOver = document.querySelector('.resultParas')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const userInput = document.querySelector('#guessField')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true



if(playGame){
    //print()

    submit.addEventListener('click',(event)=>{
        event.preventDefault();

     
    const guess =  parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)

        
     
     })
     
    
}

function validateGuess(guess){

     if(isNaN(guess)){
        alert("please enter valid number")
     }else if(guess < 1 || guess > 100){
        alert("please enter a valid number")
     }else {
        prevGuess.push(guess)
        console.log(prevGuess)

        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over .Random number was ${randomNum}`)   
            
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
     }
}

function displayGuess(guess){

    userInput.value ='';
    
    guessSlot.innerHTML += `${guess} |`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`

}

function checkGuess(guess){

    if(guess === randomNum){
            displayMessage("you guessed it right")
            endGame()
    }else if(guess < randomNum){
        displayMessage(`number is too low`)
    }else if(guess > randomNum){
        displayMessage(`number is too high`)
    }

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}



function endGame(){
    userInput.value = ''
    userInput.setAttribute('disable','')
    p.classList.add('button')
    startOver.appendChild(p)
    p.innerHTML =`<h2 id = "newGame"> Start a New Game </h2>`
    
    playGame = false
    newGame()

}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(event)=>{

        randomNum =parseInt(Math.random()*100 + 1)
        prevGuess = []
        numGuess =1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disable')
        startOver.removeChild(p)
        playGame = true
    })

}