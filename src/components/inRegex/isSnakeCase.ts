const isSnakeCase = (string) => (
  /_[a-zA-Z]/gi.test(string)
)
export default isSnakeCase