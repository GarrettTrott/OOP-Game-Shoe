/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Display phrase on game board
   */

  addPhraseToDisplay() {
    const phraseUl = document.getElementById("phrase");
    const phraseArray = this.phrase.split("");

    phraseArray.forEach(letter => {
      const li = document.createElement("LI");
      li.textContent = letter;
      if (letter === " ") {
        li.className = "space";
      } else {
        li.className = `hide letter ${letter}`;
      }
      phraseUl.appendChild(li);
    });
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */

  showMatchedLetter(letter) {
    const letterLi = document.getElementsByClassName(letter);

    for (let i = 0; i < letterLi.length; i++) {
      letterLi[i].classList.remove("hide");
      letterLi[i].classList.add("show");
    }
  }
}
