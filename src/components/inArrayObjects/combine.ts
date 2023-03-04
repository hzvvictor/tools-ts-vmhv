import getValueOfNestedProperty from "../inObject/inNestedProperty/get";

const combine = <T>(
  arr1: T[],
  arr2: T[],
  property: string
): T[] => {
  const resultado: T[] = [];
  const agrupado1 = getValueOfNestedProperty(arr1, property);
  const agrupado2 = getValueOfNestedProperty(arr2, property);
  for (const key in agrupado1) {
    if (agrupado2.hasOwnProperty(key)) {
      resultado.push(...agrupado1[key], ...agrupado2[key]);
    } else {
      resultado.push(...agrupado1[key]);
    }
  }
  for (const key in agrupado2) {
    if (!agrupado1.hasOwnProperty(key)) {
      resultado.push(...agrupado2[key]);
    }
  }
  return resultado;
}
export { combine as default }