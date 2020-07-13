// Declaração de variáveis

let aliquotIR;
let aliquotINSS;

let grossSallary = 3500.00;

if (grossSallary <= 1556.94) {
  aliquotINSS = grossSallary * 0.08;
} else if (grossSallary <= 2594.92) {
  aliquotINSS = grossSallary * 0.09;
} else if (grossSallary <= 5189.82) {
  aliquotINSS = grossSallary * 0.11;
} else {
  aliquotINSS = 570.88;
}


baseSallary = grossSallary - aliquotINSS;
console.log(baseSallary)

if (baseSallary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSallary <= 2826.99) {
  aliquotIR = (baseSallary * 0.075) - 142.80;
} else if (baseSallary <= 3751.05) {
  aliquotIR = (baseSallary * 0.15) - 354.80;
} else if (baseSallary <= 4664.68) {
  aliquotIR = (baseSallary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSallary * 0.275) - 869.36;
}

let netSalary = baseSallary - aliquotIR

console.log(netSalary)
