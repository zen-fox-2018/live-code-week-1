function generateBoard(str) {
  //your code here
  let objKamus={
    C: 'Cow',
    H: 'Horse',
    P: 'Pig',
    S: 'Sheep'
  }
  let kamusIcon = ['C', 'H', 'P', 'S']
  let kamus = ['Cow', 'Horse', 'Pig', 'Sheep']
  let array= []
  for(let i =0 ;i < 4;i++){
    arrayDalam=[]
    for(let j =0;j < 4;j++){
      arrayDalam.push(' ')
    }
    array.push(arrayDalam)
  }
 
  let k = 0
        for(let i = 0; i < array.length ;i++){
          for(let j = 0; j < array[i].length ;j++){
           
            if(array[i][j]==' '){
              for(let m = 0; m < kamus.length; m ++){
                if(kamusIcon[m] == str[k]){
                  array[i][j] = kamus[m]
                }
            }
            k++ 
          }
        }
      }
      
    
  
   return array
 
}


console.log(generateBoard('CHCPSCSHHPSHCPPH'))
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Cow', 'Sheep', 'Horse' ],
  [ 'Horse', 'Pig', 'Sheep', 'Horse' ],
  [ 'Cow', 'Pig', 'Pig', 'Horse' ]
]
*/

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
