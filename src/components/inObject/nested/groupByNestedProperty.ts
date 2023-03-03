import getValueOfNestedProperty from "./getValueOfNestedProperty";

const groupByNestedProperty = <T>(
  arr: T[],
  propiedad: string
): { [key: string]: T[] } => {
  const resultado: { [key: string]: T[] } = {};
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, propiedad);
    if (nestedObj !== null) {
      const key = nestedObj.toString();
      if (!resultado[key]) {
        resultado[key] = [];
      }
      resultado[key].push(obj);
    }
  }
  return resultado;
}
export { groupByNestedProperty as default }