var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

function checkForMatch() {
	// Use the setAttribute method to update the src 
	//attribute to the image of the card that was just clicked 
	//this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  } else {
      console.log("Sorry, try again.");
}
}


function flipCard() {

var cardId = this.getAttribute('data-id')

  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);

  if (cardsInPlay.length === 2) {

  if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert("You found a match!") 
  }
	else if (cardsInPlay[0] !== cardsInPlay[1]) {
   	alert("Sorry, try again!")
   }
  	return flipCard;
}



 console.log("You Flipped " + cards[cardId].rank)
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)

 checkForMatch();
 /*cards[cardId] references the entire  object in the cards array
 cards[cardId].ranks checks within the object.rank*/
}

function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);

  }
}
function pageReset() {
  document.getElementById('reset-button');
}



createBoard();

pageReset();





/*
console.log("User flipped " + cards[0].rank);
console.log(cards[0].cardImage);
console.log(cards[0].suit);

console.log("User flipped " + cards[2].rank);
console.log(cards[2].cardImage);
console.log(cards[2].suit);

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/

/*
console.log("User flipped " + cards[0].rank);
console.log(cards[0].cardImage);
console.log(cards[0].suit);

console.log("User flipped " + cards[2].rank);
console.log(cards[2].cardImage);
console.log(cards[2].suit);
*/


//flipCard(0);
//flipCard(2);