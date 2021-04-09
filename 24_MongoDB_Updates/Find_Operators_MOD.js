// O operador $mod seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado (ou seja, executa a operação módulo ).

// $mod
// Retorna itens com filtro por módulo. (OBS: retorna itens onde o resto da operação esteja entre 0 e 1)

// Exemplo:

// { _id: 1, item: "abc123", qty: 0 },
// { _id: 2, item: "xyz123", qty: 5 },
// { _id: 3, item: "ijk123", qty: 12 }

db.inventory.find({ qty: { $mod: [4, 0] } }); // Retorna o campo quanidade onde o valor seja divisivel por 4.