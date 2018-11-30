function generateBoard(str) {
  let kamus = [[`C`, `Cow`], [`H`, `Horse`], [`P`, `Pig`], [`S`, `Sheep`]]
  let board = [[]]
  let counter = 0

  for (let i = 0; i < str.length; i++) {
    if (board[board.length - 1].length < 4) {
      for (let k = 0; k < kamus.length; k++) {
        if (kamus[k][0] == str[i]) {
          board[board.length - 1].push(kamus[k][1])
        }
      }
    } else if (board[board.length - 1].length >= 4) {
      for (let j = 0; j < kamus.length; j++) {
        if (kamus[j][0] == str[i]) {
          board.push([kamus[j][1]])
        }
      }
    }
  }

  return board
}

function getCagesAnimals(animals) {
  let cages = animals
  let newCages = [[]]

  for (let i = 0; i < cages.length; i++) {
    let maxCapacity = 0
    let capacityCounter = 0
    for (let j = 0; j < cages[i].length; j++) {
      switch (cages[i][j]) {
        case `Pig`:
          maxCapacity = 3
          break;

        case `Horse`:
          maxCapacity = 2
          break;

        case `Cow`:
          maxCapacity = 2
          break;

        case `Sheeps`:
          maxCapacity = 1
          break;
      }
      for (let k = 0; k < newCages.length; k++) {
        for (let l = 0; l < newCages[k].length; l++) {
          if (newCages[k][l] == cages[i][j]) {
            capacityCounter++
          }
        }
      }
      if (capacityCounter <= maxCapacity) {
        newCages[newCages.length-1].push(cages[i][j])
      } else if (capacityCounter > maxCapacity) {
        newCages.push([cages[i][j]])
      }
    }
  }

  return newCages
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
