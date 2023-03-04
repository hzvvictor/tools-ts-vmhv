import getValueOfNestedProperty from "../inObject/inNestedProperty/get";
/**
 * Ordena un array de objetos por una propiedad anidada específica, de manera ascendente o descendente.
 * @param arr El array de objetos a ordenar.
 * @param property La propiedad por la cual se va a ordenar el array.
 * @param descending Si es true, ordena de manera descendente. De lo contrario, ordena de manera ascendente.
 * @returns El array ordenado.
 */
const sortByProperty = <T>(
  arr: T[],
  property: string,
  descending = false
): T[] => {
  return arr.sort((a, b) => {
    const valA = getValueOfNestedProperty(a, property);
    const valB = getValueOfNestedProperty(b, property);
    if (valA === null && valB === null) {
      return 0;
    } else if (valA === null) {
      return 1;
    } else if (valB === null) {
      return -1;
    }
    return descending ? valB - valA : valA - valB;
  });
}
export { sortByProperty as default }