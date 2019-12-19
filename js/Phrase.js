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

    // checkLetter(letter){
    //     let phrase = game.activePhrase.phrase;
    //     let phrasesplt = phrase.split('');
    //     console.log(phrasesplt)
    //     let keys = document.getElementById('qwerty')
    //     keys.addEventListener('click', function(event){
    //         const isButton = event.target.nodeName === 'BUTTON';
    //         let clicked = event.target;

    //         if (isButton) {
    //             
    //         }
    //     })
    // }

        checkLetter(letter){
            let phrase = game.activePhrase.phrase;
            let phraseSplit = phrase.split('');
            if(phraseSplit.indexOf(letter) >= 0){
                console.log('match')
                return true;
            }
            else {
                console.log('non-match')
                return false;
            }
        }


     /**
      * Displays passed letter on screen after a
      * match is found
      * @param {string} letter = letter to display
      */

    showMatchedLetter(letter){
        let phrase = game.activePhrase.phrase;
        let phraseSplit = phrase.split('');
        let letterElements = document.getElementsByClassName(`${letter}`);
        console.log(letterElements)
        while (letterElements[0]){        
            letterElements[0].classList.replace('hide','show');
   
            // letterElements[0].classList.remove('hide');
            // letterElements[0].classList.add('show');
            break;
        }
        //letterElements.replace('hide', 'show');
    
    }

 }

 //game.activePhrase.showMatchedLetter('a')


