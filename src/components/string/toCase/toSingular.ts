const toSingular = (string: string, toLowerCase?: boolean): string => {
  const reg = new RegExp(`(s|S)$`, 'gi')
  let formated = string.trim().replace(reg, '')
  if (toLowerCase)
      return formated.toLowerCase()
  else
      return formated
};
export default toSingular;