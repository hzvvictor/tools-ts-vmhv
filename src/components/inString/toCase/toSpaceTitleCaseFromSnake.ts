import capitalize from "./capitalize";

const toSpaceTitleCaseFromSnake = (string) => {
  const words = string.split('_')
  return words.map((word) => capitalize(word)).join(' ')
}
export default toSpaceTitleCaseFromSnake;