import getValueOfNestedProperty from "../inObject/inNestedProperty/get";
/**
 * Excluye los objetos de un array que tienen una propiedad específica con un valor específico.
 * @template T
 * @param {T[]} arr - El array de objetos a filtrar.
 * @param {string} property - La propiedad del objeto a comparar.
 * @param {*} valor - El valor que debe tener la propiedad para excluir el objeto.
 * @returns {T[]} - Un nuevo array de objetos que no tienen la propiedad property con el valor valor.
*/
const filterExcludeByPropertyValue = <T>(
  arr: T[],
  property: string,
  valor: any
): T[] => {
  return arr.filter(obj => {
    const nestedObj = getValueOfNestedProperty(obj, property);
    return nestedObj !== valor;
  });
}
/**
 * Nombre corto a `filterExcludeByPropertyValue`
 * Excluye los objetos de un array que tienen una propiedad específica con un valor específico.
 * @template T
 * @param {T[]} arr - El array de objetos a filtrar.
 * @param {string} property - La propiedad del objeto a comparar.
 * @param {*} valor - El valor que debe tener la propiedad para excluir el objeto.
 * @returns {T[]} - Un nuevo array de objetos que no tienen la propiedad property con el valor valor.
*/
const excludeByProperty = filterExcludeByPropertyValue
export { filterExcludeByPropertyValue as default, excludeByProperty }
