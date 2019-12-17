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
        return this.phrases[randNum];
    }

    /**
     * Begins game by selecting a random phrase and displaying
     * it to user
     */

    startGame(){
        //hide the overlay div
        document.getElementById('overlay').style.display = 'none';
        let newPhrase;
        this.activePhrase = newPhrase;
        console.log(newPhrase)
        newPhrase.phrase.addPhraseToDisplay();
        console.log(newPhrase)
    }

    handleInteraction(){


    }
}