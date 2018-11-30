function generateBoard(str) {
  let input = str
  let board = []
  let count = 0
  for (let i = 1; i <= 4; i++) {
    let boardTemp = []
    for (let j = 0; j < 4; j++) {
      if (input[count] === "C") {
        boardTemp.push("Cow")
      }
      else if (input[count] === "H") {
        boardTemp.push("Horse")
      }
      else if (input[count] === "P") {
        boardTemp.push("Pig")
      }
      else if (input[count] === "S") {
        boardTemp.push("Sheep")
      }
      count++
    }
    board.push(boardTemp)
  }
  return board
}

function getCagesAnimals(animals) {
  let cages = [[]]
  let indexPush = 0
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals[i].length; j++) {
      let lastCage = cages[cages.length-1]
      let animal = animals[i][j]
      if (animal === "Pig") {
        indexPush = checkAnimalOnCages(cages, animal, 3)
        if (indexPush != -1) {
          cages[indexPush].push(animal)
        }
        else {
          cages.push([animal])
        }
      }
      else if (animal === "Horse") {
        indexPush = checkAnimalOnCages(cages, animal, 2)
        if (indexPush != -1) {
          cages[indexPush].push(animal)
        }
        else {
          cages.push([animal])
        }
      }
      else if (animal === "Cow") {
        indexPush = checkAnimalOnCages(cages, animal, 2)
        if (indexPush != -1) {
          cages[indexPush].push(animal)
        }
        else {
          cages.push([animal])
        }
      }
      else if (animal === "Sheep") {
        indexPush = checkAnimalOnCages(cages, animal, 1)
        if (indexPush != -1) {
          cages[indexPush].push(animal)
        }
        else {
          cages.push([animal])
        }
      }
    }
  }
  return cages
}

function checkAnimalOnCages(array, animal, count) {
  let countAnimal = 0
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === animal) {
        countAnimal ++
      }
    }
    if (countAnimal < count) {
      return i
    }
    countAnimal = 0
  }
  return -1
}

// DRIVER CODE
// console.log(generateBoard('CHCPSCSHHPSHCPPH'));
console.log(getCagesAnimals(generateBoard('CHCPSCSHHPSHCPPH')))
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ]
]
*/
// console.log(generateBoard('CCCCHHHHPPPPSSSS'));
console.log(getCagesAnimals(generateBoard('CCCCHHHHPPPPSSSS')))
/* OUTPUT
[
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Pig', 'Pig', 'Sheep' ],
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Sheep' ],
  [ 'Sheep' ],
  [ 'Sheep' ]
]
*/
