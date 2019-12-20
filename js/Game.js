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
        const liveHearts = document.getElementsByClassName('tries')
        //changes li.tries to array
        let arrLive = [...liveHearts];
        let firstLive;

        function findLiveHearts(live){
            return live.innerHTML = "<img src='images/liveHeart.png' alt='Heart Icon' height='35' width='30'>";
            console.log(live)
        }
        firstLive = arrLive.find(findLiveHearts)
        console.log(firstLive)
        let string = firstLive.innerHTML
        let replace = string.replace("liveHeart", "lostHeart");
        console.log(replace)
        string = replace;    
        console.log(string); 

        // if (this.activePhrase.checkLetter() === false){
        //     if(this.missed <= 5){
        //         for (let i = 0; i < liveHearts.length; i++){
        //             liveHearts[i].innerHTML = "<img src='images/lostHeart.png' alt='Heart Icon' height='35' width='30'>"
        //             console.log(liveHearts)
        //             this.missed += 1;
        //             console.log(this.missed)
        //         }
        //     }
        //     else {
        //         this.gameOver();
        //     }
        // }

    }

    /**
     * Displays game over message
     * @param {boolean} gameWon - whether or not the user won the game
     */

    gameOver(gameWon){


    }


    handleInteraction(){

    }


}