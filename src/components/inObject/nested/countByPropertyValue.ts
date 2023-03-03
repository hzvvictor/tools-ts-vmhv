import getValueOfNestedProperty from "./getValueOfNestedProperty";

interface Objeto<T> {
  [key: string]: T | Objeto<T>;
}
const countByPropertyValue = <T>(
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
export { countByPropertyValue as default }

