/**
 * Command Line Interface application.
 * Number Guessing Game.
 */

 // library that supports user input
const readline = require('readline-sync');

//get the user input and find the maximum number from the range
const inputRange = getTheRange();
const max = getMax(inputRange);

play(max);

//lets the user to select the range and returns the selected range
 function getTheRange() {
     console.log(`
     1. Range 0 to 5
     2. Range 0 to 10
     3. Range 0 to 50
     4. Range 0 to 100
     `);

     const range = readline.question("\nSelect the Range (1 to 4): ");
     if(range <= 0 || range > 4) {
         console.log("\nPlease enter the valid range..!");
         getTheRange();
     }
     return range;
 }

 //extrracts the maximum nimber that can be generated from the range selected by the user
 function getMax(inputRange) {
    if(inputRange == 1) return 5;
    else if(inputRange == 2) return 10;
    else if(inputRange == 3) return 50;
    else return 100;
 }

 //Generates the random number between 0.0 to 1.0 and converts it to a number that ranges between 0 to max
function play(max) {
    let totalGuess = 0;
    const numberGenerated = Math.round(Math.random() * max);
    guess(numberGenerated, totalGuess, max);
}

/**
 * main game code..
 * gets the user input and compares it.
 * if the user guess is wrong the function will call itself(Recurrssion).
 * if the guess is correct program ends
 */
function guess(numberGenerated, totalGuess, max) {
    const numberGuessed = readline.question(`Guess the number: `);
    if(numberGuessed < 0 || numberGuessed > max) {
        console.log(`\nplease guess the number between 0 and ${max}`);
        guess(numberGenerated, totalGuess, max);
    }
    if(numberGenerated == numberGuessed) {
        totalGuess++;
        console.log(`
        Booyah....! You guessed correctly..
        Number generated is : ${numberGenerated}
        Your guess is: ${numberGuessed}
        chances you took : ${totalGuess}
        `);
        process.exit();
    } else {
        console.log(`Oops..! Your guess is wrong..!\n`);
        totalGuess++;
        guess(numberGenerated, totalGuess, max);
    }
}