import capitalize from "./capitalize";
import toCamelAndSnakeCase from "./toCamelAndSnakeCase";
import toPlural from "./toPlural";
import toSingular from "./toSingular";
import toSpaceCase from "./toSpaceCase";
import toSpaceTitleCaseFromSnake from "./toSpaceTitleCaseFromSnake";
import toTitleCaseFromSnake from "./toTitleCaseFromSnake";
import { OutStringsVariations, StringsVariations } from "./types";
const getStringCasesPlural = (string: string): StringsVariations => {
    const { camel: camelPlu, snake: snakePlu } = toCamelAndSnakeCase(toPlural(string, true))
    const spacePlural = toSpaceCase(snakePlu);
    const variationsPlu = {
        camel: camelPlu,
        camelCap: capitalize(camelPlu),
        snake: snakePlu,
        snakeCap: capitalize(snakePlu),
        snakeTitle: toTitleCaseFromSnake(snakePlu),
        space: spacePlural,
        spaceCap: capitalize(spacePlural),
        spaceTitle: toSpaceTitleCaseFromSnake(snakePlu),
    }
    return variationsPlu;
}
const getStringCasesSingular = (string: string): StringsVariations => {
    const { camel: camelSin, snake: snakeSin } = toCamelAndSnakeCase(toSingular(string, true))
    const spaceSingular = toSpaceCase(snakeSin);
    const variationsPlu = {
        camel: camelSin,
        camelCap: capitalize(camelSin),
        snake: snakeSin,
        snakeCap: capitalize(snakeSin),
        snakeTitle: toTitleCaseFromSnake(snakeSin),
        space: spaceSingular,
        spaceCap: capitalize(spaceSingular),
        spaceTitle: toSpaceTitleCaseFromSnake(snakeSin),
    }
    return variationsPlu;
}
type StringsVariationsResult = {
    plural?: StringsVariations;
    singular?: StringsVariations;
};
const getStringCases = (string: string, out: OutStringsVariations = 'ALL'): StringsVariationsResult => {
    switch (true) {
        case out === 'PLURAL':
            return {
                plural: getStringCasesPlural(string),
                singular: undefined
            };
        case out === 'SINGULAR':
            return {
                plural: undefined,
                singular: getStringCasesSingular(string)
            };
        default:
            return {
                plural: getStringCasesPlural(string),
                singular: getStringCasesSingular(string),
            }
    }
}
// console.log(getStringCases('USER NAMES', 'ALL'))
export default getStringCases;