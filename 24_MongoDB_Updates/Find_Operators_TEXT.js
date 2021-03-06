// O operador $text faz uma busca "textual" em um campo indexado por um text index.

// $text

// Sintaxe:
// {
//   text:
//       {
//   search: <string>,
//   language: <string>,
//   caseSensitive: <boolean>,
//   diacriticSensitive: <boolean>
//       }
// }

// $search : Uma string com os termos que o MongoDB utilizará para fazer o parse e utilizará como filtro. Internamente, o MongoDB faz uma busca lógica ( OR ) sobre os termos, a menos que seja especificado como uma frase inteira;

// $language : Opcional. Esse campo determina a lista de stop words que será utilizada na tokenização da busca. Veja a lista de idiomas suportados. Se você passar o valor none , a busca utilizará uma tokenização simples sem utilizar nenhuma lista de stop words;

// $caseSensitive : Opcional. Recebe um valor booleano para habilitar ou desabilitar buscas case sensitive . O valor default é false , o que faz com que as buscas sejam case-insensitive . Veja mais informações sobre case-insensitive aqui;

// $diacriticSensitive : Opcional. Recebe um valor booleano para habilitar ou desabilitar busca diacritic sensitive . O valor default também é false.




