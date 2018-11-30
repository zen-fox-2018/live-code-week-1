
function generateBoard(str) {

  let totalLength = str.length;
  let square = Math.sqrt(totalLength)
  let boardCages = [];
  let count = 0;

  for(let i = 0; i < square; i++) {
    boardCages.push([]);
    for(let j = 0; j < square; j++) {
      boardCages[i].push(str[count]);
      count++;
    }
  }

  boardCages.forEach(element => {
    for(let i = 0; i < element.length; i++) {
      if(element[i] === "C") {
          element[i] = "Cow";
        } else if (element[i] === "S") {
          element[i] = "Sheep";
        } else if (element[i] === "H") {
          element[i] = "Horse";
        } else if (element[i] === "P") {
          element[i] = "Pig";
      }
    }
  })
  return boardCages;
}

function getCagesAnimals(animals) {
  var countC = 0;
  let countS = 0;
  let countH = 0;
  let countP = 0;

  for(let i = 0; i < animals.length; i++) {
    // console.log(animals[i])
    for(let j = 0; j < animals[i].length; j++) {
      if (animals[i][j] === "Cow") {
        countC++;
      } else if (animals[i][j] === "Sheep") {
        countS++;
      } else if (animals[i][j] === "Horse") {
        countH++;
      } else if (animals[i][j] === "Pig") {
        countP++;
      }
    }
  }
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

  - 'C' = 'Sapi' atau 'Cow'
  - 'D' = 'Domba' atau 'Sheep'
  - 'H' = 'Kuda' atau 'Horse'
  - 'P' = 'Babi' atau 'Pig'

  - Jumlah maksimum hewan berjenis 'babi' didalam kandang ialah 3, lebih dari itu harus diletakan pada kandang yang baru atau array baru
  - Jumlah maksimum hewan berjenis 'kuda' didalam kandang ialah 2, lebih dari itu harus diletakan pada kandang yang baru atau array baru
  - Jumlah maksimum hewan berjenis 'sapi' didalam kandang ialah 2, lebih dari itu harus diletakan pada kandang yang baru atau array baru
  - Jumlah maksimum hewan berjenis 'domba' didalam kandang ialah 1, lebih dari itu harus diletakan pada kandang yang baru atau array baru

  
*/
