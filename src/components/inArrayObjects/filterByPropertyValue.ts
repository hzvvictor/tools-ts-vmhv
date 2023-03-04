import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

const getByPropertyValue = <T>(
  arr: T[],
  propiedad: string,
  valor: any
): T[] => {
  let resultado: T[] = [];
  for (const obj of arr) {
    const nestedObj = getValueOfNestedProperty(obj, propiedad);
    if (nestedObj === valor) {
      resultado.push(obj);
    }
  }
  return resultado;
}
export { getByPropertyValue as default }