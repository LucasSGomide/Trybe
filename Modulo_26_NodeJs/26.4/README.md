## Express

## Instalação:
### 1
-y: Inicializa de forma default um modulo NodeJs.
-D: dependencia de desenvolvimento.

``` shell
npm init -y

npm i express

npm i nodemon -D 
``` 
### 2:
Adicionar no _package.json_ ("dev": "nodemon index.js")

### 3:
Criar pasta `src`
Criar arquivo `index.js` e `routes.js` e adicionar a estrutura básica da app express.

``` javascript
const express = require('express'); // Import
const app = express(); // Criação do express

// Middleware-> ouve por requisições, utilizando método GET.
app.get('/', (req, res) => { // '/' = home (request, responce).
  res.send("Hello world"); // Resposta enviada ao acessar home.
});

app.listen(3000); // Porta que está sendo ouvida
```
### 4:
Inicializar a aplicação.

``` shell
npm run dev
```

### 5:
Acessar http://localhost:3000/ (3000 = porta)

## Roteamento

Uma rota/endpoint é definida pelo caminho e pelo método HTTP (ex: get)

### Declaração de rota: 
`app.METODO(caminho, callback)`

### Função callback:

Recebe 3 parâmetros `app.METODO(caminho, (req, res, next) => )`

**req**: É a solicitação realizada através do protocolo HTTP, enviadas pelo cliente ao servidor.

**res**: É a resposta à solicitação do cliente pelo servidor.

**next**: Função que diz ao express que o callback terminou de ser executado e que deve executar o próximo callback da _pipeline_.

**métodos**: GET, POST, ALL, PUT, DELETE...

## Caminhos:
### Rotas dinâmeicas:
`GET /api/people/:id` -> Rotas dinâmicas

``` javascript
// id é um sub atributo do objeto req, que contém params, que contém id.
app.get('/api/people/:id', function (req, res) {
  res.send(req.params.id);
});
```

### Regex na rota:

``` javascript
// Qualquer rota que tem o padrão de terminar com "be".
// Exemplo: trybe, wannabe, letitbe
app.get(/.*be$/, function (req, res) {
  res.send('/.*be$/');
});
```
## Query String

`https://minha-api.com/endpoint/1?name=exemplo&number=10`

Parâmetros da rota:
- name | number

### Acessando Parâmetros da Query String

**OBS:** Sempre que receber números na query string converter utilizando alguma função `parse()`. 

``` javascript
app.get('/hello', (req, res) => {
  const name = req.query.name;

  res.status(200)
    .json({ message: `Hello, ${name}` });
})
```

## Body Parser

``` shell
npm i body-parser
```

**OBS:** Normalmente utilizado para tratar o `body` de requisições do tipo `post` quando desejamos inserir parâmetros no `body`é pra .

``` javascript
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Aqui o body-parser entra convertendo o body para JSON

app.post('/', (req, res) => {
  const nome = req.body.name
  res.send(`Meu nome é ${nome} e manjo dos sambas`)
})
```

## Middlewares Pattern

Uma rota não é um middleware?

### next()

``` javascript
const express = require('express');
const app = express();

// Registra um novo middleware
// A cada request retornará um log do método e do caminho.
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path}`)

  next(); // Chama o próximo middleware/rota
});
```

### Registrar middlewares:

``` javascript
// Primeiro a ser chamado
app.use(middleware1);
// Segundo a ser chamado
app.use(middleware2);
```

### Transferência de dados entre middlewares ou callbacks:

``` javascript
/* Primeiro a ser chamado */
app.use(middleware1);
/* Segundo a ser chamado */
app.use(middleware2);
Outra aplicação comum é passar dados de um middleware para outro ou para nossa callback da rota.
Copiar
const express = require('express');
const app = express();

const requestTimeMiddleware = function (req, res, next) {
  // Atribuição da data de agora para o request
  req.requestTime = Date.now();
  next();
};

app.use(requestTimeMiddleware);

app.get('/', function (req, res) {
  // utilização do dado transferido ?
  const responseText = `Request feito às ${req.requestTime}`;
  res.send(responseText);
});

app.listen(3000);
```
## Router:

