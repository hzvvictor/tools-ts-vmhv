/**
 * Combina dos arrays de objetos en uno solo, agrupando los elementos por propiedades específicas y devolviendo un objeto con las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 * @template T
 * @param {T[]} arr1 - El primer array de objetos a combinar.
 * @param {string} prop1 - La cadena de acceso separada por puntos a la propiedad por la cual se agruparán los elementos del primer array.
 * @param {T[]} arr2 - El segundo array de objetos a combinar.
 * @param {string} prop2 - La cadena de acceso separada por puntos a la propiedad por la cual se agruparán los elementos del segundo array.
 * @returns {object} - Un objeto que contiene las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 */
/**
 * Combina múltiples arrays de objetos en uno solo, agrupando los elementos por propiedades específicas y devolviendo un objeto con las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 * @template T
 * @template U
 * @param {Array<{from: U[], by: keyof U}>} arrs - Un arreglo de objetos con la estructura {from: U[], by: keyof U}.
 * @returns {Record<T, U[]>} - Un objeto que contiene las propiedades agrupadas como claves y los valores de los arrays combinados como valores.
 */
type MergeArray = {
    from: any[];
    by: string;
    as: string;
};
type MergedArrays<T> = {
    [key: string]: {
        [key: string]: T[];
    };
};
declare const mergeArraysByProperty: <T>(...arrs: MergeArray[]) => MergedArrays<T>;
export { mergeArraysByProperty as default };
