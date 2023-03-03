import getValueOfNestedProperty from "./getValueOfNestedProperty";

const filterByCondition = <T>(
  arr: T[],
  property: string,
  condition: (value: any) => boolean
): T[] => {
  let resultado: T[] = [];
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, property);
    if (condition(nestedObj)) {
      resultado.push(obj);
    }
  }
  return resultado;
}
export { filterByCondition as default }
