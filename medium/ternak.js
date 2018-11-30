function generateBoard(str) {
  //your code here
  let output = []
  let size = str.length

  for (let i = 1 ; i < size ; i++){
    if (i * i === size){
      size = i
      break;
    }
  }
  let kamus = { C : 'Cow', H : 'Horse', S : 'Sheep', P : 'Pig'}

  let newKandang = []
  for (let i = 0 ; i < str.length ; i++) {
    if (newKandang.length === size){
      output.push(newKandang)
      newKandang = []
    }
    if (kamus[str[i]] !== undefined) {
      newKandang.push(kamus[str[i]])
    }
  }
  if (newKandang.length > 0){
    output.push(newKandang)
  }

  return output
}


function getCagesAnimals(animals) {
  //your code here
  let binatang = []
  let objBinatang = {}
  let kamus = { 'Cow' : 2, 'Horse' : 2, 'Sheep' : 1, 'Pig' : 3}

  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals[i].length ; j++) {
      binatang.push(animals[i][j])
    }
  }

  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals[i].length ; j++) {
      if (objBinatang[animals[i][j]] === undefined) {
        objBinatang[animals[i][j]] = 1
      } else {
        objBinatang[animals[i][j]]++
      }
    }
  }

  let output = []
  let arrayBin = Object.keys(kamus)
  let hitungLimit = []
  let counter = {}
  for (let key in kamus) {
    hitungLimit.push(kamus[key])
    counter[key] = 0
  }

  return counter
}

// DRIVER CODE
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Cow', 'Sheep', 'Horse' ],
  [ 'Horse', 'Pig', 'Sheep', 'Horse' ],
  [ 'Cow', 'Pig', 'Pig', 'Horse' ]
]
*/

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
