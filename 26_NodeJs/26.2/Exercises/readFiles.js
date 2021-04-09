const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Qual arquivo você deseja ler ?'
});

const readFilePromise = () => {
  return new Promise((resolve, reject) => {
    rl.prompt();
    rl.on('line', (answer) => {
      fs.readFile(`${answer}.txt`, "utf8", (err, content) => {
        if (err && err.code == 'ENOENT') reject(`Erro ao ler arquivo que não existe: ${err.path}`);

        resolve(content);
      })
    })
  })
};

readFilePromise()
  .then((content) => {
    console.log(content);
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(0);
  });
