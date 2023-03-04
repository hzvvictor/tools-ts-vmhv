import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

interface Objeto<T> {
  [key: string]: T | Objeto<T>;
}
const count = <T>(
  arr: T[],
  property: string,
  value: any
): number => {
  let count = 0;
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, property);
    if (nestedObj === value) {
      count++;
    }
  }
  return count;
}
export { count as default }

