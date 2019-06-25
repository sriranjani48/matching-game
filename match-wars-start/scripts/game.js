// Match game class
// controls the game mechanics

class Game {
  constructor() {
    this._setUpElements();
    this._setUpCards();
    this._setUpGameStas();
    this.clickCounter = 1;
  }
  // use "_" to tell developers that this is a private method

  //   stores all the game stats
  _setUpGameStas() {}

  //Select all the HTML elements
  _setUpElements() {
    //create an object to store all our html elements
    this.el = {};
    //grab the html element
    this.el.html = $("html");
    this.el.body = $("body");
    this.el.cards = $(".card");
  }

  //place the cards on the game  GameBoard
  _setUpCards() {
    this.cards = cards;
    //   Array for storing our open cards
    this.openCards = [];
  }

  //   starts the game and calls the place cards game
  init() {
    this._placeCards(this.cards);
  }

  //Places the star wars cards on the game boards
  _placeCards(cards) {
    cards = this._shuffleCards(cards);
    console.log(cards);
    // Loop through each card element using jQuery  each() method
    // and place a card image inside each div
  }

  //shuffles an array and return the shuffled array
  _shuffleCards() {
    // swap function
    let i, j, k;
    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      k = cards[i];
      cards[i] = cards[j];
      cards[j] = k;
    }
    return cards;
  }

  //Click cards
  //- open the first card
  //- ignore clicks on the open cards
  //- opens a secod card
  //- compares the two open cards
  //- closes the card if no match
  //- leaves them open if they are a match
  //keeps track of the number of clicks per turn
  clickCards(el) {}

  //   Test cards are matched or not
  _isMatched(card1, card2) {}

  //   displays  a winning message
  _endGame() {}
}

//creating object
const game = new Game();
