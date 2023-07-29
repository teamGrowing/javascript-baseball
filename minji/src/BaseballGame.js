const { Console, Random } = require("@woowacourse/mission-utils");
const { GameConsole } = require("./GameConsole");

class BaseballGame {
  #answer;
  #inputNumbers;
  #strikeCnt;
  #ballCnt;
  #console;

  constructor() {
    this.#answer = null;
    this.#inputNumbers = null;
    this.#strikeCnt = null;
    this.#ballCnt = null;
    this.#console = new GameConsole();
  }

  start() {
    this.#makeRandomNumbers();
    this.#console.printStart();
    this.#getUserInput();
  }

  exit() {
    Console.close();
  }

  restart() {
    this.#answer = null;
    this.#inputNumbers = null;
    this.#strikeCnt = null;
    this.#ballCnt = null;
    this.#makeRandomNumbers();
    this.#getUserInput();
  }

  #checkStrikeCnt() {
    let cnt = 0;
    for (let i = 0; i < 3; i += 1) {
      if (this.#answer[i] === Number(this.#inputNumbers[i])) cnt += 1;
    }
    this.#strikeCnt = cnt;
  }
  #checkBallCnt() {
    let cnt = 0;
    this.#inputNumbers.forEach((v, i) => {
      if (Number(v) === this.#answer[0] && i !== 0) cnt++;
      if (Number(v) === this.#answer[1] && i !== 1) cnt++;
      if (Number(v) === this.#answer[2] && i !== 2) cnt++;
    });

    this.#ballCnt = cnt;
  }
  #getUserInput() {
    this.#console.inputNumbers(this.#userNumberAfterFunc.bind(this));
  }
  #userNumberAfterFunc(numbers) {
    this.#inputNumbers = numbers.split("");
    this.#matchWithAnswer();
  }
  #cmdAfterFunc(cmd) {
    if (cmd === "1") this.restart();
    if (cmd === "2") this.exit();
  }
  #makeRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#answer = computer;
    console.log(this.#answer); // 확인용
  }

  #matchWithAnswer() {
    this.#checkStrikeCnt();
    this.#checkBallCnt();

    this.#console.printResult(this.#strikeCnt, this.#ballCnt);

    if (this.#strikeCnt === 3) {
      this.#console.printEnd();
      this.#console.inputCmd(this.#cmdAfterFunc.bind(this));
      return;
    }
    this.#getUserInput();
  }
}

module.exports = {
  BaseballGame,
};
