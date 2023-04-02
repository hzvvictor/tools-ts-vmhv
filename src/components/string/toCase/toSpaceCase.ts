const toSpaceCase = (string: string): string => {
  return string.replace(/([A-Z]?[a-z]+)[_-]?(?=[A-Z])/g, '$1 ');
};
export default toSpaceCase;