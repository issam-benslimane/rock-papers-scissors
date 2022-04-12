const btns = document.querySelectorAll("button")
const score = document.querySelector('.score > span:last-child')
const game = document.querySelector(".game")
const result = document.querySelector(".result")
const items = ["rock","paper","scissors"]

function playerSelection(){
    const item = this.dataset.item
    playRound(computerPlay,items.indexOf(item))
}

function computerPlay(){
    const randomIdx = Math.floor(Math.random() * items.length)
    return randomIdx
}

function playRound(computerPlay,playerSelection){
    const computerSelection = computerPlay()
    const msg = findWinner(computerSelection,playerSelection)
    showResult(computerSelection,playerSelection,msg)
}

function findWinner(...args){
    const [c,p] = args
    if(c === p) return "it's a tie"
    if(Math.abs(c-p) > 1) [c,p] = [p,c]
    return p > c ? "you won" : "you lost"
}

function showResult(c,p,msg){
    result.removeAttribute("hidden")
    game.setAttribute("hidden","")
    result.querySelector(".player-choice > .btn").dataset.item = items[p]
    result.querySelector(".computer-choice > .btn").dataset.item = items[c]
    result.querySelector(".msg > p").innerText = msg
}


btns.forEach(btn=>btn.addEventListener("click",playerSelection))