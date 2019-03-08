document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = { cells: [
    
  ]};
  generateCells(); 

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++){
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  
  lib.initBoard()
}


//Check to see if player has won
document.addEventListener('click', checkForWin);



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var countOfMarkedMines = 0;
  var countOfTotalMines = 0;

  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true) {
      countOfTotalMines++;
    }
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      countOfMarkedMines++;
    }
    //if (board.cells[i].hidden === true && board.cells[i].isMine === false) {
     // return;
    //}
  }

  if (countOfMarkedMines === countOfTotalMines) {
    lib.displayMessage('You Win!!');
  } else {
    return;
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var howManyMinesAround = 0;
  var surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (var i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      howManyMinesAround++;
    } 
  }
  return howManyMinesAround;
}

//Helps Automatically generate board
//Object Constructor for Cells
function Cell(rowNum, colNum, mine) {
  this.row = rowNum;
  this.col = colNum;
  this.isMine = mine;
  this.isMarked = false;
  this.hidden = true;
}

//makes new Cell objects and pushes them into var board's cells property
function generateCells() {
  board.cells.push(new Cell(0, 0, mineOrNot()));
  board.cells.push(new Cell(0, 1, mineOrNot()));
  board.cells.push(new Cell(0, 2, mineOrNot()));
  board.cells.push(new Cell(0, 3, mineOrNot()));
  
  board.cells.push(new Cell(1, 0, mineOrNot()));
  board.cells.push(new Cell(1, 1, mineOrNot()));
  board.cells.push(new Cell(1, 2, mineOrNot()));
  board.cells.push(new Cell(1, 3, mineOrNot()));

  board.cells.push(new Cell(2, 0, mineOrNot()));
  board.cells.push(new Cell(2, 1, mineOrNot()));
  board.cells.push(new Cell(2, 2, mineOrNot()));
  board.cells.push(new Cell(2, 3, mineOrNot()));

  board.cells.push(new Cell(3, 0, mineOrNot()));
  board.cells.push(new Cell(3, 1, mineOrNot()));
  board.cells.push(new Cell(3, 2, mineOrNot()));
  board.cells.push(new Cell(3, 3, mineOrNot()));
}

//Way of randomising where the mines appear, 1/3rd chance of a tile having a mine
function mineOrNot() { 
  var randomNum = Math.floor(Math.random() * 9) 
  if (randomNum === 0 || randomNum === 1 || randomNum === 2) {
    return true;
  } else {
    return false;
  }
}
/*function betterGenerateCells() {
  var sizeOfBoard = 17;
  var counterOne = 0;
  var counterTwo = 0;
  for (i = 0; i < sizeOfBoard; i++) {
    if (counterTwo === 4) {
      counterOne++;
      counterTwo = 0;
    }
    board.cells.push(new Cell(counterOne, counterTwo, mineOrNot()));
    counterTwo++;
    console.log(counterTwo);
  }
} */

function resetBoard() {
  document.location.reload()
}