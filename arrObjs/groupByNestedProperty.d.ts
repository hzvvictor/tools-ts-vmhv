/**
 * Agrupa los elementos de un arreglo por el valor de una propiedad anidada dentro de cada elemento.
 * @template T
 * @param {T[]} arr - El arreglo de objetos a agrupar.
 * @param {string} propiedad - El nombre de la propiedad anidada dentro de cada objeto.
 * @returns {{ [key: string]: T[] }} - Un objeto donde cada propiedad es una cadena que representa el valor de la propiedad anidada y su valor es un arreglo de los objetos que tienen ese valor de propiedad anidada.
*/
declare const groupByNestedProperty: <T>(arr: T[], propiedad: string) => {
    [key: string]: T[];
};
export { groupByNestedProperty as default };
