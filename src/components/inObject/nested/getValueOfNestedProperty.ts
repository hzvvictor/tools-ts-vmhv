export const getValueOfNestedProperty = <T>(obj: T, property: string): any => {
  const props = property.split('.');
  let nestedObj = obj;
  for (const prop of props) {
    if (nestedObj.hasOwnProperty(prop)) {
      nestedObj = nestedObj[prop];
    } else {
      nestedObj = null;
      break;
    }
  }
  return nestedObj;
}

export { getValueOfNestedProperty as default }

