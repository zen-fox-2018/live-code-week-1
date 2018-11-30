function generateBoard(str) {
  if(str.length !== Math.pow(Math.sqrt(str.length), 2)) {
    return false;
  }
  let myBoard = [];
  let tempBoard = [];
  let objAnimals = {
    'P' : 'Pig',
    'H' : 'Horse',
    'C' : 'Cow',
    'S' : 'Sheep'
  };
  let maxBoard = Math.sqrt(str.length);
  for (e of str) {
    tempBoard.push(objAnimals[e]);
    if(tempBoard.length === maxBoard){
      myBoard.push(tempBoard);
      tempBoard = [];
    }
  }

  return myBoard;
  //your code here
}

function getCagesAnimals(animals) {
  //your code here
  let objAnimals = {
    'Pig' : 3,
    'Horse' : 2,
    'Cow' : 2,
    'Sheep' : 1
  };
  let result = [];
  animals.forEach( hewans => {
    hewans.forEach( hewan => {
      if(!result.length) {
        result.push([]);
      }
      for (let i = 0; i < result.length; i++) {
        let max = result[i].filter(f => f === hewan).length;
        if(max < objAnimals[hewan]) {
          result[i].push(hewan);
          break;
        } else if(result[i + 1] != undefined){
          continue;
        } else {
          result.push([]);
        }
      }
    });
  });
  return result;
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
