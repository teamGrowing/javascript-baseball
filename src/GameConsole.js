const { Console } = require("@woowacourse/mission-utils");
const { validateCmdInput, validateNumbersInput } = require("./Validator");

class GameConsole {
  #outputs = {
    START_MESSAGE: "숫자 야구 게임을 시작합니다.",
    REQUIRE_NUMBERS: "숫자를 입력해주세요 : ",
    REQUIRE_CMD: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    END_MESSAGE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  };

  printStart() {
    Console.print(this.#outputs.START_MESSAGE);
  }
  printResult(strike, ball) {
    if (strike === 0 && ball === 0) {
      Console.print("낫싱");
      return;
    }
    if (strike === 0) {
      Console.print(ball + "볼");
      return;
    }
    if (ball === 0) {
      Console.print(strike + "스트라이크");
      return;
    }
    Console.print(`${ball}볼 ${strike}스트라이크`);
  }

  printEnd() {
    Console.print(this.#outputs.END_MESSAGE);
  }

  inputNumbers(callback) {
    Console.readLine(this.#outputs.REQUIRE_NUMBERS, (numbers) => {
      validateNumbersInput(numbers);
      return callback(numbers);
    });
  }
  inputCmd(callback) {
    Console.readLine(this.#outputs.REQUIRE_CMD, (cmd) => {
      validateCmdInput(cmd);
      return callback(cmd);
    });
  }
}

module.exports = {
  GameConsole,
};
