const capitalize = (string: string): string => {
  const search = /[^a-zA-Z\d+]+/g;
  const words = string.split(search);
  const out: string[] = [];
  words.filter((word) => {
    const first = word[0];
    if (!first?.trim()) return;
    const rest = word.slice(1).toLowerCase();
    const newWord = first.toUpperCase() + rest;
    out.push(newWord);
  });
  return out.join(' ');
};
// const arr = ['u ', 'test ARR', 'test arr', 'test-arr', 'test_arr'];
// arr.forEach((str) => { console.log({ str: capitalize(str) }) });
export default capitalize;