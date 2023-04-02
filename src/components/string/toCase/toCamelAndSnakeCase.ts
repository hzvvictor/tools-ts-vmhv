import toCamelCase from "./toCamelCase";
import toSnakeCase from "./toSnakeCase";

const toCamelAndSnakeCase = (string: string): { camel: string; snake: string } => {
  const camel = toCamelCase(string);
  const snake = toSnakeCase(camel);
  return { camel, snake };
};
export default toCamelAndSnakeCase;