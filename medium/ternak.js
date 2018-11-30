function generateBoard(str) {
  let kamusHewan = [['C','COW'],['S','SHEEP'],['P','PIG'],['H','HORSE']]
  let kandang = []
  let panjangKandang = 4  
  let sementara = []
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < kamusHewan.length; j++){
      if(str[i]===kamusHewan[j][0]){
        sementara.push(kamusHewan[j][1])
      }
    }
  }
  var counter = 0
  for (let g = 0 ; g < panjangKandang; g++){
    var kandangDalam = []
    for(let j = 0; j < panjangKandang; j++){
      kandangDalam.push(sementara[counter])
      counter++
    }
    
    kandang.push(kandangDalam)
  }  
  return kandang
}

let input = 'CHCPSCSHHPSHCPPH'
console.log(generateBoard(input))

function getCagesAnimals(animals) {
  //animals ni bentuknya array
  // let kandang = []
  // let counterHorse = 0
  // let counterCow = 0
  // let counterPig = 0
  // let counterSheep = 0

  

  // for (let i = 0; i < animals.array; i++){
    
  //   for(let j = 0; j < animals[i].array; j++){
  //     var kandangDalam = []
  //     if (animals[i][j] === 'SHEEP') {
  //       counterSheep++
  //       if(counterSheep < 2){          
  //         kandangDalam.push(animals[i][j])
  //       }
  //       else {
  //         var kandangNext = []
  //         kandangNext.push(animals[i][j])
  //         counterSheep = 0
  //       }        
  //     }
  //     if (animals[i][j] === 'COW') {
  //       counterCow++
  //       if(counterCow < 3){          
  //         kandangDalam.push(animals[i][j])
  //       }
  //       else {
  //         var kandangNext = []
  //         kandangNext.push(animals[i][j])
  //       }        
  //     }
  //     if (animals[i][j] === 'HORSE') {
  //       counterHorse++
  //       if(counterHorse < 3){          
  //         kandangDalam.push(animals[i][j])
  //       }
  //       else {
  //         var kandangNext = []
  //         kandangNext.push(animals[i][j])
  //       }        
  //     }
  //     if (animals[i][j] === 'PIG') {
  //       counterPig++
  //       if(counterHorse < 3){          
  //         kandangDalam.push(animals[i][j])
  //       }
  //       else {
  //         var kandangNext = []
  //         kandangNext.push(animals[i][j])
  //       }        
  //     }
  //   }
  // }
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

