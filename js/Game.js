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
      new Phrase("Speak of the devil"),
      new Phrase("A Piece of Cake"),
      new Phrase("A Chip on Your Shoulder"),
      new Phrase("An Arm and a Leg"),
      new Phrase("Back to Square One"),
      new Phrase("Barking Up The Wrong Tree"),
      new Phrase("Between a Rock and a Hard Place"),
      new Phrase("Burst Your Bubble"),
      new Phrase("Cry Over Spilled Milk"),
      new Phrase("Curiosity Killed The Cat"),
      new Phrase("Cut To The Chase"),
      new Phrase("Down For The Count"),
      new Phrase("Down To The Wire"),
      new Phrase("Dropping Like Flies")
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

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */

  handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }

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
      overlay.style.backgroundColor = "#71a371";
      gameOverMessage.textContent = "Congratulations You Won!";
      overlay.style.display = "flex";
      this.resetGame();
    } else {
      overlay.style.backgroundColor = "#ad3a37";
      gameOverMessage.innerHTML = `Sorry You Lost...
      The correct phrase was <h1 style = "color:#000">${this.activePhrase.phrase}</h1>
      `;

      overlay.style.display = "flex";
      this.resetGame();
    }

    resetButton.textContent = "Play Again";
  }

  resetGame() {
    // clear phrase from unordered list //
    const phraseUl = document.getElementById("phrase");
    phraseUl.firstElementChild.innerHTML = "";

    // enable all keys and set class to 'key' //
    const keys = document.getElementsByClassName("key");
    for (let i = 0; i < keys.length; i++) {
      keys[i].disabled = false;
      keys[i].className = "key";
    }

    // Set all hearts back to liveHeart //
    const scoreboardHearts = document.querySelectorAll(
      "#scoreboard > ol > li > img"
    );
    for (let i = 0; i < scoreboardHearts.length; i++) {
      scoreboardHearts[i].src = "images/liveHeart.png";
    }

    // remove revealed answer
  }
}
