function generateBoard(str) {
  //your code here
  let c = ''
  let h = ''
  let s = ''
  let p = ''
  let result = []
  for(let i = 0; i < str.length; i++) {
    let inner = []
    if()
    inner.push(str[i]) 
  }
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'C') {
      c += str[i]
    } else if(str[i] === 'H') {
      h += str[i]
    } else if(str[i] === 'S') {
      s += str[i]
    } else if(str[i] === 'P') {
      p += str[i]
    }
  }
  console.log(c, h, s, p)
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

