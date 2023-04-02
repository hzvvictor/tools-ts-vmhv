import capitalize from "./capitalize";

const toCamelCase = (string: string): string => {
  const [first, ...rest] = string.split(/[^a-zA-Z]/);
  return [first.toLowerCase(), ...rest.map((s) => capitalize(s))].join('');
};
export default toCamelCase;