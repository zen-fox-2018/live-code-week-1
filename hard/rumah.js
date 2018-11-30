function generateHouse (size, heightDoor, widthDoor) {
  if (size < 5 || heightDoor < 3 || widthDoor < 3) {
    console.log(`Minimum input value of size is four and minimum  input value of height and width of door are three`)
  } else {

    for (let i = 0; i < size; i++) {
      let result = ''
      for (let j = 0; j < size-i; j++) {
        result += ' '
      }
      for (let k = 0; k < (2*i+1); k++) {
        result += '*'
      }
      console.log(result)
    }
  }
  let panjang = size*2
  for (let i = 0; i < size-1; i++) {
    let result  = ''
    for (let j = 1; j < panjang; j++) {
      if ( j == 3 ||j == panjang-1) {
        result += '*'
      } else if (i == size-2) {
        if(j > 2 ){
          result += '*'
        } else {
          result += ' '
        }
      } else {
        result += ' '
      }
    }    
    console.log(result)
  }

}
//     ***
//    *****
//   *******
//  *********

generateHouse(5, 3, 3)
/* OUTPUT
        *
      *   *
    *       *
  *           *
* * * * * * * * * = 9
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
