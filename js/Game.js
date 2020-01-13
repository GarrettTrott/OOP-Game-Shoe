/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases tha could be used in the game
   */

  createPhrases() {
    const phrases = [
      new Phrase("A penny saved is a penny earned"),
      new Phrase("A dime a dozen"),
      new Phrase("Beating around the bush"),
      new Phrase("Once in a blue moon"),
      new Phrase("Speak of the devil")
    ];
    return phrases;
  }

  /**
   * Selects a random phrase from phrases property
   * @return {object} Phrase object to be used
   */

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */

  startGame() {
    // hide overlay screen
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    // set active phrase
    this.activePhrase = this.getRandomPhrase();

    // display hidden active phrase
    this.activePhrase.addPhraseToDisplay();
  }
}
