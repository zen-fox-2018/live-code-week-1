function generateHouse (size, heightDoor, widthDoor) {
  if (size < 5 || heightDoor < 3 || widthDoor < 3) {
    console.log('Rumah tidak bisa dibuat');
  }
  //atap
  console.log(atap(size))
}

function atap(size) {
  let hasil = []
  let col = (size * 2) - 1
  let startLeftDiagonal = Math.floor(col / 2)
  let startRightDiagonal = Math.floor(col / 2)
  for (let i = 0; i < size; i++) {
    let atap = []
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === Math.floor(col / 2)) {
        atap.push('*')
      }
      else if (i !== 0 && i < size - 1 && j === startLeftDiagonal) {
        atap.push('* ')
        // startLeftDiagonal--
      }
      else if (i !== 0 && i < size - 1 && j === startRightDiagonal) {
        atap.push('* ')
      }
      else if (i === size - 1) {
        atap.push('* ')
      }
      else {
        atap.push('  ')
      }
    }
    startRightDiagonal++
    startLeftDiagonal--
    atap = atap.join('')
    hasil.push(atap)
  }
  hasil = hasil.join('\n')
  return hasil
}

function bangunan(width, height) {
  let hasil = []

  hasil = hasil.join('\n')
  return hasil
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

generateHouse(7, 4, 3)
/*
       		  *              
          *   *            
        *       *          
      *           *        
    *               *      
  *                   *    
* * * * * * * * * * * * * 
  *                   *   
  *                   *   
  *       # # #       *   
  *       #   #       *   
  *       #   #       *   
  * * * * # # # * * * *   

*/
