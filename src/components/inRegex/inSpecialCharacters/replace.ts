import regex from "./regex";

const replace = (pattern: string) => (
  pattern.replace(regex, '\\\\$1')
)
// console.log(replace('1A[a-z]+.99:)'))
const replaceSpecialCharsByPattern = replace;
export { replace as default, replaceSpecialCharsByPattern }