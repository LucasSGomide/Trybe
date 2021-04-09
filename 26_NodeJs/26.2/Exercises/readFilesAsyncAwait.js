const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Qual arquivo você deseja ler ?'
});

const readfileAsyncAwait = async () => {
  rl.prompt();
  rl.on('line', (answer) => {
    fs.readFile(`${answer}.txt`, "utf8", (err, content) => {
      if (err && err.code == 'ENOENT') throw new Error (`Erro ao ler arquivo que não existe: ${err.path}`);
      console.log(content)
      return (content);
    })
  })
}

const readFile = async () => {
  try {
    const result = await readfileAsyncAwait();
    console.log(result)
  } catch (error) {
    console.log(error)
  }
};

readFile();
