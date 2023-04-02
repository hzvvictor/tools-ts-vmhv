const isEmpty = (array: Array<any>) => {
  const isArray = Array.isArray(array)
  if (!isArray) return false;

  const hasValues = (array.length == 0);
  return hasValues;
}

export default isEmpty