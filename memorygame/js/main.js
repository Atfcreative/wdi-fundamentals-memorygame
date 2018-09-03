var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var checkForMath = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	          alert("You found a match!");
	          
	    } else {
	          alert("Sorry, try again");
	}
}

var flipCard = function (cardId) {
	checkForMath();
}
console.log("User flipped " + cards[0])
console.log("User flipped " + cards[2])

cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[2]);

flipCard(0);
flipCard(2);



/*
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/