const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score')

let result = 0;

function randowSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole');
}

squares.forEach(square => {
    square.addEventListener('mousedown' , ()=>{
        if(square.classList.contains('mole') )
        {
            result++;
            score.innerHTML = result;
            square.classList.remove('mole')
        }
    })
})

let timerId = null;

function moveMole()
{
    timerId = setInterval(randowSquare , 300)
}

moveMole();

let counter = 60;
let countDownTimerId = setInterval(countDown, 1000)

function countDown()
{
    if(counter < 1)
    {
        clearInterval(timerId);
        clearInterval(countDownTimerId)
        alert('Game is over. Your Score: ' + result);
        location.reload();
    }
    else{
        counter--;
        timeLeft.innerHTML = counter;
    }
}