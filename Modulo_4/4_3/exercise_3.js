let number = 5;
let linha = "";
let simbolo = '*';
let posInicial = number

// Ele percorre o primeiro for 

for (let indexExterno = 0; indexExterno <= number; indexExterno += 1) {
  for (let indexInterno = 0; indexInterno < number; indexInterno += 1) {
    if (indexInterno < posInicial) {
      linha += " "
    } else {
      linha += "*"
    }
  }
  console.log(linha)
  posInicial -= 1
  linha = ""
}