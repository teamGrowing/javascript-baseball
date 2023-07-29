const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_MC } = require("../constants/Constants");

class BaseballGameView {
  displayWelcomeMessage() {
    Console.print(MESSAGE_MC.START);
  }

  displayResult(strikes, balls) {
    const message = `${balls}볼 ${strikes} 스트라이크`;
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
