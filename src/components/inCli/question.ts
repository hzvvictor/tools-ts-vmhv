import readline from 'readline';
const question = (message: string) => new Promise((resolve, reject) => {
  const logline = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  logline.question(message, res => {
    logline.close();
    return resolve(res)
  })
})
export default question;
question('Introduce la edad: ')
  .then(res => console.log(`La edad es ${res}`))