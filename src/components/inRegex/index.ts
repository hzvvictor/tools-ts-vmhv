import isCamelCase from "./isCamelCase";
import isCapitalized from "./isCapitalized";
import isSnakeCase from "./isSnakeCase";
import isWord from "./isWord";

const functions = {
  isSnakeCase,
  isCamelCase,
  isCapitalized,
  isWord,
}

export {
  functions as default,
  isSnakeCase,
  isCamelCase,
  isCapitalized,
  isWord,
}

console.log(isSnakeCase("snake_case")); //
console.log(isCamelCase("camelCase")); //
console.log(isCapitalized("Capitalized")); //
console.log(isWord("hello")); //