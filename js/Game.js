/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Creates phrase for use in game
     * @return {array} An Array of phrases that could be used in the game
     */

    createPhrases(){
        let phrases = [
            {phrase: 'could i be wearing anymore clothes'},
            {phrase: 'how you doin'},
            {phrase: 'we were on a break'},
            {phrase: 'i got off the plane'},
            {phrase: 'it tastes like feet'}
        ]
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */

    getRandomPhrase(){
        let randNum = Math.floor(Math.random() * 4)
        return new Phrase(this.phrases[randNum].phrase);
    }

    /**
     * Begins game by selecting a random phrase and displaying
     * it to user
     */

    startGame(){
        //remove all 'li' elements in 'ul'
        const phraseLetters = document.querySelectorAll('ul li');
        if (phraseLetters.length > 0){
            for (let i = 0; i < phraseLetters.length; i ++){
                phraseLetters[i].style.display = 'none';
            }
            // update classes to 'key' && enables all buttons
            const buttons = document.querySelectorAll('button')
            for (let y = 0; y < buttons.length; y ++) {
                buttons[y].className = 'key';
                buttons[y].disabled = false;
            }
            //reset heart images
            const liveHearts = document.getElementsByClassName('tries')
            for (let x = 0; x < liveHearts.length; x ++){
                liveHearts[x].innerHTML = "<img src='images/liveHeart.png' alt='Heart Icon' height='35' width='30'>"
            }
        }
        //hide the overlay div
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(`Active Phrase - phrase: ${this.activePhrase.phrase}`)
    }

    /**
     * Checks for winning move
     * @return {boolean} true if game has been won, false if game wasn't
     */
    
    checkForWin(){
        //Checks if player has revealed all of the letters in the active phrase;
        let hideCheck = document.getElementsByClassName('hide letter');
        let showCheck = document.getElementsByClassName('show letter');
        if (showCheck.length > 0 && hideCheck.length < 1){
            return true;
        } 
        else {
            return false;
        }
    }

    /**
     * Increases the value of the 'missed' property
     * Removes a life from the scoreboard
     * Checks if player has remaining lives and ends game if player is out
    */

    removeLife(){
        if(this.missed < 5){
            const liveHearts = document.getElementsByClassName('tries')
            //converts liveHearts HTML collection to array
            let arrLive = [...liveHearts];
            //sets arrLive index equal to this.missed count
            let firstLive = arrLive[this.missed];
            this.missed += 1;
            let string = firstLive.innerHTML
            let replace = string.replace("liveHeart", "lostHeart");
            //replaces innerHTML of arrLive element at specified index
            firstLive.innerHTML = `${replace}`;
        }    
        else {
            this.gameOver(false);
        } 
    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */

    gameOver(gameWon){
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'flex';
        if (!gameWon){
            overlay.className = 'lose';
            overlay.querySelector('#game-over-message').innerText = "Game over, better luck next time!";
        }
        else {
            overlay.className= 'win';
            overlay.querySelector('#game-over-message').innerText = "You won, great job!";
        }
    }

    /**
     * Handles onscreen keyboard button clicks
     * @param {HTMLButtonElement} button - the clicked button element
     */

    handleInteraction(button){
        button.disabled = true;
        //disable the selected letter's onscreen keyboard button
        let check = game.activePhrase.checkLetter(button.textContent);
        //if letter guess is NOT included in phrase, add 'wrong' CSS class
            //to the letter's keyboard button && call removeLife()
        if (check === false){
            button.classList ='wrong'
            this.removeLife();
        }
        else {
        //if letter gues IS included in phrase, add 'chosen' CSS class
            button.classList ='chosen'
            //call showMatchedLetter on the phrase
            game.activePhrase.showMatchedLetter(button.textContent)
            //if checkForWin returns true, call gameOver(true)
            this.checkForWin()
                if (this.checkForWin()){
                this.gameOver(true);
                }
        }
    }
}