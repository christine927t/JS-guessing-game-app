/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();



game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

document.getElementById('btn__reset').addEventListener('click', function(){


})

// document.querySelectorAll('.keyrow button').addEventListener('click', function(){



// })