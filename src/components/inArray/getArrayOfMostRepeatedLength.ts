import { getMaxValue } from "../inObject";
import toLengthDictionary from "./getLengthArrDictionary";

const getArrayOfMostRepeatedLength = (arr: Array<string | number>) => {
  const dictionaryLengths = toLengthDictionary(arr);
  const mostRepeted = Number(getMaxValue(dictionaryLengths).key)
  const filtered = arr.filter(item => item?.toString().length == mostRepeted)
  console.log({ dictionaryLengths, mostRepeted, filtered });
  return filtered
}
console.log(getArrayOfMostRepeatedLength(
  [
    "12345",
    "abcde",
    98765,
    10,
    'aa',
  ]
));
export default getArrayOfMostRepeatedLength