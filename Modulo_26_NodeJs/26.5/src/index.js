// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const data = require('./data-base/dataBase');

// app.use(bodyParser.json());

// app.put('/user/:id', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   const { status } = req.body;
//   const checkId = data.find(element => element.id === id);

//   if (!checkId) throw new Error("user isn't found" );
//   if (typeof status !== 'boolean') throw new Error("status isn't a boolean");

//   data.forEach(element => {
//     if (element.id === id) {
//       element.isActive = status;
//     }
//   });

//   res.send(checkId);

//   next();
// });

// app.use((err, _req, res, _next) => {
//   if (err.message === "user isn't found") res.status(404).json({ error: err.message });
//   if (err.message === "status isn't a boolean") res.status(400).json({ error: err.message });
// });

// app.listen(3000);




// // Rota: /user/:id
// // put
// // Objetivo: Deve receber no campo status um boleano e alterar o status do usuário correspôndente. Se o campo status não for um boleano, deve retornar o error "status isn't a boolean". Caso nao exista usuário correspondente, deve rotornar o error "user isn't found".


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const data = require('./data-base/dataBase');

app.use(bodyParser.json());

app.put('/user/:id', (req, res, next) => {
  const user = parseInt(req.params.id);
  const userID = data.filter((usuario) => usuario.id === user)[0];
  const state = req.body.status;
  
  if(!userID) throw new Error("user isn't found");
  if(typeof state !== 'boolean' ) throw new Error("status isn't a boolean");

  data.forEach(usuario => {
    if(usuario.id === user) {
      usuario.isActive = state;
    }  
  });

  res.send(userID);
  next();
});

app.use((err, _req, res, _next) => {
  if(err.message === "user isn't found"){
    res.status(404).json({error: err.message});
  } else {
    res.status(444).json({error: err.message});
  }
});

app.listen(3000);
