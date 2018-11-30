function generateBoard(str) {
  //your code here
  
  let arr = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'C') {
      arr.push('Cow')
    } else if (str[i] == 'H') {
      arr.push('Horse')
    } else if (str[i] == 'S') {
      arr.push('Sheep')
    } else if (str[i] == 'P') {
      arr.push('Pig')
    }
  }

  return arr
}

function getCagesAnimals(animals) {
  //your code here
  console.log(animals.length);
  
  let output = []
  
  for (let i = 0; i < animals.length; i++) {
    let kandang = []
    let pig = 3
    let cow = 2
    let horse = 2
    let sheep = 1

    if (pig > 0 && cow > 0 && horse > 0 && sheep > 0) {
      if (animals[i] == 'Pig') {
        pig -= 1
        kandang.push(animals[i])
      }
    }
   
    

    output.push(kandang)
  }

  return output
}


// console.log(generateBoard('CHCPSCSHHPSHCPPH'))

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
