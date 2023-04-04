class Card {
    constructor(name,img)
    {
        this.name = name;
        this.img = img;
    }
    name;
    img;
}

const card1 = new Card('fries','images/fries.png');
const card2 = new Card('cheeseburger','images/cheeseburger.png');
const card3 = new Card('hotdog' , 'images/hotdog.png');
const card4 = new Card('ice-cream','images/ice-cream.png');
const card5 = new Card('milkshake','images/milkshake.png');
const card6 = new Card('pizza','images/pizza.png');

const cardArray = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.getElementById('grid');

const startTheGameButton = document.getElementById('startTheGame');
startTheGameButton.addEventListener('click' ,(e) => {
    startTheGame();
});

let Cards = [];

function startTheGame()
{
    startTheGameButton.remove();
    for (let i = 0; i < cardArray.length; i++) {
        let newElement = document.createElement('button');
        newElement.id = cardArray[i].name;
        newElement.style.backgroundImage = "url(" + cardArray[i].img + ")";
        newElement.style.height = "10vw"
        newElement.style.width = "10vw"
        newElement.className= 'cards'
        Cards.push(newElement);
        grid.appendChild(newElement);
    }

    let timeLeft = 5;
    let timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
    clearTimeout(timerId);
    hideCards();
    } else {
    timeLeft--;
    } 
}
}

let score = document.getElementById('score');
score.innerHTML= 0;

let turnedElementCount = 0;
    let turnedElement;



function hideCards()
{
    Cards.forEach(element => {
        element.style.backgroundImage = 'url("Images/blank.png")'
    });

    Cards.forEach(element => {
        element.addEventListener('click' , (e) => {
            if(turnedElementCount == 0 && element.style.backgroundImage !== 'url("Images/white.png")')
            {
                turnedElementCount++;
                element.style.backgroundImage = "url('Images/" + element.id + ".png')";
                turnedElement = element;
                
            }
            else if(turnedElementCount == 1 && turnedElement != element && 
                element.style.backgroundImage !== 'url("Images/white.png")')
            {
                if(turnedElement.id == element.id)
                {
                    turnedElement.style.backgroundImage = "url('Images/white.png')";
                    element.style.backgroundImage = "url('Images/white.png')";
                    turnedElementCount--;
                    score.innerHTML++;

                    if(score.innerHTML == 6)
                    {
                        window.location.reload();
                    }
                }
                else{
                    turnedElementCount++;
                    element.style.backgroundImage = "url('Images/" + element.id + ".png')";
                    setTimeout(showTwoPicsForASecond , 1000)
                    
                    function showTwoPicsForASecond()
                    {
                         turnedElement.style.backgroundImage = 'url("Images/blank.png")';
                         element.style.backgroundImage = 'url("Images/blank.png")';
                         turnedElementCount = 0;
                    }
                }
            }
        })
    });
}

