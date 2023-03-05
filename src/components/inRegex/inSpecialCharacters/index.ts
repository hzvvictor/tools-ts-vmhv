import isByPattern, { isCharSpecialByPattern } from "./isByPattern";
import pattern, { patternSpecialChars } from "./pattern";
import regex, { regexSpecialCharacter } from "./regex";
import replace, { replaceSpecialCharsByPattern } from "./replace";

const inSpecialCharacters = {
  pattern,
  regex,
  replace,
  isByPattern,
}
export {
  inSpecialCharacters as default,
  patternSpecialChars,
  regexSpecialCharacter,
  replaceSpecialCharsByPattern,
  isCharSpecialByPattern,
}

// const replaced = inSpecialCharacters.replace('(?<:\\w)')
// console.log(replaced);