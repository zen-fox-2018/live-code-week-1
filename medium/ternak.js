function generateBoard(str) {
  let count = 0
  let result = []
  let size = Math.sqrt(str.length)
  for (let i = 0; i < size; i++) {
    let temp = []
    for (let j = 0; j < size; j++) {
      if (str[count] === 'C') {
        temp.push('Cow')
      } else if (str[count] === 'S') {
        temp.push('Sheep')
      } else if (str[count] === 'H') {
        temp.push('Horse')
      } else if (str[count] === 'P') {
        temp.push('Pig')
      }
      count++
    }
    result.push(temp)
  }
  return result
}

function getCagesAnimals(animals) {
  let result = []
  let arr = 0
  let cow = 0
  let cowIndex = 0
  let pig = 0
  let pigIndex = 0
  let sheep = 0
  let sheepIndex = 0
  let horse = 0
  let horseIndex = 0
  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals[i].length; j++) {
      if (!result[arr]) {
        result[arr] = []
      } else {
        if (animals[i][j] === 'Cow') {
          if (cow <= 2) {
            result[cowIndex].push(animals[i][j])
            cow++
          } else {
            cow = 0
            cowIndex++
            if (!result[cowIndex]) {
              result[cowIndex] = []
              result[cowIndex].push(animals[i][j])
            } else {
              result[cowIndex].push(animals[i][j])
            }
            cow++
          }
        } else if (animals[i][j] === 'Pig') {
          result[pigIndex].push(animals[i][j])
          pig++
        } else if (animals[i][j] === 'Sheep') {
          result[sheepIndex].push(animals[i][j])
          sheep++
        } else if (animals[i][j] === 'Horse') {
          result[horseIndex].push(animals[i][j])
          horse++
        }
      }
    }
  }
  return result
}

generateBoard('CHCPSCSHHPSHCPPH')

// DRIVER CODE

console.log(getCagesAnimals(generateBoard('CHCPSCSHHPSHCPPH')))
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ]
]
*/
// console.log(getCagesAnimals(generateBoard('CCCCHHHHPPPPSSSS')))
/* OUTPUT
[
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Pig', 'Pig', 'Sheep' ],
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Sheep' ],
  [ 'Sheep' ],
  [ 'Sheep' ]
]
*/
