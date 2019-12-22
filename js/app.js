/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const qwerty = document.getElementById('qwerty');


document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})
//click event listener
function clickKeys(e){
    if (e.target && e.target.nodeName == 'BUTTON'){
        game.handleInteraction(e.target);
    }
}
qwerty.addEventListener('click', clickKeys);

//keydown event listener
function keydown(){
    let keys = document.getElementsByClassName('key');
    for (key of keys) {
        key.addEventListener('keydown', pressKey)
    }
    document.body.addEventListener('keydown', pressKey)
}

function pressKey(evt){
    let target = evt.currentTarget;
    let char = evt.char || evt.charCode || evt.which;
    let e = String.fromCharCode(char).toLowerCase();
    console.log(e);
    clickKeys(e);
}

keydown()

//original click event handler
//document.getElementById('qwerty').addEventListener('click', function(e){
//     if (e.target && e.target.nodeName == 'BUTTON'){
//         game.handleInteraction(e.target);
//     }
// })

