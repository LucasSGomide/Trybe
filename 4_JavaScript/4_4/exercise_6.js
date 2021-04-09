// Declarar variáveis

let chessPieces = "Pawns"
chessPieces = chessPieces.toLowerCase()

// Programa que cheque se os angulos A B e C formam um triangulo:
function pieceChecker(chessPieces){
  let pieceMove;
  switch (chessPieces) {
    case "pawn":
      return pieceMove = "The Pawn: Vertically foward one square with the option... (Can't jump over pieces)";
    case "knight":
      return pieceMove = "The Knight: In 'L' shape two squares in horizontal or vertical then one square horizontally or vertically (Can jump over pieces)" ;
    case "bishop":
      return pieceMove = "The Bishop: Diagonally any number of squares (Can't jump over pieces)";
    case "rook":
      return pieceMove = "The Rook: Horizontally or Vertically any number of squares (Can't jump over pieces)";
    case "queen":
      return pieceMove = "The Queen: Diagonally, horizontally, vertically any number of squares. (Can't jump over pieces)" ;
    case "king":
      return pieceMove = "The King: One square in any direction (special move castling)" ;
    default:
      return pieceMove = "Sorry there's no such piece.";
  }
}

console.log(pieceChecker(chessPieces))