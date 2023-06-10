// card names and values go here
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
   this.document.body.style.display = 'block';
   this.document.body.style.fontFamily = "'Abaddon Light'";
   this.document.body.style.fontWeight = "normal";
   this.document.body.style.color = "rgba(242, 242, 242, 0.98)";
   this.document.body.style.marginBlockStart = '2.1rem';
   this.document.body.style.marginBlockEnd = '2.1rem';
   this.document.body.style.paddingInlineStart = '0.76rem';
   this.document.body.style.paddingInlineEnd = '0.76rem';
   
   // card default image applied here
   cardPicture.src = "/assets/cards/default.png";
   
   // card function goes here
   this.document.addEventListener("keydown", drawRandomCard);
   this.document.addEventListener("click", drawRandomCard);
   
   function drawRandomCard(event) {

      if (event.code === "Enter" || event.type === "click") {

         let randomCard = Math.floor(Math.random() * totalCards.length);
         let cardName = totalCards[randomCard][0];
         let cardValue = totalCards[randomCard][1];
         console.log("Card that you have drawn:", cardName);
         console.log("Value of the drawn card:", cardValue);

         // code to change card image here
         cardPicture.src = "/assets/cards/" + cardName + ".png";

         // display and formatting process for score goes here
         score += cardValue;
         if (score >= 100) {
            document.getElementById("score").textContent = score;
         } else if (score >= 10) {
            document.getElementById("score").textContent = "0" + score.toString();
         } else {
            document.getElementById("score").textContent = "00" + score.toString();
         }

         totalCards.splice(randomCard, 1);
         console.log(totalCards);

         drawCount++;
         if (drawCount % 3 === 0) {

            let clearScore = zeroScore.toString().padStart(3, "0");

            console.log("Your limit has been reached.");
            console.log("Your final score:", score);

            document.getElementById("score").textContent = clearScore;

            if (score > highscore) {

               highscore = score;
               document.getElementById("highscore").textContent = " " + score;

            }

            // reset score here
            score = zeroScore;

         }

      }

   }

});