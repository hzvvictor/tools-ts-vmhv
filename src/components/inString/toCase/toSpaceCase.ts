const toSpaceCase = (string: string): string => {
  return string.replace(/[^a-zA-Z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
};
export default toSpaceCase;