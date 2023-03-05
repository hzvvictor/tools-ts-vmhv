const { isCamelOrSnakeCase, isCamelCase } = require("../../regex/initRegex");
const camelToSnakeCase = require("./camelToSnakeCase")
const snakeToCamelCase = require("./snakeToCamelCase");


const toCamelAndSnakeCase = (string) => {

  let snake;
  let camel;
  const { type, test } = isCamelOrSnakeCase(string)
  if (!test) {
    return { snake: string, camel: string, changed: test }
  }
  if (type == 'snake') {
    snake = string
    camel = snakeToCamelCase(string)
  } else {
    if (isCamelCase(string))
      snake = camelToSnakeCase(string)/* .toLowerCase() */
    else
      snake = string

    camel = string
  }
  return { snake, camel, changed: test, type, string }
}

//? console.log('camelSinCap')
//? console.log()


module.exports = toCamelAndSnakeCase