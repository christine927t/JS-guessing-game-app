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
            {phrase: 'You win some you lose some'},
            {phrase: 'how you doin'},
            {phrase: 'phrase 3'},
            {phrase: 'phrase 4'},
            {phrase: 'phrase 5'}
        ]
        return phrases;
    }

    /**
     * Selects random phrase from phrases property
     * @return {object} Phrase object chosen to be used
     */

    getRandomPhrase(){
        let randNum = Math.floor(Math.random() * 4)
        return this.phrases[randNum];
    }

    /**
     * Begins game by selecting a random phrase and displaying
     * it to user
     */

    startGame(){
        //hide the overlay div
        document.getElementById('overlay').style.display = 'none';
        let randPhrase = this.getRandomPhrase();
        //sets activePhrase to getRandomPhrase method call;
        this.activePhrase = randPhrase;
        console.log(this.activePhrase)
        //const phrase = new Phrase(this.activePhrase.phrase);
        randPhrase.this.addPhraseToDisplay();
        //sets activePhrase property to a random phrase
        //calls addPhraseToDisplay on the active phrase

    
    }
}