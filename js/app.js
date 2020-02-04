/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/* Click event handler for "Start Game" Button */

document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game();
  game.startGame();
});

/* Click event handler for all on screen keys */

const keyButtons = document.getElementsByClassName("key");
for (let i = 0; i < keyButtons.length; i++) {
  keyButtons[i].addEventListener("click", e => {
    if (!game.pressedKeys.includes(e.target.textContent)) {
      game.pressedKeys.push(e.target.textContent);
      console.log(game.pressedKeys);
      game.handleInteraction(e.target);
    }
  });
}

/* Keyup event handler */

document.addEventListener("keyup", e => {
  if (!game.pressedKeys.includes(e.key)) {
    game.pressedKeys.push(e.key);
    console.log(game.pressedKeys);
    for (let i = 0; i < keyButtons.length; i++) {
      if (e.key === keyButtons[i].textContent) {
        game.handleInteraction(keyButtons[i]);
      }
    }
  }
});
