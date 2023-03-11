export type CamelCase = 'camel';
export type SnakeCase = 'snake';
export type CamelOrSnake = CamelCase | SnakeCase;
export interface StringsVariations {
  camel: string;       // stringVariation
  camelCap: string;    // StringVariation
  snake: string;       // string_variation
  snakeCap: string;    // String_variation
  snakeTitle: string;  // String_Variation
  space: string;       // string variation
  spaceCap: string;    // String variation
  spaceTitle: string;  // String Variation
}
export type OutStringsVariations = 'ALL' | 'PLURAL' | 'SINGULAR'
