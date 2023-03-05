import isCapitalized from "../../inRegex/isCapitalized";

const camelToSnakeCase = (str: string) => {
  const capitalized = isCapitalized(str)
  return (
    //? stringTest => string_test 
    str
      .replace(/[A-Z]/g, (letter) => (
        `_${letter.toLowerCase()}`
      ))
      .replace(/(^_)/, '')
      .replace(/(^[a-z])/i, letter => (
        capitalized ? letter.toUpperCase() : letter
      ))
  )
};
// console.log(camelToSnakeCase('ProducstByUsers'))
export { camelToSnakeCase as default }