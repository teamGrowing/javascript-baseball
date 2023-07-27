const BaseballGame = require("../model/BaseballGame");
const generateRandomNumber = require("../utils/RandomNumberGenerator");

class BaseballGameController {
  #baseballGame;

  constructor() {
    this.#baseballGame = new BaseballGame(generateRandomNumber());
  }
}

module.exports = BaseballGameController;
