

const getMaxValue = (obj: Record<string, number>): { value: number; index: string } => {
  let value = -Infinity;
  let index = '';

  for (const key in obj) {
    if (obj[key] > value) {
      value = obj[key];
      index = key;
    }
  }

  return { value, index };
};


export default getMaxValue;