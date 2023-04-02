const snakeToSnakeCapitalized = (string: string, isFirstCapitalized = false) => {
  const snakeCaseRegex = /_[a-z]/g;
  const firstCapitalizedRegex = /(_[a-z]|^[a-z])/g;
  const regexToUse = isFirstCapitalized ? firstCapitalizedRegex : snakeCaseRegex;

  return string.replace(regexToUse, (match) => match.toUpperCase());
};

export { snakeToSnakeCapitalized as default }