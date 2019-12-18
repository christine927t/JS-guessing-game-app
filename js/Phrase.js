/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Displays phrase on game board
     */

    addPhraseToDisplay(){
        const phraseUl = document.querySelector('ul');
        let newPhrase = this.phrase;
        let ltrspl = newPhrase.split('');

        ltrspl.forEach(ltr => {
            const letterLi = document.createElement('li');
            phraseUl.appendChild(letterLi);
            letterLi.innerHTML = (`${ltr}`)
            if (ltr === ' '){
                letterLi.classList = (`hide space`);
            } else {
                letterLi.classList = (`hide letter ${ltr}`);
            }
        })
        
    }

    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - letter to check
     */

    checkLetter(letter){
        //checks to see if the letter selected by player matches
        //a letter in the phrase
        let keys = document.getElementsByClassName('key')
        console.log(keys)

        keys.addEventListener('click', function(){
            console.log(keys)
        })


    }

     /**
      * Displays passed letter on screen after a
      * match is found
      * @param {string} letter = letter to display
      */

    showMatchedLetter(letter){
        //reveals the letters on the board that match the player's
        //selection. 


    }
 }


