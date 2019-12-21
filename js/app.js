/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;

document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})

document.getElementById('qwerty').addEventListener('click', function(e){
    if (e.target && e.target.nodeName == 'BUTTON'){
        game.handleInteraction(e.target);
    }
})
