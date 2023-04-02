const snakeToCamelCase = (string: string) => (
  string
    .replace(/_[a-zA-Z]/g, letter => (
      letter.slice(1).toUpperCase()
    ))
);
//? console.log(snakeToCamelCase("snake_case_to_camell_case"))
export { snakeToCamelCase as default }