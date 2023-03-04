import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

const addInAll = <T>(arr: T[], property: string, valor: any): T[] => {
  return arr.map((obj) => {
    const nestedObj = getValueOfNestedProperty(obj, property);
    if (nestedObj) {
      if (typeof nestedObj === 'object') {
        Object.assign(nestedObj, valor);
      } else {
        throw new Error(`La propiedad "${property}" no es un objeto`);
      }
    } else {
      throw new Error(`La propiedad "${property}" no existe en el objeto`);
    }
    return obj;
  });
}
export { addInAll as default }