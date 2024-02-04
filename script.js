let errors = 0;
cardsList = [
    "darkness",
    "double",
    "fairy",
    "fighting",
    "fire",
    "grass",
    "lightning",
    "metal",
    "psychic",
    "water"
];

let setCard;
let board = [];
let rows = 4;
let cols = 5;

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards(){
    setCard = cardsList.concat(cardsList);//repetira cada carta
    console.log(setCard);
    //shuffle = barajar 
    for(let i = 0; i < setCard.length; i++){
        let j = Math.floor(Math.random() * setCard.length);
        //swap = intercambio de variable, reasignamos un nnuevo valor para lograr las cartas sean aleatorias
        let temp = setCard[i];
        setCard[i] = setCard[j];
        setCard[j] = temp;
    }
    console.log(setCard)
}

function startGame() {
    //arrage de vboard 4x5
    for(let i = 0; i < rows; i++){
        let row = [];
        for(let j = 0; j < cols; j++){
            let cardImage = setCard.pop();
            row.push(cardImage);
            //let board = document.querySelector('#board');
            let card = document.createElement('img');
            card.id = i.toString() + '-' + j.toString();

        }
    }

  }