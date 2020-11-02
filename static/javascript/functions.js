
// return the card name and suit given and integer from 0 to 51.
function getcard(c){
    cardsize = Math.floor(c/4);
    cardsuit = c%4;
    return cards[cardsize] + " of " + suits[cardsuit];
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// print out state of game to browser div
function addPlayToDisplay(){

var div = document.getElementById("content");
div.innerHTML += "<br>";
div.innerHTML += " Player One Card(s) played: ";
div.innerHTML += cards_one.toString();
div.innerHTML += "<br>";
div.innerHTML += " Player Two Card(s) played: ";
div.innerHTML += cards_two.toString();
div.innerHTML += "<br>";
div.innerHTML += " Player One Top Card: ";
div.innerHTML += getcard(cards_one[0]);
div.innerHTML += "<br>";
div.innerHTML += " Player Two Top Card: ";
div.innerHTML += getcard(cards_two[0]);
div.innerHTML += "<br>";
div.innerHTML += "<br>";
div.innerHTML += " Player One Score before play: ";
div.innerHTML += "<br>";
div.innerHTML += hand_one.length;
div.innerHTML += "<br>";
div.innerHTML += " Player Two Score before play: ";
div.innerHTML += "<br>";
div.innerHTML += hand_two.length;



}

// each player takes a card from the top of her/his hand
function playCardEachPlayer(){
cards_one.unshift(hand_one.pop());
cards_two.unshift(hand_two.pop());


console.log("top of pile one: " + cards_one[0]);
console.log("top of pile two: " + cards_two[0]);
console.log(getcard(cards_one[0]));
console.log(getcard(cards_two[0]));
console.log("top of pile one value: " + Math.floor(cards_one[0]/4));
console.log("top of pile two value: " + Math.floor(cards_two[0]/4));
}

// boolean function check to see if playerone has highest on top of pile
function playerOneHasHighestTopCard(){
   if(Math.floor(cards_one[0]/4) > Math.floor(cards_two[0]/4)){
       var div = document.getElementById("content");
       div.innerHTML += "<br>";
       div.innerHTML += " HAND ONE WINS ROUND";
       div.innerHTML += "<br>";
       return true;


   }
   else{ return false; }
}

// boolean function check to see if playertwo has highest on top of pile
function playerTwoHasHighestTopCard(){
   if(Math.floor(cards_one[0]/4) < Math.floor(cards_two[0]/4)){
       var div = document.getElementById("content");
       div.innerHTML += "<br>";
       div.innerHTML += " HAND TWO WINS ROUND";
       div.innerHTML += "<br>";
       return true;
   }
   else{ return false; }
}

// boolean that checks that both players have equal value at top of pile
function playersTopCardsAreEqual(){
   if(Math.floor(cards_one[0]/4) == Math.floor(cards_two[0]/4)){
       var div = document.getElementById("content");
       div.innerHTML += " IT'S WAR!!!! ";
       div.innerHTML += "<br>";
       return true;
   }
   else{ return false; }
}

// boolean function that checks if both cards have run out of cards
function bothOutOfCards(){
if( hand_one.length === 0 & hand_two.length == 0){
        console.log("both players out of cards its a tie");
       var div = document.getElementById("content");
       div.innerHTML += " Both Players ran out of cards it's a tie!! ";
       div.innerHTML += "<br>";
        return true;                                   }
else{ return false; }
}

// boolean function that checks whether player one has run out of cards
function playerOneOutOfCards(){
    if( hand_one.length === 0) { console.log("player two one");
       winningScore = hand_two.length;
       console.log("winning score" + winningScore)
       document.getElementById("saveform").style.visibility = "visible";
       document.getElementById("winner").value = "player two";
       document.getElementById("score").value = winningScore;
       console.log("winner: " + winner)
       var div = document.getElementById("content");
       div.innerHTML += "Player Two Wins Game";
       div.innerHTML += "<br>";
       document.getElementById("save").disabled = false;
        return true;}
    else { return false; }
}
// boolean function that checks whether player two has run out of cards
function playerTwoOutOfCards(){
    if( hand_two.length === 0) { console.log("player one one");
       winningScore = hand_one.length;
       console.log("winning score" + winningScore)
       winner = "playerone";
       document.getElementById("saveform").style.visibility = "visible";
       document.getElementById("winner").value = "player one";
       document.getElementById("score").value = winningScore;
       console.log("winner: " + winner)
       var div = document.getElementById("content");
       div.innerHTML += "Player One Wins Game";
       div.innerHTML += "<br>";
       document.getElementById("save").disabled = false;
       return true;}
    else { return false; }
}

// hands the pile of cards in each players hands to the back of the winning players hand
function givePileToPlayer(player){
    if (player == "playerone"){
        while(cards_one.length > 0) {
        hand_one.unshift(cards_one.shift());
    }
        while(cards_two.length > 0) {
        hand_one.unshift(cards_two.shift());
    }

        console.log("playerone wins hand");
        var div = document.getElementById("content");
        div.innerHTML += "<br>";
        div.innerHTML += " HAND ONE: ";
        div.innerHTML += "<br>";
        div.innerHTML += hand_one.toString();
        div.innerHTML += "<br>";
        div.innerHTML += " HAND TWO: ";
        div.innerHTML += "<br>";
        div.innerHTML += hand_two.toString();
        div.innerHTML += "<br>";

        console.log(hand_one);
        console.log(hand_two);
        cards_one = [];
        cards_two = [];
    }
    if (player == "playertwo"){
        while(cards_one.length > 0) {
        hand_two.unshift(cards_one.shift());
    }
        while(cards_two.length > 0) {
        hand_two.unshift(cards_two.shift());
    }
        cards_one = [];
        cards_two = [];
        console.log("playertwo wins hand");
        var div = document.getElementById("content");
        div.innerHTML += "<br>";
        div.innerHTML += " HAND ONE: ";
        div.innerHTML += "<br>";
        div.innerHTML += hand_one.toString();
        div.innerHTML += "<br>";
        div.innerHTML += " HAND TWO: ";
        div.innerHTML += "<br>";
        div.innerHTML += hand_two.toString();
        div.innerHTML += "<br>";

        console.log(hand_one);
        console.log(hand_two);
    }

}

// function which randomly creates 2 "hands" from 52 numbers 0 to 51

function deal()              {
for (i = 0; i < 52; i++) {
  deck.push(i);
}
// deal
for (j = 0; j < 26 ; j++){
// select random card
index = Math.floor(Math.random() * deck.length)
// get card value
card = deck[index];
// add card to player hand
hand_one.push(card);
// remove card from deck
ind = deck.indexOf(card);
if (ind > -1) {
  deck.splice(ind, 1);
}
// select random card
index = Math.floor(Math.random() * deck.length)
// get card value
card = deck[index];
// add card to player hand
hand_two.push(card);
//remove card from deck
ind = deck.indexOf(card);
if (ind > -1) {
  deck.splice(ind, 1);
}

shuffle(hand_one);
shuffle(hand_two);

                          }

// print the deal to browser
var div = document.getElementById("content");
div.innerHTML = "";
div.innerHTML += "HAND ONE";
div.innerHTML += "<br>";
div.innerHTML += hand_one.toString();
div.innerHTML += "<br>";
div.innerHTML += "HAND TWO";
div.innerHTML += "<br>";
div.innerHTML += hand_two.toString();
document.getElementById("deal").disabled = true;

console.log(hand_one);
console.log(hand_two);
// end of deal function
}
