// O operador $regex fornece os "poderes" das expressões regulares ( regular expressions ) para seleção de strings . MongoDB utiliza expressões regulares compatíveis com Perl ( PCRE ), versão 8.42, e com suporte a UTF-8 .

// $regex
// Possível fazer filtros com regex.

// Exemplo:

// { _id: 100, sku: "abc123", description: "Single line description." },
// { _id: 101, sku: "abc789", description: "First line\nSecond line" },
// { _id: 102, sku: "xyz456", description: "Many spaces before     line" },
// { _id: 103, sku: "xyz789", description: "Multiple\nline description" }

db.products.find({ sku: { $regex: /789$/ } });
//  Seleciona todos os documentos em que o campo sku termine com "789".

db.products.find({ sku: { $regex: /^ABC/i } }); // CASE SENSITIVE DESLIGADO
// O caractere i ao lado da expressão indica a opção case-insensitive. Dessa forma, apenas os documentos que contenham ABC no campo sku serão retornados, sem se importar se está em maiúsculo ou minúsculo.