var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: '../images/queen-of-hearts.png'
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: '../images/queen-of-diamonds.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: '../images/king-of-hearts.png'
},
{
rank: 'king',
suit: 'hearts',
cardImage: '../images/king-of-diamonds.png'
}
];

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
console.log("User flipped " + cards[0].rank);
console.log("User flipped " + cards[2].rank);

cardsInPlay.push(cards[0].rank);
cardsInPlay.push(cards[2].rank);

console.log(cards[0],[2].cardImage);
console.log(cards[0],[2].suit);

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