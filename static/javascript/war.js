
// main game play function
// game is totally "event driven"
function play() {

if(bothOutOfCards()){
        console.log("both players out of cards its a tie");
        return;                                   }
// if one has run out
if(playerOneOutOfCards()){
    return;
}
if(playerTwoOutOfCards()){
    return;
}

if(war == 1){
if(playerOneOutOfCards()){
    return;
}
if(playerTwoOutOfCards()){
    return;
}
// if there is war we play extra cards
playCardEachPlayer();
playCardEachPlayer(); }
// without a war we play one card
else { playCardEachPlayer(); }

addPlayToDisplay();

if( playerOneHasHighestTopCard() ){
    // add both cards to player one's stack
    givePileToPlayer("playerone");
    war = 0;
                                    }
else if( playerTwoHasHighestTopCard() ){
    // add both cards to back of player two's stack
    givePileToPlayer("playertwo");
    war = 0;
                                       }
else if(playersTopCardsAreEqual()) { console.log("it's war!")
    war = 1;
}

if(playerOneOutOfCards()){
    return;
}
if(playerTwoOutOfCards()){
    return;
}



}




