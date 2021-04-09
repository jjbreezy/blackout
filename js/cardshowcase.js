const deckURL = "/decks/betadeck.json"
async function getDeck() {
    const response = await fetch(deckURL);
    const deck = await response.json();
    console.log(deck);
    // for (card in deck) {
    //     console.log(card);
    // }
    
}

getDeck();



