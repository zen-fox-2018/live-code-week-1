// - 'C' = 'Sapi' atau 'Cow'
// - 'D' = 'Domba' atau 'Sheep'
// - 'H' = 'Kuda' atau 'Horse'
// - 'P' = 'Babi' atau 'Pig'


function generateBoard(str) {
  //your code here
  let list = {C : "Cow", S : "Sheep", H : "Horse", P : "Pig"};
   
  let result = [];
  let j = 0;
  while (j <= str.length-1) {
    let temp = [];
    for (let i = 0; i <= Math.sqrt(str.length); i++) {
      if (str[j] !== undefined) {
        temp.push(list[str[j]]);
        getCagesAnimals
        j++;
      } 
    }
    result.push(temp);
  }
  return getCagesAnimals(result)
}

function getCagesAnimals(animals) {
  // your code here
  for (let i = 0; i <= animals.length-1; i++) {
    let list = {Cow : 2, Sheep : 1, Horse: 2 ,Pig: 3};
    let keys = Object.keys(list);

    // console.log(animals[i])
    for (let j = 0; j <= animals[i].length-1; j++) {
      let isFull = false;
      for (let k = 0; k <= keys.length-1; k++) {
        if (keys[k] === animals[i][j]) {
          // console.log(list[keys[k]] - 1)
          list[keys[k]] =  list[keys[k]] - 1;
          if (list[keys[k]] === 0) {
            isFull = true
            break;
          }
        }
      }
      if (isFull === true) {
        animals[i].splice(j, j+1);
        if (animals[i+1] != undefined) {
          animals[i+1].push(animals[i][j])
        } else {
          animals.push([])
          animals[i+1].push(animals[i][j])
        }
      }
    }
  }
  return animals
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
