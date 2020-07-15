// Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.


// Criar um novo array
// 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index != numbers.length - 1) {
      newNumbers.push(numbers[index] * numbers[index + 1])
    } else {
      newNumbers.push(numbers[index] * 2)
    }
    }

    console.log(newNumbers)
    console.log(index)

//    45,  27,  57, 1330,
//  560, 800, 200,   70,
//  945,  54