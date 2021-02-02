# 26.2 -> NodeJS Assíncrono

## FS
const s = require('fs') -> Método para leitura de arquivos em nodeJs.
##  writeFile
const fs = require('fs'); -> Método para escrita de arquivos em nodeJs.

const fs = require('fs').promises; -> Método nativo que transforma as funções em Promises.

## fs.readFile

## node-style Callbacks
São, por convenção, a melhor maneira de se estruturar uma callback.

ex:
``` javascript
fs.readFile(file_name, encoding, (err, data) => {
  // Tratamento de erros
}
```

### file_name
Nome do arquivo

### Ecoding
O tipo de encoding que escolhemos é muito importante. Se não for especificado, por padrão, o arquivo será lido como raw buffer , que é um formato muito útil quando estamos enviando dados através de requisições HTTP.

### Callback
-> err: Caso retorne erro este parâmetro virá preenchido com os dados relativos ao erro. Caso não retorne erro será undefined.
-> data: Virá preenchido com o conteúdo do arquivo, caso retorne erro vem undefined.

### Storage
**Nota** : É importante lembrar que esses dados ficam armazenados em memória. Ou seja, caso você tenha um arquivo de 1GB de texto, você trará 1GB de dados para a memória RAM.

## Promises

ex: Sintaxe básica de promises.
``` javascript
const prom = new Promise((resolve, reject) => {
  // Aqui é onde vamos realizar a lógica que precisamos
  // para resolver ou rejeitar a promise
});
```

``` javascript
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
};
```

Ex: Evitando callback hell através de promises.

``` javascript
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);
    return readFilePromise('file2.txt');
  })
  .then(content => {
    console.log(`Lido file2.txt com ${content.byteLength} bytes`);
    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`Lido file3.txt com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });
```

## Async/Await

``` javascript
const fs = require('fs');

const text = 'Texto teste 2';

async function writingFiles() {
  await fs.writeFile('./meu-arquivo.txt', text, (err) => {
    if (err) return console.log(err);
    console.log(text);
  })
}

writingFiles();
```

### Método FS com Promises Inclusas

``` javascript
const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo.txt', text);
}

writingFiles();
```

### Propriedade Promisify

``` javascript
const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const text = 'Texto teste 4';

function writingFiles() {
  writeFile('./meu-arquivo.txt', text);

  // Tratar erros, possível que os parâmetros data
  // e erro sejam passados na função promissificada.
}

writingFiles();
```
## Flags

``` javascript
const fs = require('fs');

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' }, function (err) {
  // A flag wx abre o arquivo para escrita caso ele não exista
  /*
    Flag =>
      w: write
      x: exclusive
  */
  // Se o arquivo existir, um erro é retornado
  if (err) throw err;
  console.log('Arquivo salvo');
});
```

## Promise.all

É um método da Promise que nos permite passar um array de Promises e receber, de volta, uma única Promise, que será resolvida com os resultados de todas as Promises, assim que todas elas forem resolvidas. Ele também nos permite utilizar um único catch , que será chamado caso qualquer uma das Promises seja rejeitada.

Ex: 
``` javascript
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

Promise.all([
  readFilePromise('file1.txt'),
  readFilePromise('file2.txt'),
  readFilePromise('file3.txt')
])
.then(([file1, file2, file3]) => {
  const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
  console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
})
.catch((err) => {
  console.error(`Erro ao ler arquivos: ${err.message}`);
})
```