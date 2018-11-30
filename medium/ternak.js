function generateBoard(str) {
  //your code here
  
  let grup = str.match(/.{1,4}/g);
  let result = [];
  let kodeHewan = ['C', 'S', 'H', 'P'];
  let hewan = ['Cow', 'Sheep', 'Hores', 'Pig']

  for (let i = 0; i < grup.length; i++) {
    let kandangKecil = [];
    for (let j = 0; j < grup[i].length; j++) {
      for (let k = 0; k < kodeHewan.length; k++) {
        if (grup[i][j] === kodeHewan[k]) {
          kandangKecil.push(hewan[k])
        }
      }
    }
    result.push(kandangKecil)
  }
  return result
}

function getCagesAnimals(animals) {
  //your code here
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
