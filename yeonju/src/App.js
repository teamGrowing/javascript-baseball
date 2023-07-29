const BaseballGameController = require("./controller/BaseballGameController");

class App {
  #baseballGame;

  play() {
    this.#baseballGame = new BaseballGameController();
    this.#baseballGame.startGame();
  }
}

module.exports = App;

const app = new App();
app.play();
