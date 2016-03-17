// // Roll the Dice and get a Number


function GamblingDie() {
   this.dieValue = [1, 2, 3, 4, 5, 6];
   this.roll = function() {
       var randomRoll = Math.ceil(Math.random()* this.dieValue.length);
       var myRoll = prompt('Type "roll" to roll the dice'); 
       if(myRoll === 'roll') {
       	document.write(randomRoll+ ' is the the dice Number!');
       } else {
       	document.write('You need to type "roll"');
       }

       

       
       return randomRoll;
   }
}
var myDie = new GamblingDie();
myDie.roll();

// END ROLL DICE GAME
