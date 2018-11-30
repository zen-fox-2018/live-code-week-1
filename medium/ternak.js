var kamus = [{icon :'C', name:'Cow' },{icon:'H', name: 'Horse'}]
var hewan = ['Cow', 'Horse', 'Pig','Sheep']

function generateBoard(animals) {
  var result = []
  for(let i = 0; i < animals.length; i++){
    //let holder = []
    let  count = 0
    for(let j = 0; j < kamus.length; j++){
      
      if (animals[i] == kamus[j].icon ){
        result.push(kamus[j].name)
        
      }
    }
  }
console.log(result)
  let finalResult = []
  for( let k = 0 ; k < result.length; k++){
    var cek = false
    for(let l = 0; l < finalResult.length; l++){
      console.log(result[k])
      if(result[k] ==  finalResult[l]){
        cek = true
       // finalResult.push(result[k])
      }
    }
    if(!cek){
      finalResult.push(result[k])
    }
  }
  return finalResult
}
//console.log(generateBoard('CC'))
function getCagesAnimals(animals) {
   return animals
}
//console.log(getCagesAnimals())

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
