/**
 * Ordena un array de objetos por una propiedad anidada específica, de manera ascendente o descendente.
 * @param arr El array de objetos a ordenar.
 * @param property La propiedad anidada por la cual se va a ordenar el array.
 * @param descending Si es true, ordena de manera descendente. De lo contrario, ordena de manera ascendente.
 * @returns El array ordenado.
 */
declare const sortByProperty: <T>(arr: T[], property: string, descending?: boolean) => T[];
export { sortByProperty as default };
