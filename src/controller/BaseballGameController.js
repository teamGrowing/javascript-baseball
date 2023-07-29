const BaseballGame = require("../model/BaseballGame");
const BaseballGameView = require("../view/BaseballGameView");
const generateRandomNumber = require("../utils/RandomNumberGenerator");

class BaseballGameController {
  #baseballGame;
  #baseballGameView;

  constructor() {
    this.#baseballGame = new BaseballGame(generateRandomNumber());
    this.#baseballGameView = new BaseballGameView();
  }

  startGame() {
    this.#baseballGameView.displayWelcomeMessage();
  }
}

module.exports = BaseballGameController;
