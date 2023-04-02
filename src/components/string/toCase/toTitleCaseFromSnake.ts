import capitalize from "./capitalize";

const toTitleCaseFromSnake = (string) => {
  const words = string.split('_')
  return words.map((word) => capitalize(word)).join('_')
}
export default toTitleCaseFromSnake;