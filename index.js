const readline = require('readline-sync');


const inputRange = getTheRange();
const max = getMax(inputRange);
console.log(max);
play(max);

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

 function getMax(inputRange) {
    if(inputRange == 1) return 5;
    else if(inputRange == 2) return 10;
    else if(inputRange == 3) return 50;
    else return 100;
 }
function play(max) {
    let totalGuess = 0;
    const numberGenerated = Math.round(Math.random() * max);
    guess(numberGenerated, totalGuess, max);
}

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