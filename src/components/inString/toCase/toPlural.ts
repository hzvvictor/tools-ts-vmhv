const toPlural = (string: string, toLowerCase: boolean): string => {
  let formated = string.trim();
  const reg = new RegExp(`(s|S)$`, 'gi')
  const isPlural = reg.test(string);

  formated += (isPlural) ? '' : 's';

  if (toLowerCase)
    return formated.toLowerCase()
  else
    return formated
};
export default toPlural;