const regex = (
  /([\\\[\]~$<>:.*+=?!(){}"_-])/g
)
const regexSpecialCharacter = regex;
export { regex as default, regexSpecialCharacter }