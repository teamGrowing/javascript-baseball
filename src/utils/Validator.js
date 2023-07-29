const { MESSAGE_ERROR } = require("../constants/Constants");

class Validator {
  static validateBaseballInput(input) {
    if (!Validator.isValidThreeDigitNumber(input)) {
      throw new Error(MESSAGE_ERROR.NO_THREE_DIGIT_NUMBER);
    }

    if (!Validator.hasNoRepeatedDigits(input)) {
      throw new Error(MESSAGE_ERROR.HAS_REPEATED_DIGITS);
    }
  }

  static isValidThreeDigitNumber(input) {
    return Number.isInteger(input) && input >= 100 && input <= 999;
  }

  static hasNoRepeatedDigits(input) {
    const digits = new Set([...input.toString()]);
    return digits.size === 3;
  }

  static validateRestartInput(input) {
    if (input !== 1 && input !== 2) {
      throw new Error(MESSAGE_ERROR.RESTART);
    }
  }
}

module.exports = { Validator };
