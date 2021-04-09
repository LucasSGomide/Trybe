# Arquitetura MSC

## Camada de Modelo (M):
Arquivos onde iremos executar as operações do banco de dados, como criar conexões e executar queries.

- Todo acesso aos dados deve passar por essa camada.
- Responsável por abstrair completamente os detalhes de acesso e armazenamento de dados.
- Responsável por estabelecer uma conexão com o banco de dados.
- O **Model/Modelo** é uma camada independente, ou seja, modificações em outras camadas não podem afetá-lo.

## Camada de Serviço (S):
Arquivos onde iremos estruturar nossas regras de negócio, geralmente é quem chama os métodos definidos na camada de modelo.

## Camada de Controladores (C):
Interface mais próxima do usuário ou de uma requisição, vai processar e chamar as devidas funções da camada de modelo.

## Comunicação - NodeJS e MySQL

#### 1. Instalar nas dependências do projeto. 
``` bash
 npm install mysql2
 npm install express
 npm install nodemon
``` 
#### 2. Criar arquivo connection.js
Criar uma pasta model na raíz do projeto e adicionar um arquivo `connection.js`.

``` javascript
const mysql = require('mysql2/promise'); // Modulo de promises do MySQL

const connection = mysql.createPool({
  host: 'localhost', // local de armazenamento
  user: 'root',
  password: 'senha123',
  database: 'model_example'}); // nome da base de dados

module.exports = connection;
``` 

## Exemplo de utilização de um modelo para interagir com o banco de dados.
``` javascript
const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

return {
  id,
  firstName,
  middleName,
  lastName,
  name: fullName,
 };
};

// Serializa o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute( // Desestrutura authors (Assim não retorna infos indesejadas).
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;', // Query a ser executada.
  );
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
  getAll,
};
```

## Exemplo de utilização do modelo Authors.

``` javascript
const express = require('express');

const Author = require('../models/Author');

const app = express();

app.get('/authors', async (\_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(author);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
```

## DICAS: Tratamento de Erros 

- Library **Boom**
- Módulo **rescue** do NodeJs

``` javascript
const express = require('express');
const rescue = require('express-rescue'); // Import para tratar erros.
const Author = require('../models/Author');

const app = express();

app.get('/authors', rescue(async (_req, res, next) => { // Rescue faz o "catch" do erro e joga pro middleware de erros.
  const authors = await Author.getAll();

  res.status(200).json(author);
});

app.use((err, _req, res, _next) => { // Middleware de erros.
  console.log(err.message); // Logar o detalhe do erro para manutenção de código.

  res.status(500).json({ message: 'Erro Interno' }) // Retorno genérico para o front.
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
``` 