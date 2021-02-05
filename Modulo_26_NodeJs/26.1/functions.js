const calculateImc = (peso, altura) => {
  const IMC = peso / (altura * altura);
  if (IMC < 18.5) {
    return "Abaixo do peso (magreza)";
  } else if (IMC > 18.4 && IMC < 24.9) {
    return "Peso normal";
  } else if (IMC > 25 && IMC < 29) {
    return "Acima do peso (sobrepeso)";
  } else if (IMC > 30 && IMC < 34.9) {
    return "Obesidade grau I";
  } else if (IMC > 30 && IMC < 34.9) {
    return "Obesidade grau II";
  } else {
    return "Obesidade graus III e IV";
  }
};

module.exports = { calculateImc };
