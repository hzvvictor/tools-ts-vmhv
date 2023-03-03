import getValueOfNestedProperty from "./getValueOfNestedProperty";

const getMaxValue = <T>(
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
export { getMaxValue as default }