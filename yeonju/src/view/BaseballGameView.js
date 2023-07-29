const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_MC } = require("../constants/Constants");

class BaseballGameView {
  displayWelcomeMessage() {
    Console.print(MESSAGE_MC.START);
  }

  displayResult(strikes, balls) {
    let message = "";

    if (strikes === 0 && balls === 0) {
      message = "낫싱";
    }

    if (balls > 0) {
      message += `${balls}볼 `;
    }

    if (strikes > 0) {
      message += `${strikes}스트라이크`;
    }

    Console.print(message.trim());
  }

  displayGameStart() {
    Console.print(MESSAGE_MC.START);
  }

  displayGameRestart() {
    Console.print(MESSAGE_MC.END);
    Console.print(MESSAGE_MC.RESTART);
  }
}

module.exports = BaseballGameView;
