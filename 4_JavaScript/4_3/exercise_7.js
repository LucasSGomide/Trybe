number = 18;
primo = 0;

for (let cont = 0; cont <= number; cont += 1) {
  if (number % cont === 0) {
    primo += 1
  }
}

if (primo === 2) {
  console.log("Número é primo")
} else {
  console.log("Número não é primo")
}


