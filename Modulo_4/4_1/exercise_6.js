// Declarar variáveis

let chessPieces = "King"
chessPieces = chessPieces.toLowerCase()

// Programa que cheque se os angulos A B e C formam um triangulo:

let pieceMove;
switch (chessPieces) {
  case "pawn":
    pieceMove = "The Pawn: Vertically foward one square with the option... (Can't jump over pieces)";
    break;
  case "knight":
    pieceMove = "The Knight: In 'L' shape two squares in horizontal or vertical then one square horizontally or vertically (Can jump over pieces)" ;
    break;
  case "bishop": 
    pieceMove = "The Bishop: Diagonally any number of squares (Can't jump over pieces)";
    break;
  case "rook":
    pieceMove = "The Rook: Horizontally or Vertically any number of squares (Can't jump over pieces)";
    break;
  case "queen":
    pieceMove = "The Queen: Diagonally, horizontally, vertically any number of squares. (Can't jump over pieces)" ;
    break;
  case "king":
    pieceMove = "The King: One square in any direction (special move castling)" ;
    break;
  default:
    pieceMove = "Sorry there's no such piece.";
}

console.log(pieceMove)