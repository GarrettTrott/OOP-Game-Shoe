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

  handelInteraction() {}

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */

  checkForWin() {
    const correctLetters = document.getElementsByClassName("show");
    const spaces = document.getElementsByClassName("space");
    return (
      this.activePhrase.phrase.length === correctLetters.length + spaces.length
    );
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */

  removeLife() {
    const scoreboardHearts = document.querySelectorAll(
      "#scoreboard > ol > li > img"
    );
    const lastFullHeart =
      scoreboardHearts[scoreboardHearts.length - 1 - this.missed];

    lastFullHeart.src = "images/lostHeart.png";

    this.missed += 1;

    if (scoreboardHearts.length === this.missed) {
      this.gameOver(false);
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */

  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    const gameOverMessage = document.getElementById("game-over-message");
    const resetButton = document.getElementById("btn__reset");

    if (gameWon) {
      overlay.style.backgroundColor = "#7bce85";
      gameOverMessage.textContent = "Congratulations You Won!";
      overlay.style.display = "flex";
    } else {
      overlay.style.backgroundColor = "#f37a63";
      gameOverMessage.textContent = "Sorry You Lost...";
      overlay.style.display = "flex";
    }

    resetButton.textContent = "Play Again";
  }
}
