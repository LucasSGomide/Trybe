// Rota: /user/:id
// put
// Objetivo: Deve receber no campo status um boleano e alterar o status do usuário correspôndente. Se o campo status não for um boleano, deve retornar o error "status isn't a boolean". Caso nao exista usuário correspondente, deve rotornar o error "user isn't found".
// Use o array abaixo para simular o banco de dados:

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const data = require('./data-base/dataBase');

app.use(bodyParser.json());

app.post('/user/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const status = req.body.status;
  const checkId = data.find(element => element.id === id);

  if (!checkId) throw new Error("user isn't found" );
  if (typeof status !== 'boolean') throw new Error("status isn't a boolean");

  data.forEach(element => {
    if (element.id === id) {
      element.isActive = status;
    }
  });

  res.send(`${checkId.isActive} Status:${status}`);

  next();
});

app.use((err, _req, res, _next) => {
  if (err.message === "user isn't found") res.status(404).json({ error: err.message });
  if (err.message === "status isn't a boolean") res.status(400).json({ error: err.message });
});

app.listen(3000);
