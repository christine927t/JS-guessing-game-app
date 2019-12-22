/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game;
const qwerty = document.getElementById('qwerty');
const keys = document.getElementsByClassName('key')
console.log(qwerty)
console.log(keys)


document.getElementById('btn__reset').addEventListener('click', function(){
    game = new Game();
    game.startGame();
})

function clickKeys(e){
    if (e.target && e.target.nodeName == 'BUTTON'){
        game.handleInteraction(e.target);
    }
}

function keydown(){
    let keys = document.getElementsByClassName('key');
    for (key of keys) {
        key.addEventListener('keydown', anyKey)
    }
    document.body.addEventListener('keydown', anyKey)
}

function anyKey(evt){
    let target = evt.currentTarget;
    let char = evt.char || evt.charCode || evt.which;
    let e = String.fromCharCode(char).toLowerCase();
    console.log(e);
    clickKeys(e);
}

keydown()

//qwerty.addEventListener('click', clickKeys);

//document.getElementById('qwerty').addEventListener('click', function(e){
//     if (e.target && e.target.nodeName == 'BUTTON'){
//         game.handleInteraction(e.target);
//     }
// })

