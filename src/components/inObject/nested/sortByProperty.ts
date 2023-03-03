import getValueOfNestedProperty from "./getValueOfNestedProperty";

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