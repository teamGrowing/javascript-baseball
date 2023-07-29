const MESSAGE_MC = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

const MESSAGE_ERROR = Object.freeze({
  NO_THREE_DIGIT_NUMBER:
    "입력값이 유효하지 않습니다. 3자리 숫자를 입력해주세요.",
  HAS_REPEATED_DIGITS:
    "입력값이 유효하지 않습니다. 서로 다른 숫자를 입력해주세요.",
  RESTART: "입력값이 유효하지 않습니다. 1, 2 중에 한 개만 입력주세요.",
});

module.exports = { MESSAGE_MC, MESSAGE_ERROR };
