function generateHouse (size, heightDoor, widthDoor) {
  //your code here
  let tinggi = size + heightDoor
  let lebar = tinggi*2

  for( let i = 0; i <= tinggi; i++ ) {
    let temp = ''
    for( let j = 0; j <= lebar; j++ ) {
      // temp += i
      if ( i === tinggi/2 && j % 2 === 0 ) {
        temp += '*'
      } else if ( i >= (tinggi/2) + 2 && j === heightDoor * 2 || i >= (tinggi/2) + 2 && j === tinggi + 2 || i === (tinggi/2) + 2 && j === tinggi) {
        // if ( j == heightDoor * 2 && j == size*2 ) {
          temp +='#'
        // } else {
        //   temp += '-'
        // }
      } else if ( i === 0 && j === tinggi ) {
        temp += '*'
      } else if ( i > 0 && i <= 4) {
        if( i === j) {
          temp += '*'
        } else {
          temp += '-'
        }
      }
      else if ( i === tinggi ) {
        if( j > 1 && j < lebar - 1 && j % 2 === 0 ) {
          temp += '*'
        } else {
          temp += '-'
        }
      } else if ( i >= heightDoor ) {
        if ( j === 2 || j === lebar - 2 ) {
          temp += '*'
        } else {
          temp += '-'
        }
      } 
      else {
        temp += '-'
      }
    }
    console.log(temp)
  }
}

generateHouse(5, 3, 3)
/* OUTPUT

0        *
1      *   *
2    *       *
 012345678
3  *           *
4* * * * * * * * *
5  *           *
6  *   # # #   *
7  *   #   #   *
8  * * # # # * *
       6 8 10
*/
// generateHouse(6, 4, 3)
/* OUTPUT
0           *
1         *   *
2       *       *
3     *           *
4   *               *
5 * * * * * * * * * * *
6   *               *
7   *     # # #     *
8   *     #   #     *
9   *     #   #     *
10  * * * # # # * * *
  0123456789101112

*/
