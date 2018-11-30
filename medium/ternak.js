function generateBoard(str) {
  //your code here
  let alphabet = ['C', 'S', 'H', 'P']
  let animals = ['Cow', 'Sheep', 'Horse', 'Pig']
  let board = []

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < animals.length; j++) {
      if (str[i] === alphabet[j]) {
        board.push(animals[j])
      }
    }
  }
  return board
}

function getCagesAnimals(board) {
  //your code here

  let animals = ['Cow', 'Sheep', 'Horse', 'Pig']
  let amount = [2, 1, 2, 3]
  let arrCounter = []
  let arrCages = board
  let arrOutput = [arrCages]


  for (let j = 0; j < animals.length; j++) {
    arrCounter.push(0)
  }
  
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < animals.length; j++){
      if(board[i] = animals[j]){
        arrCounter[j]++
      }
      if(arrCounter[j]==amount[j]){
        arrOutput.push(board[j])
      }
    }
  }

  return board
}

// DRIVER CODE

console.log(getCagesAnimals(generateBoard('CHCPSCSHHPSHCPPH')))
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ]
]
*/
console.log(getCagesAnimals(generateBoard('CCCCHHHHPPPPSSSS')))
/* OUTPUT
[
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Pig', 'Pig', 'Sheep' ],
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Sheep' ],
  [ 'Sheep' ],
  [ 'Sheep' ]
]
*/
