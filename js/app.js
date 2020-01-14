/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/* Click event handler for "Start Game" Button */

document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();
});
