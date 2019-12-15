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
        let letter = game.getRandomPhrase();
        let ltrspl = letter.phrase.split('');

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

 }

 //to get letters attached to LIs
 //once we get the phrase
 //parse it out somehow (some kind of loop)
 //grab each letter and space
 //make new li for each letter and space (append to phraseUl)
 //add class name to each li matching letter or space
