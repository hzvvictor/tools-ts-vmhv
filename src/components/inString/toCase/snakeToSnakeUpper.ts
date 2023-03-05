const snakeToSnakeUpper = (string) => (
  string
    .replace(/_[a-z]/g, letter => (
      letter.toUpperCase()
    ))
)
// console.log(snakeToSnakeUpper('string_normal_to_snaked_upper'))
export { snakeToSnakeUpper as default }