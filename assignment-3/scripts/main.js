// ROLL THE DICE 1000 TIMES GAME

var dice1 = {}; 
for (var i = 0; i < 1000; i++) {
    var dieValue = [1, 2, 3, 4, 5, 6];
    var randomRoll = Math.ceil(Math.random()* this.dieValue.length);

    if(randomRoll in dice1) {
        dice1[randomRoll]++;
    }
    else {
        dice1[randomRoll] = 1;
    }
   
}

console.log(dice1);




// END ROLL THE DICE 1000 TIMES GAME
