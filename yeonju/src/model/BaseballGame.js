const generateRandomNumber = require("../utils/RandomNumberGenerator");

class BaseballGame {
  #answer;

  constructor(answer) {
    this.#answer = answer;
  }

  getStrikesAndBalls(userGuess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < this.#answer.length; i++) {
      if (this.#answer[i] === userGuess[i]) {
        strikes++;
      } else if (this.#answer.includes(userGuess[i])) {
        balls++;
      }
    }

    return { strikes, balls };
  }

  reset() {
    this.#answer = generateRandomNumber();
  }
}

module.exports = BaseballGame;
