import { patternSpecialChars } from "./pattern"

const patternInBrackets = `(?<=^\\[\\\\?)${patternSpecialChars}(?=\\]$)`
const patternSimple = `(?<=^\\\\?)${patternSpecialChars}$`

const generateRegex = () => ({
  inBrackets: new RegExp(patternInBrackets, 'g'),
  simple: new RegExp(patternSimple, 'g')
})


const isByPattern = (pattern: string) => {
  const trimmedPattern = pattern.trim()
  const { inBrackets, simple } = generateRegex()

  const isInBrackets = inBrackets.test(trimmedPattern)
  const isSimple = simple.test(trimmedPattern)
  const isSpecialChar = isInBrackets || isSimple

  return isSpecialChar
}

// console.log(isCharSpecialInPattern('\\')) // true
// console.log(isCharSpecialInPattern('[\\]')) // true
// console.log(isCharSpecialInPattern('w')) // false
// console.log(isCharSpecialInPattern('d')) // false
// console.log(isCharSpecialInPattern('*')) // true
// console.log(isCharSpecialInPattern('[*]')) // true

const isCharSpecialByPattern = isByPattern;
export { isByPattern as default, isCharSpecialByPattern }