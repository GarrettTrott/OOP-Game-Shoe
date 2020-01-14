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

  checkLetter() {}

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */

  showMatchedLetter() {}
}
