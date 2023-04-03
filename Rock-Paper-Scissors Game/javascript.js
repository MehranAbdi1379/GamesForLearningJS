const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

possibleChoices.forEach(possibleChoice =>
    possibleChoice.addEventListener('click' , (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        GenerateComputerChoice();
        showTheWinner();
    })
)

function GenerateComputerChoice()
{
    let randomNumber = Math.floor(Math.random()*possibleChoices.length);

    switch (randomNumber) {
        case 1:
        computerChoice = 'scissors';
            break;
        case 2: 
        computerChoice = 'paper';
            break;
        case 3:
        omputerChoice = 'rock';
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function showTheWinner()
{
    if(userChoice == 'rock' && computerChoice == 'scissors')
    {
        resultDisplay.innerHTML = 'User Won';
    }
    else if(userChoice == 'rock' && computerChoice == 'paper')
    {
        resultDisplay.innerHTML = 'Computer Won';
    }
    else if(userChoice == 'rock' && computerChoice == 'rock')
    {
        resultDisplay.innerHTML = 'Draw';
    }
    else if(userChoice == 'paper' && computerChoice == 'rock')
    {
        resultDisplay.innerHTML = 'User Won';
    }
    else if(userChoice == 'paper' && computerChoice == 'paper')
    {
        resultDisplay.innerHTML = 'Draw';
    }
    else if(userChoice == 'paper' && computerChoice == 'scissors')
    {
        resultDisplay.innerHTML = 'Computer Won';
    }
    else if(userChoice == 'scissors' && computerChoice == 'paper')
    {
        resultDisplay.innerHTML = 'User Won';
    }
    else if(userChoice == 'scissors' && computerChoice == 'rock')
    {
        resultDisplay.innerHTML = 'Computer Won';
    }
    else if(userChoice == 'scissors' && computerChoice == 'scissors')
    {
        resultDisplay.innerHTML = 'Draw';
    }
}