const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_MC } = require("../constants/Constants");

class BaseballGameView {
  displayWelcomeMessage() {
    Console.print(MESSAGE_MC.START);
  }

  displayResult(result) {
    const { strikes, balls } = result;

    const message = `${balls}볼 ${strikes} 스트라이크`;
    Console.print(message.trim());
    if (strikes === 3) {
      Console.print(MESSAGE_MC.END);
      Console.print(MESSAGE_MC.RESTART);
    }
  }

  displayGameStart() {
    Console.print(MESSAGE_MC.START);
  }

  displayErrorMessage(type) {
    Console.print(type);
  }
}

module.exports = BaseballGameView;
