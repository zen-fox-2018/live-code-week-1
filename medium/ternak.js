//RELEASE 0
function generateBoard(str) {
  let initial = 'CSHP'
  let animals = ['Cow', 'Sheep', 'Horse', 'Pig']
  let result = []
  let resultTmp = []
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < initial.length; j++) {
      if (str[i] === initial[j]) {
        if (resultTmp.length < 4) {
          resultTmp.push(animals[j])
        }
        else {
          resultTmp = []
          resultTmp.push(animals[j])
        }
      }
    }
    if (resultTmp.length === 4) {
      result.push(resultTmp)
    }
  }
  return result
}

function getCagesAnimals(animals) {
  let cowCount = 0
  let horseCount = 0
  let pigCount = 0
  let sheepCount = 0

  for (let i = 0; i < animals.length; i++) {
    for (let j = 0; j < animals[i].length; j++) {
      if (animals[i][j] === 'Cow') {
        cowCount++
      }
      if (animals[i][j] === 'Horse') {
        horseCount++
      }
      if (animals[i][j] === 'Pig') {
        pigCount++
      }
      if (animals[i][j] === 'Sheep') {
        sheepCount++
      }
    }
  }
  // console.log(cowCount, horseCount, pigCount, sheepCount);
  
  // return animals
}

// function cekSebelum()

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
