
const getLengthArrDictionary = (items: (string | number)[] = []): Record<string, number> => {
  const dictionary: Record<string, number> = {};
  for (const _item of items) {
    const item = _item.toString().length.toString();
    if (item in dictionary) {
      dictionary[item]++;
    } else {
      dictionary[item] = 1;
    }
  }
  return dictionary;
};

export default getLengthArrDictionary