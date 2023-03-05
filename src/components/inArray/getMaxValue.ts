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