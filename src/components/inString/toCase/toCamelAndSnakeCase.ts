import isCamelCase from "../../inRegex/isCamelCase";
import isSnakeCase from "../../inRegex/isSnakeCase";
import camelToSnake from "./camelToSnake";
import snakeToCamel from "./snakeToCamel";
import { CamelOrSnake } from "./types";


interface CaseResult<T> {
  test: boolean;
  type: T | null;
}

const isCamelOrSnakeCase = (string: string): CaseResult<CamelOrSnake> => ({
  test: isCamelCase(string) || isSnakeCase(string),
  type: isCamelCase(string) ? 'camel' : isSnakeCase(string) ? 'snake' : null
});

const toCamelAndSnakeCase = (string: string): {
  camel: string; snake: string; type: CamelOrSnake | null
} => {
  const { type, test } = isCamelOrSnakeCase(string);
  return {
    camel: test && type === 'snake' ? snakeToCamel(string) : string,
    snake: test && type === 'camel' ? camelToSnake(string) : string,
    type: test ? type : null
  };
};

console.log(toCamelAndSnakeCase('exampleText'));
// { camel: 'exampleText', snake: 'example_text', type: 'camel' }
export default toCamelAndSnakeCase;
