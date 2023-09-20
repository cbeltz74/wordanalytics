// detect in textara when there is a change

const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
    if (textareaEl.value.includes('<script>')) {
        alert("You can't use <script> in your text");
        textareaEl.value = textareaEl.value.replace('<script>', '');
    }

    // determine new numbers
    let numberOfWords = textareaEl.value.split(' ').length;
        if (textareaEl.value.length === 0) {
            numberOfWords = 0;
        }


    const numberOfCharacters = textareaEl.value.length;
    const twitterCharactersLeft = 280 - numberOfCharacters;
    const facebookCharactersLeft = 2200 - numberOfCharacters;

    // add visual indicator is limit is exceeded
    if (twitterCharactersLeft < 0) {
        twitterNumberEl.classList.add('state__number--limit');
    } else {
        twitterNumberEl.classList.remove('state__number--limit');
    }

    if (facebookCharactersLeft < 0) {
        facebookNumberEl.classList.add('state__number--limit');
    } else {
        facebookNumberEl.classList.remove('state__number--limit');
    }




    // set the new numbers
    charactersNumberEl.textContent = numberOfCharacters;

    // set Twitter characters left My solutio
    // twitterNumberEl.textContent = 280 - numberOfCharacters;    
    twitterNumberEl.textContent = twitterCharactersLeft;
    // set Facebook characters left my solution
    // facebookNumberEl.textContent = 2200 - numberOfCharacters;
    facebookNumberEl.textContent = facebookCharactersLeft;

    wordsNumberEl.textContent = numberOfWords;

};


// listed for input event
textareaEl.addEventListener('input', inputHandler);


/* 



*/
