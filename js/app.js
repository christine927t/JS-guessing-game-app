/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const game = new Game();
// game.startGame();

document.getElementById('btn__reset').addEventListener('click', function(){


})

let game;

document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})

console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// document.querySelectorAll('.keyrow button').addEventListener('click', function(){



// })