//towersOfHanoi is an object that contains my board (an array of arrays),
// and all my functions in addition to my counters.
const towersOfHanoi = {
  // log the number of player moves
  movesCount: movesCount = 1,
  //userInput for what disc they want to put in the suitable Peg function
  myDisc: 1, //userInput; try for all 3 values;
  // create an initialize function for resetting the game
  clearBoardAndMoves: clearBoardAndMoves = function(){
    //resets the board by returning the original board
    return [[3, 2, 1],
      [],
      []
    ]
    //resets moves 1 for counter
    this.movesCount = 1;
  },
//the board
  board: [[3, 2, 1],
    [],
    []
  ],
  //a function that prints a copy of the board with the pegs
  printBoard: function(){
     //uses map function to create a new array
     return this.board.map(function (element) {
       //returns with the peg '---'
       return "---" + element;
     });

   },
   //moveDisc function moves the topDiscOnStartPeg from startPeg to an endPeg
   //endPeg is empty or topDiscOnEndPeg is the correct size
 moveDisc: moveDisc = function (startPeg, endPeg) {
   //below represents the last peg in the start position
  const topDiscOnStartPeg = this.board[startPeg-1][this.board[startPeg-1].length-1];
  //defines the topDiscOnEndPeg as a number for comparison
  const topDiscOnEndPeg = this.board[endPeg-1][this.board[endPeg-1].length-1];
    //checks if a disc at endPeg (if it's empty) & if (topDiscOnStartPeg < topDiscOnEndPeg)
  if (!([endPeg-1].length === 0) && (topDiscOnStartPeg > topDiscOnEndPeg)) {
        // return the original array before you moved it
      console.log('you have made an illegal move!')
      //if the move is allowed it will occur as outlined below
  } else {
    // removes the topDiscOnStartPeg off of startPeg
  this.board[startPeg-1].pop(topDiscOnStartPeg);
    // pushes topDiscOnStartPeg to the endPeg if the conditions(empty array or biggerDisc) are met
  this.board[endPeg-1].push(topDiscOnStartPeg);
};
  //logs the number of moves
    console.log('you have made ' + this.movesCount++ +' move(s).');
},
//in order to use filter and check which pegs where myDisc can fit
  suitablePeg: suitablePeg = function (){
    //first suitablePeg function puts the pegs and discs in an object with specific properties
    let suitablePegObjectInArray = [
      { pegName: 1, index:0, length: this.board[0].length, topDisc: this.board[0][this.board[0].length-1] },
      { pegName: 2, index:1, length: this.board[1].length, topDisc: this.board[1][this.board[1].length-1] },
      { pegName: 3, index:2, length: this.board[2].length, topDisc: this.board[2][this.board[2].length-1] }
    ];
  //the suitablePeg filter function returns the Pegs that suitable in the form of an object
  const suitablePegFilterFunction = suitablePegObjectInArray.filter(function(peg){
    // if the array is Empty of if the topDisc on the peg is greater than myDisc
    return peg.length===0 || peg.topDisc > this.myDisc;
  });
  //logs the suitable pegs object when you invoke the suitablePeg function.
  console.log (suitablePegFilterFunction)},

//this function uses the reduce function twice to log a single array and then a sum
//** I don't think it's doing what it's supposed to but it works
  checkWinner: function () {
    //logs the board once the player has completed to see if they won.???
    //using the reduce method to turn an array of arrays into a single array
    let winningBoard = this.board.reduce(function(total, amount) {
      //uses concat to combine multiple arrays into one
      return total.concat(amount);
    }, []);
    console.log(winningBoard);
    // if it looks like on [3,2,1 on peg2 or peg3]
    if(winningBoard = [3,2,1]){
        console.log('you have won the game!')
    }
    //using the reduce method to turn arrays into a sum
    let sum = winningBoard.reduce(function(total, amount){
      return total + amount;
    }, 0);
      //logs the total number of values should always equal 6.
      console.log(sum);
  },
//if the player wins, it should automatically reset the board to its original status
  resetGame: resetGame = function (){
    //this resets movesCount & board to its original status
     this.board = this.clearBoardAndMoves();
   }
};
