const toTitleCase = (string: string): string => {
  return string.replace(
    /[a-zA-Z0-9]+(?![^a-zA-Z0-9]$(?=[^a-zA-Z0-9]))/g,
    (match) => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
  );
};

export default toTitleCase;