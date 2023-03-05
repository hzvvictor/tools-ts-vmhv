import inSpecialCharacters from "./inSpecialCharacters"

const containsUnderscore = (string: string) => (
  /\_[a-z]/gi.test(string)
)
const IsCamel = (string: string) => (
  /(?<!^)(?<!_)([A-Z][a-z])/g.test(string)
)
const isCamelCase = (string: string) => (
  !containsUnderscore(string)
  && IsCamel(string)
)
// console.log(isCamelCase('ProductsFromUsers'))
export default isCamelCase
