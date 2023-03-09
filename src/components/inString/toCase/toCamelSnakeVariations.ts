

const toCamelCase = (string: string): string => {
    const [first, ...rest] = string.split(/[^a-zA-Z]/);
    return [first.toLowerCase(), ...rest.map((s) => capitalize(s))].join('');
};

const toSnakeCase = (string: string): string => {
    return string.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
};

const capitalize = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const toPlural = (string: string, toLowerCase: boolean): string => {
    let formated = string.trim();
    const reg = new RegExp(`(s|S)$`, 'gi')
    const isPlural = reg.test(string);

    formated += (isPlural) ? '' : 's';

    if (toLowerCase)
        return formated.toLowerCase()
    else
        return formated
};

const toSingular = (string: string, toLowerCase?: boolean): string => {
    const reg = new RegExp(`(s|S)$`, 'gi')
    let formated = string.trim().replace(reg, '')
    if (toLowerCase)
        return formated.toLowerCase()
    else
        return formated
};

const toCamelAndSnakeCase = (string: string): { camel: string; snake: string } => {
    const camel = toCamelCase(string);
    const snake = toSnakeCase(camel);
    return { camel, snake };
};

const toSpaceCase = (string: string): string => {
    return string.replace(/[_-]/g, ' ');
};

const toTitleCase = (string: string): string => {
    return string.replace(
        /\w\S*/g,
        (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
    );
};
const toTitleCaseFromSnake = (string) => {
    const words = string.split('_')
    return words.map((word) => capitalize(word)).join('_')
}
const toSpaceTitleCaseFromSnake = (string) => {
    const words = string.split('_')
    return words.map((word) => capitalize(word)).join(' ')
}

interface CamelSnakeVariations {
    camel: string;
    camelCap: string;
    snake: string;
    snakeCap: string;
    snakeTitle: any;
    space: string;
    spaceCap: string;
    spaceTitle: any;
}
type OutCamelSnakeVariations = 'ALL' | 'PLURAL' | 'SINGULAR'

const getVariationsPlural = (string: string) => {
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
const getVariationSingular = (string: string) => {
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
type CamelSnakeVariationsResult = {
    plural?: CamelSnakeVariations;
    singular?: CamelSnakeVariations;
};
const toCamelSnakeVariations = (string: string, out: OutCamelSnakeVariations = 'ALL'): CamelSnakeVariationsResult => {
    switch (true) {
        case out === 'PLURAL':
            return {
                plural: getVariationsPlural(string),
                singular: undefined
            };
        case out === 'SINGULAR':
            return {
                plural: undefined,
                singular: getVariationSingular(string)
            };
        default:
            return {
                plural: getVariationsPlural(string),
                singular: getVariationsPlural(string),
            }
    }
}


console.log(toCamelSnakeVariations('user_name', 'PLURAL'))