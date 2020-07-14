// Class algorithm to check array numbers using loop for and if.

let numeros = [ 0, 11, 21, 30, 60, 24 ];
let numeros2 = [ 0, 11, 21, 30, 60, 24 ];
let numeros3 = [ 0, 11, 21, 30, 60, 24 ];

let sorteio = [ 0, 10, 20, 31, 59, 23 ];


numberOfHits = 0

for (let posicao = 0; posicao < sorteio.length; posicao += 1) {
  for (let posicaoInterna = 0; posicaoInterna < numeros.length; posicaoInterna += 1)
  if (sorteio[posicao] === numeros[posicaoInterna]) {
    numberOfHits += 1;
  }
}

console.log("Numeros sorteados: " + sorteio);
console.log("Nossa tentativa: " + numeros)
console.log("Acertos: " + numberOfHits)