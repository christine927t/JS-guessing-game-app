/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
// const game = new Game();
// game.startGame();


let game;

document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})


// document.querySelectorAll('.keyrow button').addEventListener('click', function(){



// })