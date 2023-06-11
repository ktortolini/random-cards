// card names and values go here
const fixedCards = [
   ["aceOfHearts", 1], ["aceOfDiamonds", 1], ["aceOfClubs", 1], ["aceOfSpades", 1], ["twoOfHearts", 2], ["twoOfDiamonds", 2], ["twoOfClubs", 2],["twoOfSpades", 2], ["threeOfHearts", 3], ["threeOfDiamonds", 3], ["threeOfClubs", 3], ["threeOfSpades", 3], ["fourOfHearts", 4],["fourOfDiamonds", 4], ["fourOfClubs", 4], ["fourOfSpades", 4], 
   ["fiveOfHearts", 5], ["fiveOfDiamonds", 5], ["fiveOfClubs", 5], ["fiveOfSpades", 5], ["sixOfHearts", 6], ["sixOfDiamonds", 6], ["sixOfClubs", 6], ["sixOfSpades", 6], ["sevenOfHearts", 7], ["sevenOfDiamonds", 7], ["sevenOfClubs", 7], ["sevenOfSpades", 7], 
   ["eightOfHearts", 8], ["eightOfDiamonds", 8], ["eightOfClubs", 8], ["eightOfSpades", 8], ["nineOfHearts", 9], ["nineOfDiamonds", 9], ["nineOfClubs", 9], ["nineOfSpades", 9], ["tenOfHearts", 10], ["tenOfDiamonds", 10], ["tenOfClubs", 10], ["tenOfSpades", 10], ["jackOfHearts", 11], ["jackOfDiamonds", 11], ["jackOfClubs", 11], ["jackOfSpades", 11], ["queenOfHearts", 12], ["queenOfDiamonds", 12], ["queenOfClubs", 12], ["queenOfSpades", 12], ["kingOfHearts", 13], ["kingOfDiamonds", 13], ["kingOfClubs", 13], ["kingOfSpades", 13]
]

var totalCards = [
   ["aceOfHearts", 1], ["aceOfDiamonds", 1], ["aceOfClubs", 1], ["aceOfSpades", 1], ["twoOfHearts", 2], ["twoOfDiamonds", 2], ["twoOfClubs", 2],["twoOfSpades", 2], ["threeOfHearts", 3], ["threeOfDiamonds", 3], ["threeOfClubs", 3], ["threeOfSpades", 3], ["fourOfHearts", 4],["fourOfDiamonds", 4], ["fourOfClubs", 4], ["fourOfSpades", 4], 
   ["fiveOfHearts", 5], ["fiveOfDiamonds", 5], ["fiveOfClubs", 5], ["fiveOfSpades", 5], ["sixOfHearts", 6], ["sixOfDiamonds", 6], ["sixOfClubs", 6], ["sixOfSpades", 6], ["sevenOfHearts", 7], ["sevenOfDiamonds", 7], ["sevenOfClubs", 7], ["sevenOfSpades", 7], 
   ["eightOfHearts", 8], ["eightOfDiamonds", 8], ["eightOfClubs", 8], ["eightOfSpades", 8], ["nineOfHearts", 9], ["nineOfDiamonds", 9], ["nineOfClubs", 9], ["nineOfSpades", 9], ["tenOfHearts", 10], ["tenOfDiamonds", 10], ["tenOfClubs", 10], ["tenOfSpades", 10], ["jackOfHearts", 11], ["jackOfDiamonds", 11], ["jackOfClubs", 11], ["jackOfSpades", 11], ["queenOfHearts", 12], ["queenOfDiamonds", 12], ["queenOfClubs", 12], ["queenOfSpades", 12], ["kingOfHearts", 13], ["kingOfDiamonds", 13], ["kingOfClubs", 13], ["kingOfSpades", 13]
];

// variable for the number of draws goes here
var drawCount = 0;

// variables for the score go here
const zeroScore = 0;
var score = 0;
var highscore = 0;

// variable for the card image goes here
var cardPicture = document.getElementById("card");

// important: if it has to load it has to go here
window.addEventListener("load", function() {

   // body styles go here
   document.body.style.display = 'block';
   document.body.style.fontFamily = "'Abaddon Light'";
   document.body.style.fontWeight = "normal";
   document.body.style.color = "rgba(242, 242, 242, 0.98)";
   document.body.style.marginBlockStart = '2.1rem';
   document.body.style.marginBlockEnd = '2.1rem';
   document.body.style.paddingInlineStart = '0.76rem';
   document.body.style.paddingInlineEnd = '0.76rem';
   
   // event listeners go here
   document.addEventListener("keydown", drawRandomCard);
   document.addEventListener("click", drawRandomCard);
   
   // card function goes here
   function drawRandomCard(event) {

      if (event.code === "Enter" || event.type === "click") {

         // expression for the randomization is here
         let randomCard = Math.floor(Math.random() * totalCards.length);

         let cardName = totalCards[randomCard][0];
         let cardValue = totalCards[randomCard][1];
         console.log("Card that you have drawn:", cardName);
         console.log("Value of the drawn card:", cardValue);

         // code to change card image here
         cardPicture.src = "./assets/cards/" + cardName + ".png";

         // double points rule goes here
         if (cardName.includes("Hearts")) {

            cardValue *= 2;

         }

         // add the value of card to score here
         score += cardValue;

         // formatting the display of score here
         let formattedScore = score.toString().padStart(3, "0");
         document.getElementById("score").textContent = formattedScore;

         totalCards.splice(randomCard, 1);
         console.log(totalCards);

         // increase the draw count here
         drawCount++;

         // checking for three draws here
         if (drawCount % 3 === 0) {
            
            // timer for score clearing goes here
            setTimeout ( function() {

               let clearScore = zeroScore.toString().padStart(3, "0");

               console.log("Your limit has been reached.");
               console.log("Your final score:", score);

               document.getElementById("score").textContent = clearScore;

            }, 
            
            1000);

            // statement for high score assignment goes here
            if (score > highscore) {

               highscore = score;
               let formattedHighscore = highscore.toString().padStart(3, "0");
               document.getElementById("highscore").textContent = " " + formattedHighscore;

            }

            // statement for resetting the deck goes here
            if (totalCards.length <= 1) {
               totalCards = fixedCards.slice();
            }

            // reset score here
            score = zeroScore;

         }

      }

   }

});