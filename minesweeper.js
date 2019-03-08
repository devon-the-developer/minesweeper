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

//document.getElementById('resetButton').addEventListener('click', resetBoard);


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
  board.cells.push(new Cell(0, 0, false));
  board.cells.push(new Cell(0, 1, false));
  board.cells.push(new Cell(0, 2, false));
  
  board.cells.push(new Cell(1, 0, false));
  board.cells.push(new Cell(1, 1, true));
  board.cells.push(new Cell(1, 2, true));

  board.cells.push(new Cell(2, 0, false));
  board.cells.push(new Cell(2, 1, true));
  board.cells.push(new Cell(2, 2, false));
}

function resetBoard() {
  document.location.reload()
}