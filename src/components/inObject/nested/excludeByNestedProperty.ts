import getValueOfNestedProperty from "./getValueOfNestedProperty";

const excludeByNestedProperty = <T>(
  arr: T[],
  propiedad: string,
  valor: any
): T[] => {
  return arr.filter(obj => {
    const nestedObj = getValueOfNestedProperty(obj, propiedad);
    return nestedObj !== valor;
  });
}
export { excludeByNestedProperty as default }
