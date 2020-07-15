// Meu algoritimo é mais simples.
// Mas não sei explicar o .filter(=> ...)

let numeros = [ 0, 11, 21, 30, 60, 24 ];

let sorteio = [ 0, 10, 20, 31, 59, 23 ];

let diff = numeros.filter(x => sorteio.indexOf(x) === -1);

console.log(diff.length)

if (diff.length === 0) {
  console.log('Ganhou na MEGA')
} else if (diff.length === 1) {
  console.log('Quase lá, acertou 5')
} else if (diff.length === 2) {
  console.log('Ganhou a quadra')
} else {
  console.log('Tente outra vez !')
}
