function generateBoard(str) {
var result = []
let counter = 0
// var result2 =[]
// for (let i = 0; i < 4; i++) {
//   let temp2 = []
//   for (let j = 0; j < 4; j++) {
//     let k = 0
//     if (str[k] == 'C'){
//       temp2.push('Cow')
//       k++
//     } else if (str[k] == 'H') {
//       temp2.push('Horse')
//       k++
//     } else if (str[k] == 'P') {
//       temp2.push('Pig')
//       k++
//     } else if (str[k] == 'S') {
//       temp2.push('Sheep')
//       k++
//     } else {
//       temp2.push('alien animal')
//       k++
//     }  
  
//     // temp2.push(' ')
//   }  
//   result2.push(temp2)
// }
// return result2
for (let i = 0; i < str.length; i++) {
  var temp = []
    if (str[i] == 'C'){
      temp.push('Cow')
      counter++
    } else if (str[i] == 'H') {
      temp.push('Horse')
      counter++
    } else if (str[i] == 'P') {
      temp.push('Pig')
      counter++
    } else if (str[i] == 'S') {
      temp.push('Sheep')
      counter++
    } else {
      temp.push('alien animal')
      counter++
    } 
    result.push(temp)
}

  return result
}
console.log(generateBoard('CHCPSCSHHPSHCPPH'))

function getCagesAnimals(animals) {
  let result = []
  let kamus = {
    Pig: 3,
    Horse: 2,
    Cow: 2,
    Sheep: 1
  }

  for (let i = 0; i < animals.length; i++) {
    let temp = []
    for (let j = 0; j < animals[i]; j++) {
      if (animals[i][j] == 'Pig' ){
      } else if (animals[i][j] == 'Horse') {

      } else if (animals[i][j] == 'Cow') {

      } else if (animals[i][j] == 'Sheep') {
        
      }
      temp.push(animals[i][j])
    }
    result.push(temp)
  }
  return result
}

// DRIVER CODE

// console.log(getCagesAnimals(generateBoard('CHCPSCSHHPSHCPPH')))
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ]
]
*/
// console.log(t(generateBoard('CCCCHHHHPPPPSSSS')))
/* OUTPUT
[
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Pig', 'Pig', 'Sheep' ],
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Sheep' ],
  [ 'Sheep' ],
  [ 'Sheep' ]
]
*/
