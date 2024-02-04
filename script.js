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

let selectedCard1;
let selectedCard2;

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
  
            //example <img id="0-0" class="card" src="water..jpg"
            let card = document.createElement('img');
            card.id = i.toString() + '-' + j.toString();
            console.log(cardImage);
            card.src = `assets/${cardImage}.jpg`;
            console.log( card.src)
            card.classList.add('card');
            card.addEventListener('click', selectedCard);
            document.querySelector('#board').append(card);
        }
        board.push(row);
     
    }
    console.log(board);
    setTimeout(hideCards, 1000);
  }

  function hideCards(){
      for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            let card = document.getElementById(r.toString()+'-'+c.toString());
            card.src = '/assets/back.jpg';

        }
      }
  }

  function selectedCard(){
      if(this.src.includes('back')){
        if(!selectedCard1){
            selectedCard1 = this;

            let coords = selectedCard1.id.split('-');
            console.log(coords)
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            selectedCard1.src = `/assets/${board[r][c]}.jpg`;
            console.log(selectedCard1.src);
        } else if (!selectedCard2 && this !== selectedCard1){
            selectedCard2 = this;

            let coords = selectedCard2.id.split('-');
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            selectedCard2.src = `/assets/${board[r][c]}.jpg`;
            console.log(selectedCard2.src);
            setTimeout(update, 1000);
        }
      }
  }

  function update(){
      //verificar - Si las cards NO son iguales, volteelas hacia abajo (back)
      if(selectedCard1.src !== selectedCard2.src){
        selectedCard1.src = '/assets/back.jpg';
        selectedCard2.src = '/assets/back.jpg';
        errors ++;
        document.querySelector('#errors').textContent = errors;
      }
      selectedCard1 = null;
      selectedCard2 = null;
  }