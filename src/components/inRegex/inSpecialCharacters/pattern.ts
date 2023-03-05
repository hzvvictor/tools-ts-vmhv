import regex from "./regex"

const pattern = (
  regex
    .toString()
    .replace(/^.|(\/[^/]*)$/g, '')
)
const patternSpecialChars = pattern;
export { pattern as default, patternSpecialChars };