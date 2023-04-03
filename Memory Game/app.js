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
const card2 = new Card('cheesburger','images/cheeseburger.png');
const card3 = new Card('hotdog' , 'images/hotdog.png');
const card4 = new Card('ice-cream','images/ice-cream.png');
const card5 = new Card('milkshake','images/milkshake.png');
const card6 = new Card('pizza','images/pizza.png');

let randomizedArray = [];

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

for (let i = 12; i > 0; i--) {
    let randomNumber = Math.floor(Math.random()*i);
    randomizedArray.push(cardArray[randomNumber]);
    cardArray.splice(randomNumber,1);
}

randomizedArray.forEach(element => {
    console.log(element.name);
    console.log(element.img);
});


