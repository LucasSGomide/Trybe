// Atribui ao valor de um campo a data corrente , utilizando um tipo Date ou timestamp . Se você não especificar o tipo, por padrão, o MongoDB atribuirá o valor do tipo Date.

// $currentDate - Atribui a data CORRENTE ao campo.
// $type -> Define o tipo de TIMESTAMP { $type: "timestamp" } ou { $type: "date" }.

// Pode-se utilizar TRUE no lugar de type, desta forma ele setará o campo com o tipo DATE.

// sintaxe: { $currentDate: { <campo>: <typeSpecification>, ... } }

 
// Exemplo: 

db.customers.insertOne(
  { _id: 1, status: "a", lastModified: ISODate("2013-10-02T01:11:18.965Z") }
);

db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true,
      "cancellation.date": { $type: "timestamp" } // Atualiza para a data a atual no formato TIMESTAMP
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);