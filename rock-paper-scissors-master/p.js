const btns = document.querySelectorAll("button")
const score = document.querySelector('.score > span:last-child')

function getChosenItem(){
    const item = this.dataset.item
}

btns.forEach(btn=>btn.addEventListener("click",getChosenItem))