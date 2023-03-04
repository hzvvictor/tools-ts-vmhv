const setValueOfNestedProperty = <T>(
  obj: T,
  property: keyof T | string,
  value: any
): T => {
  const nestedProperties = property.toString().split('.');
  const lastProperty = nestedProperties.pop();
  let nestedObj: any = obj;
  for (const nestedProperty of nestedProperties) {
    nestedObj = nestedObj[nestedProperty];
  }
  if (lastProperty) {
    nestedObj[lastProperty] = value;
  }
  return obj;
}
export { setValueOfNestedProperty as default }