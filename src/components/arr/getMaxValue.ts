/**
 * Encuentra el valor máximo y su índice en un arreglo de números.
 * @param {number[]} arr - El arreglo de números donde buscar el valor máximo.
 * @returns {{value: number; index: number}} - Un objeto que contiene el valor máximo y su índice en el arreglo.
*/
const getMaxValue = (arr: number[]): { value: number; index: number } => {
  let value = -Infinity;
  let index:number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > value) {
      value = arr[i];
      index = i;
    }
  }

  return { value, index };
};

export default getMaxValue