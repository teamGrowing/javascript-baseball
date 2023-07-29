const { Random } = require("@woowacourse/mission-utils");

const generateRandomNumber = () => {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < 3) {
    const number = Random.pickNumberInRange(1, 9);
    uniqueNumbers.add(number);
  }

  return Array.from(uniqueNumbers);
};

module.exports = generateRandomNumber;
