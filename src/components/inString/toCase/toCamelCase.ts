import capitalize from "./capitalize";

const toCamelCase = (string: string): string => {
  const [first, ...rest] = string.split(/[^a-zA-Z\d+_]/);
  return [first.toLowerCase(), ...rest.map(capitalize)].join('');
};
// console.log(toCamelCase('user NAMES'))
export default toCamelCase;