// // Card Game

function PlayingCard(value, suit) {
   this.value = value || 'ace'
   this.suit = suit || 'spades'
}
var myCard = new PlayingCard('jack', 'diamonds');
var yourValue = prompt('What value would you like?')
var yourSuit = prompt('What suit is your card?');

// Enter the Value
// Enter the Suit


document.write('Your card is the '+yourValue+' of '+yourSuit+'.');

//END CARD GAME

