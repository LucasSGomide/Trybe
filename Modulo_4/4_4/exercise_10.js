// Declaração de variáveis

let productValue = 100;
let sellingValue = 120;

function profitAfterTax(productValue, sellingValue) {
  let profit = (sellingValue - productValue) * (0,8) * (1000)

  if (productValue > 0 && sellingValue > 0) {
    return ("Profit: R$ " + profit)
  } else {
    return ("Error")
  }
}

console.log(profitAfterTax(productValue, sellingValue))
