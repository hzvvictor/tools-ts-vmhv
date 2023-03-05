

const getMaxValue = (obj: Record<string, number>): { key: string; value: number; } => {
  let value = -Infinity;
  let key = '';

  for (const _key in obj) {
    if (obj[_key] > value) {
      value = obj[_key];
      key = _key;
    }
  }

  return { key, value };
};


export default getMaxValue;