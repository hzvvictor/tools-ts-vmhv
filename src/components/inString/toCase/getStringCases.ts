import capitalize from "./capitalize";
import toCamelAndSnakeCase from "./toCamelAndSnakeCase";
import toPlural from "./toPlural";
import toSingular from "./toSingular";
import toSpaceCase from "./toSpaceCase";
import toSpaceTitleCaseFromSnake from "./toSpaceTitleCaseFromSnake";
import toTitleCaseFromSnake from "./toTitleCaseFromSnake";
import { OutStringsVariations, StringsVariations } from "./types";


export const getStringCases = (string: string): StringsVariations => {
    const { camel, snake } = toCamelAndSnakeCase(string)
    const spaceNormal = toSpaceCase(snake);
    const variationsNor = {
        camel: camel,
        camelCap: capitalize(snake),
        snake: snake,
        snakeCap: capitalize(snake),
        snakeTitle: toTitleCaseFromSnake(snake),
        space: spaceNormal,
        spaceCap: capitalize(spaceNormal),
        spaceTitle: toSpaceTitleCaseFromSnake(snake),
    }
    return variationsNor;
}
type StringsVariationsResult = {
    plural?: StringsVariations;
    singular?: StringsVariations;
    normal?: StringsVariations;
};

const getAllStringCases = (string: string, out: OutStringsVariations = 'ALL'): StringsVariationsResult => {
    switch (true) {
        case out === 'PLURAL':
            return {
                plural: getStringCases(toPlural(string)),
                singular: undefined
            };
        case out === 'SINGULAR':
            return {
                plural: undefined,
                singular: getStringCases(toSingular(string))
            };
        case out === 'ALL':
            return {
                plural: getStringCases(toPlural(string)),
                singular: getStringCases(toSingular(string)),
                normal: getStringCases(string)
            };
        case out === 'NORMAL':
            return {
                plural: undefined,
                singular: undefined,
                normal: getStringCases(string)
            }

        default:
            return {
                plural: getStringCases(toPlural(string)),
                singular: getStringCases(toSingular(string)),
                normal: getStringCases(string)
            }
    }
}
// console.log(getAllStringCases('USER NAMES', 'ALL'))
console.log(getAllStringCases('cat flag', 'ALL'))
export default getAllStringCases;