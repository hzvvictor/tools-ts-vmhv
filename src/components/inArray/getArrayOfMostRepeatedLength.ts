import { getMaxValue } from "../inObject";
import toLengthDictionary from "./getLengthArrDictionary";

const getArrayOfMostRepeatedLength = (arr: Array<string | number>) => {
  const dictionaryLengths = toLengthDictionary(arr);
  const mostRepeted = Number(getMaxValue(dictionaryLengths).index)
  const filtered = arr.filter(item => item?.toString().length == mostRepeted)
  return filtered
}
export default getArrayOfMostRepeatedLength