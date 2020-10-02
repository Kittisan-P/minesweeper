document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click',checkForWin)
document.addEventListener('contextmenu',checkForWin)

// Define your `board` object here!
var board = {cells: []}
let size = 5;
boardSize();

function boardSize(){
  for(i = 0; i < size; i++){
    for(j=0;j< size; j++){
      board.cells.push({
        row: i,
        col: j,
        hidden: true,
        isMine: Math.round(Math.random() * .65)
      })
    }
  }
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  // This loop is to call countSurroundingMines to check if there are suronding mines.
  for(var i = 0; i < board.cells.length; i++){
    console.log(board.cells[i]);
    board.cells[i].surroundingMines = countSurroundingMines (board.cells[i])
  }
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  

  let mines = board.cells.filter(bomb => bomb.isMine == true)
  let notMines = board.cells.filter(notBomb => notBomb.isMine == false)
  let notHidden = board.cells.filter(nonHidden => nonHidden.hidden == false)
  let allMines = mines.every(bomb => bomb.isMarked == true)
  let noHidden = notMines.every(notBomb => notBomb.hidden == false)

  mineLength = allMines.length

  
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
  //var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  // console.log(surrounding)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let mines = 0

  //this loop is to check the mines around and add to mine count
  surrounding.forEach(element => {
      if(element.isMine){
        mines++
      }
  });
 // console.log(mines)
  return mines
}