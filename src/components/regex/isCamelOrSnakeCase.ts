import isCamelCase from "./isCamelCase"
import isSnakeCase from "./isSnakeCase"

const isCamelOrSnakeCase = (string: string) => {
  if (isCamelCase(string)) {
    return { test: true, type: 'camel' }
  }
  if (isSnakeCase(string)) {
    return { test: true, type: 'snake' }
  }
  return { test: false, type: null }
}


export default isCamelOrSnakeCase