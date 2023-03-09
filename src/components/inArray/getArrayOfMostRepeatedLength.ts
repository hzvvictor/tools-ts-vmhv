import { getMaxValue } from "../inObject";
import toLengthDictionary from "./getLengthArrDictionary";
/**
 *Devuelve un arreglo con los elementos de longitud más repetida de un arreglo de números o strings.
 *@param {Array<string | number>} arr - Arreglo de elementos a analizar.
 *@returns {Array<string | number>} - Arreglo de elementos de longitud más repetida.
*/
const getArrayOfMostRepeatedLength = (arr: Array<string | number>) => {
  const dictionaryLengths = toLengthDictionary(arr);
  const mostRepeted = Number(getMaxValue(dictionaryLengths).key)
  const filtered = arr.filter(item => item?.toString().length == mostRepeted)
  return filtered
}

export default getArrayOfMostRepeatedLength