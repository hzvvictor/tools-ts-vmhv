export type CamelCase = 'camel';
export type SnakeCase = 'snake';
export type CamelOrSnake = CamelCase | SnakeCase;
export interface StringsVariations {
    camel: string;
    camelCap: string;
    snake: string;
    snakeCap: string;
    snakeTitle: string;
    space: string;
    spaceCap: string;
    spaceTitle: string;
}
export type OutStringsVariations = 'ALL' | 'PLURAL' | 'SINGULAR';
