// create a deck
var deck = [];
var i;
// create two hands
var hand_one = []
var hand_two = []
var index = 0;
var ind = 0;
var card = 0;
var cards_one = [];
var cards_two = [];
var cards = ["two" , "three", "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten ", "jack", "queen" , "king" , "ace" ];
// spades (lowest), clubs, diamonds and hearts (highest)
var suits = ["spades" , "clubs" , "diamonds", "hearts" ];

function getcard(c){
    cardsize = Math.floor(c/4);
    cardsuit = c%4;
    return cards[cardsize] + " of " + suits[cardsuit];
}

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

                          }

console.log(hand_one);
console.log(hand_two);
// end of deal function
}
function play() {
// check for game over
// if both players run out
if( hand_one.length === 0 & hand_two.length == 0){
        console.log("both players out of cards its a tie");
        return;                                   }
// if one has run out
if( hand_one.length === 0 || hand_two.length === 0 ){
        if (hand_one.length === 0){ console.log("player two one");
        return;                                     }
        else     {
          console.log("player one one");
          return; }
}
// get card from top of decks
cards_one.unshift(hand_one.pop());
cards_two.unshift(hand_two.pop());
console.log(cards_one[0]);
console.log(cards_two[0]);
console.log(getcard(cards_one[0]));
console.log(getcard(cards_two[0]));
console.log(Math.floor(cards_one[0]/4));
console.log(Math.floor(cards_two[0]/4));
// the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.
// if player one has the higher card
if(  Math.floor(cards_one[0]/4) > Math.floor(cards_two[0]/4) ){
    // add both cards to player one's stack
    console.log("playerone wins hand");
    hand_one.unshift(cards_one.shift());
    hand_one.unshift(cards_two.shift());
    console.log(hand_one);
    console.log(hand_two);                                     }
else if( Math.floor(cards_one[0]/4) < Math.floor(cards_two[0]/4) ){
    // add both cards to back of player two's stack
    console.log("playertwo wins hand");
    hand_two.unshift(cards_one.shift());
    hand_two.unshift(cards_two.shift());
    console.log(hand_one);
    console.log(hand_two);                                        }
else {
    // check they have enough cards here
    var warfinished = 0;
    // while in war
    while(warfinished != 1){
    // it's war : add 2 cards : 2 cards unshift 2 cards into each cards
    cards_one.unshift(hand_one.pop());
    cards_two.unshift(hand_two.pop());
    cards_one.unshift(hand_one.pop());
    cards_two.unshift(hand_two.pop());
    // compare last card
    // if card equal continue
    if( Math.floor(cards_one[0]/4) == Math.floor(cards_two[0]/4) ) {
     console.log("war continues");                                 }
    // else add cards to hands and set warfinished to 1
    else {
        if(  Math.floor(cards_one[0]/4) > Math.floor(cards_two[0]/4) ){
    // add both cards to player one's stack
        console.log("playerone wins hand");
        hand_one.unshift(cards_one.shift());
        hand_one.unshift(cards_two.shift());
        hand_one.unshift(cards_one.shift());
        hand_one.unshift(cards_two.shift());
        hand_one.unshift(cards_one.shift());
        hand_one.unshift(cards_two.shift());
        console.log(hand_one);
        console.log(hand_two);                                         }
        else{
    // add both cards to back of player two's stack
        console.log("playertwo wins hand");
        hand_two.unshift(cards_one.shift());
        hand_two.unshift(cards_two.shift());
        hand_one.unshift(cards_one.shift());
        hand_one.unshift(cards_two.shift());
        hand_one.unshift(cards_one.shift());
        hand_one.unshift(cards_two.shift());
        console.log(hand_one);
        console.log(hand_two);
        }
        warfinished = 1;
    }

}
}
}
