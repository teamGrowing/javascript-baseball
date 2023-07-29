const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_MC } = require("../constants/Constants");
const BaseballGame = require("../model/BaseballGame");
const BaseballGameView = require("../view/BaseballGameView");
const generateRandomNumber = require("../utils/RandomNumberGenerator");
const { Validator } = require("../utils/Validator");

class BaseballGameController {
  #baseballGame;
  #baseballGameView;

  constructor() {
    this.#baseballGame = new BaseballGame(generateRandomNumber());
    this.#baseballGameView = new BaseballGameView();
  }

  startGame() {
    this.#baseballGameView.displayWelcomeMessage();
    this.inputNumber();
  }

  inputNumber() {
    Console.readLine(MESSAGE_MC.INPUT, (playerInput) => {
      Validator.validateBaseballInput(playerInput);

      const playerInputArray = [...playerInput].map((input) => Number(input));
      this.handlePlayerInputResult(playerInputArray);
    });
  }

  handlePlayerInputResult(playerInputArray) {
    const { strikes, balls } =
      this.#baseballGame.getStrikesAndBalls(playerInputArray);

    this.#baseballGameView.displayResult(strikes, balls);

    if (strikes === 3) {
      this.endGame();
    } else {
      this.inputNumber();
    }
  }

  endGame() {
    this.#baseballGameView.displayGameRestart();
  }
}

module.exports = BaseballGameController;
