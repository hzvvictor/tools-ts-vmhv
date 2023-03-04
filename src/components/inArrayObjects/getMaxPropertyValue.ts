import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

/**
 * Devuelve el valor máximo de una propiedad numérica en un array de objetos.
 * @template T
 * @param {T[]} arr - El array de objetos a evaluar.
 * @param {string} property - La propiedad del objeto a comparar.
 * @returns {number | null} - El valor máximo encontrado o null si no se encontró ningún valor numérico.
*/
const getMaxPropertyValue = <T>(
  arr: T[],
  property: string
): number | null => {
  let maxValor: number | null = null;
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, property);
    if (typeof nestedObj === 'number' && (maxValor === null || nestedObj > maxValor)) {
      maxValor = nestedObj;
    }
  }
  return maxValor;
}
export { getMaxPropertyValue as default }