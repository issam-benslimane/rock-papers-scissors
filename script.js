const items = ["rock","paper","scissors"]

function game(){
    const score = playRound(computerPlay,playerSelection)
    if(score > 0) return "You won hohohoho !"
    else if(score < 0) return "You lost to a stupid computer!!"
    else  return "Well it's a tie! Play again if you want."
}

function computerPlay(){
    const randomIdx = Math.floor(Math.random() * items.length)
    return randomIdx
}

function playerSelection(msg){
    let selected = items.indexOf(prompt(msg).toLowerCase())
    if(selected < 0) return playerSelection("Enter a valid choice young man !")
    return selected
}

function playRound(computerPlay,playerSelection){
    let count = 0
    let playerScore = 0
    while (count<5){
        const [c,p] = [computerPlay(),playerSelection("what's your choice young man ?!")]
        playerScore += playerWon(c,p) 
        count++
    }
    return playerScore 
}

function playerWon(c,p){
    if(c === p) return 0
    if(Math.abs(c-p) > 1) [c,p] = [p,c]
    return p > c || -1
}

const result = game()
alert(result)
