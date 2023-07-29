const { Console } = require("@woowacourse/mission-utils");

function validateNumbersInput(numbers) {
  if (numbers.length != 3) {
    Console.close();
    throw new Error("잘못된 입력입니다.");
  }
  if (isNaN(numbers)) {
    throw new Error("숫자만 입력해주세요.");
  }
  for (idx in numbers) {
    if (numbers.indexOf(numbers[idx]) !== Number(idx)) {
      throw new Error("중복된 숫자가 있습니다.");
    }
  }
}

function validateCmdInput(cmd) {
  if (cmd !== "1" && cmd !== "2") {
    throw new Error("잘못된 입력입니다.");
  }
}

module.exports = { validateCmdInput, validateNumbersInput };
