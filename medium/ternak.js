function generateBoard(str) {
  //your code here
  let arr = []
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'C'){
      if(count === 0){
        arr[arr.length] = ['Cow']
      }else{
        arr[arr.length-1][arr[arr.length-1].length] = 'Cow'
      }
    }else if (str[i] === 'H'){
      if(count === 0){
        arr[arr.length] = ['Horse']
      }else{
        arr[arr.length-1][arr[arr.length-1].length] = 'Horse'
      }
    }else if (str[i] === 'P') {
      if(count === 0){
        arr[arr.length] = ['Pig']
      }else{
        arr[arr.length-1][arr[arr.length-1].length] = 'Pig'
      }
    }else if (str[i] === 'S'){
      if(count === 0){
        arr[arr.length] = ['Sheep']
      }else{
        arr[arr.length-1][arr[arr.length-1].length] = 'Sheep'
      }
    }
    count++
    if(count === 4){
      count = 0
    }
  }
  return arr
}

function getCagesAnimals(animals) {
  //your code here
  let arr = [[]]
  let result = []
  let countC = 2
  let countP = 3
  let countS = 1
  let countH = 2
  for(let i = 0; i < animals.length; i++) {
    for(let j = 0 ; j < animals[i].length; j++) {
      result.push(animals[i][j])
    }
  }
  for(let i = 0; i < result.length; i++) {
   if(result[i] === 'Cow') {
      if(countC > 0){
        arr[arr.length-1][arr[arr.length-1].length] = 'Cow'
        countC--
      }else{
        arr[arr.length] = ['Cow']
        countC = 2
      }
    }else if(result[i] === 'Sheep') {
      if(countS > 0){
        arr[arr.length-1][arr[arr.length-1].length] = 'Sheep'
        countS--
      }else{
        arr[arr.length] = ['Sheep']
        countS = 1
      }
    }else if(result[i] === 'Pig') {
      if(countP > 0){
        arr[arr.length-1][arr[arr.length-1].length] = 'Pig'
        countP--
      }else{
        arr[arr.length] = ['Pig']
        countP = 3
      }
    }else if(result[i] === 'Horse') {
      if(countH > 0){
        arr[arr.length-1][arr[arr.length-1].length] = 'Horse'
        countH--
      }else{
        arr[arr.length] = ['Horse']
        countH = 2
      }
    }
  }
  

  return arr
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
