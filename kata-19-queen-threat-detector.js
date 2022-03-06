
// function to generate chess board with two queen locations 
const generateBoard = function(whiteQueen, blackQueen) {
  let chessBoard = new Array(8);

  for (let a = 0; a < 8; a++) {
    chessBoard[a] = new Array(8);
  }

  for (let i = 0; i < 8; i ++) {
    for (let j = 0; j < 8; j++) {
      
      if (whiteQueen[0] == i && whiteQueen[1] == j) {
        chessBoard[i][j] = 1;
      } else if (blackQueen[0] == i && blackQueen[1] == j) {
        chessBoard[i][j] = 1;        
      } else {
        chessBoard[i][j] = 0;
      }

    }
  }
  return chessBoard;
}


// function to check if two queen positions are able to attack each other
const queenThreat = function(generatedBoard) {

  let queenOne = [];
  let queenTwo = [];

  // extract queen positions
  for (let i = 0; i < 8; i ++) {
    for (let j = 0; j < 8; j++) {
      if (generatedBoard[i][j] == 1 && queenOne.length == 0) {
        queenOne[0] = i;
        queenOne[1] = j;
      } else if (generatedBoard[i][j] == 1 && queenTwo.length == 0) {
        queenTwo[0] = i;
        queenTwo[1] = j;
      }
    }
  }

  // easy check -- for matching x or y indexes
  if (queenOne[0] == queenTwo[0] || queenOne[1] == queenTwo[1]) {
    return true;
  }

  // harder check -- for intersecting diagonal paths
  // paths intersect if the differences between the two X and Y components are the same
  let xDiff = Math.abs(queenOne[0] - queenTwo[0]);
  let yDiff = Math.abs(queenOne[1] - queenTwo[1]);

  if (xDiff == yDiff) {
    return true;
  }

  // if no intersecting paths (vertical, horizontal, diagonals) return false
  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));other 