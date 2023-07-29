const { BaseballGame } = require("./BaseballGame");

class App {
  play() {
    const game = new BaseballGame();
    game.start();
  }
}

const app = new App();
app.play();

module.exports = App;
