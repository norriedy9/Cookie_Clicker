let score = 0
let clickValue = 1;

const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const resetButton = document.getElementById("reset")
const updateButton = document.getElementById("upgrade")


const scoreText = document.getElementById("score")
const clickText = document.getElementById("click-value")



function updateClicktext()
{
    clickText.innerText = "Score per click: "+clickValue
}

function upgradeClick()
{
    if(score >= 10)
    {
        clickValue += 10
        score -= 10

    }
    updateClickText()



}


function add(){
    score += clickValue
    scoreText.style.color = 'green'
    scoreText.innerText = "Score: " + score
    updateText()
}

function minus(){
    score -= clickValue
    scoreText.style.color = 'red'
    scoreText.innerText = "Score: " + score
    updateText()
}

function reset(){
    score = 0
    scoreText.style.color = 'black'
    scoreText.innerText = "Score: " + score
    updateText()
}

function updateText()
{
    if(score > 0)
    {
        scoreText.style.color = 'green'
    }
    if(score < 0)
    {
        scoreText.style.color = 'red'
    }
    if(score === 0)
    {
        scoreText.style.color = 'black'
    }

} 
/*
function options(choice)
{
    switch(choice) //switch statement
    {
        case 'add':
            score+=clickValue
            break
        case 'minus':
            score-=clickValue
            break
        case 'reset':
            score = 0

            break
    }
    scoreText.innerText = "Score: " + score
    updateText()
}
*/


//addButton.addEventListener('click', () => options('add'))
addButton.addEventListener('click', add) //don't add parenthesis if there's no parameters
minusButton.addEventListener('click', minus)
resetButton.addEventListener('click', reset)
updateButton.addEventListener('click', upgradeClick)