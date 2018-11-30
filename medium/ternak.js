function generateBoard(str) {
  let data = str.split("")
  return data
  //your code here
}

function getCagesAnimals(animals) {
  // console.log(animals)
  let ternak = [
    {
      huruf: "C",
      jenis : "Cow",
      batas: 2
    },
    {
      huruf:"H",
      jenis:"Horse",
      batas: 2 ,
    },
    {
      huruf:"S",
      jenis: "Sheep",
      batas: 1,
    },
    {
      huruf: "P",
      jenis: "Pig",
      batas: 3
    }
  ]
  let kandang = [[]]
  animals.forEach( hewan => {
    ternak.forEach(x => {
      // console.log(kandang[kandang.length-1])
      
      if(hewan === x.huruf) {
        for( let i = 0 ; i < kandang.length ; i++) {
          let batas = 0
          kandang[i] .forEach(isi=>{
            if (isi === x.jenis) {
              batas++
            }
          })
          if(batas < x.batas) {
            kandang[i].push(x.jenis)
          }
        }
      }
    })
    
  });
  return kandang
}
  //your code here

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
