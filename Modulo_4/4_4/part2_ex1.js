function palindromeCheck(texto) {
  var reversedText = '';
  for (let letra = texto.length - 1; letra >= 0; letra -= 1) {
    reversedText += texto[letra];
  }   if (reversedText === texto) {
    return ("Palíndrome -> " + texto +  "= " + reversedText)
  } else {
    return ("Não palíndrome -> " + texto + " != " + reversedText)
  }
}

console.log(palindromeCheck("Arara"))
