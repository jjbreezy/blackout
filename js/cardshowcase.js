const deckURL = "/decks/betadeck.json";
async function getDeck() {
    const response = await fetch(deckURL);
    const deck = await response.json();
    //console.log(deck);
    // for (card in deck) {
    //     console.log(card);
    // }
    return deck
}

//this is me trying to make currentdeck an array containing the array of cards in deck
var currentdeck = getDeck();
//this returns a pending promise, which contains the array of the contents of Deck
console.log(currentdeck);

//I want the promise result from the return of getDeck() as an array that I can work with. I've read 
//articles on async and fulfilling and I don't fucking get it at all. This is a ridiculous system. 
// the promise state even says fulfilled in the console... what else can I do...

function populateShowcase() {
    //this for loop here is intended to put the contents of individual objects inside the currentdeck array 
    //into the cards that will be created by a PHP function.
    for (card in currentdeck) {
        //goal here is to make the cardcontents part of the card div into the contents of a card from the array
        //returned by getDeck
        var contents = Document.getElementbyId('madeup-php-div-id'); 
        contents.innerText = card.cardcontents;

        var title = Document.getElementbyId('madeup-php-div-id');
        contents.innerText = card.title;
    }
    }