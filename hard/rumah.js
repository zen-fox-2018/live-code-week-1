function generateHouse(size, heightDoor, widthDoor) {
  let alasAtapRumah = size * 2 - 1

  let hasil = ''
  let bintang = ' * '
  let pintu = ' # '
  let tengahAlas = Math.floor(alasAtapRumah/2)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < alasAtapRumah; j++) {
      // hasil += ' * '
      if (i === 0 && j === tengahAlas){
        hasil += bintang
      }
      if ( i > 0 && i < size-1){
        
        if(j === tengahAlas - i || j === tengahAlas + i ){
          hasil += bintang
          
        }
        else {
          hasil += '   '
        }
      }
     
      else if(i === size - 1){
        hasil += bintang
      }
      else {
        hasil += '   '
      }
    }
    
    if(i !== size - 1){
      hasil += '\n'
    }
    
  }
  console.log(hasil)
  let alasBawahRumah = size + Math.floor(size / 2)
  let kotak = ''
  for (var i = size; i < 2 * size; i++){
    for(let j = 0; j <= alasBawahRumah; j++){
      if (j === 1 || j === alasBawahRumah ){
        kotak += bintang
      }
      else if (i === (2 * size)- 1 ){
        kotak += bintang
      }
      else {
        kotak += '   '
      }
      
    }
    kotak += '\n'

  }
  console.log(kotak)
  let gambarPintu = ''
  let spotPintu = Math.floor(size/2) + widthDoor
  for (var i = (2 * size) - heightDoor; i >= heightDoor; i--){
    for (var j = 0; j < widthDoor; j++){
      gambarPintu += pintu
      
    }
    gambarPintu += '\n'

  }
  console.log(gambarPintu)
}

generateHouse(5, 3, 3)
/* OUTPUT
        *
      *   *
    *       *
  *           *
* * * * * * * * *
  *           *
  *   # # #   *
  *   #   #   *
  * * # # # * *
*/
// generateHouse(6, 4, 3)
/* OUTPUT
          *
        *   *
      *       *
    *           *
  *               *
* * * * * * * * * * *
  *               *
  *     # # #     *
  *     #   #     *
  *     #   #     *
  * * * # # # * * *

*/
