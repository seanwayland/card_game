// create a deck
var deck = []; // array for all 52 cards as integers
var i;
var war = 0; // boolean for whether game is in war
// create two hands
var hand_one = [] // hand for player one
var hand_two = [] // hand for player two
var index = 0;
var ind = 0;
var card = 0;
var cards_one = []; // cards played by player one
var cards_two = []; // cards played by player two
var playerOneScore = 0;
var playerTwoScore = 0;
var winner = "";
var winningScore = 0;
var gamenumber = 0;
var cards = ["two" , "three", "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten ", "jack", "queen" , "king" , "ace" ];
// spades (lowest), clubs, diamonds and hearts (highest)
var suits = ["spades" , "clubs" , "diamonds", "hearts" ];

