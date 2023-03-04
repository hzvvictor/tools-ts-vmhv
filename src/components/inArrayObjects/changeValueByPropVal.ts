import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

const changeValueByPropVal = <T>(
  arr: T[],
  property: string,
  searchValue: any,
  newValue: any
): T[] => {
  return arr.map(obj => {
    const nestedObj = getValueOfNestedProperty(obj, property);
    if (nestedObj === searchValue) {
      const nuevoObj = { ...obj };
      let nestedNuevoObj = nuevoObj;
      const props = property.split('.');
      for (let i = 0; i < props.length - 1; i++) {
        nestedNuevoObj = nestedNuevoObj[props[i]];
      }
      nestedNuevoObj[props[props.length - 1]] = newValue;
      return nuevoObj;
    } else {
      return obj;
    }
  });
}

export { changeValueByPropVal as default }