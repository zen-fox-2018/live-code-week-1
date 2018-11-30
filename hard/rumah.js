function generateHouse (size, heightDoor, widthDoor) {
  //your code here
  let string = ''
  let lebar = (size * 2) - 1
  for (let i = 0 ; i < size * 2 -1 ; i++) {
    for (let j = 0 ; j < lebar ; j++) {
      if (i <= 4){
        if(i === 4 || j === lebar - size - i || j === size + i - 1){
          string += '*'
        } else   {
          string += ' '
        }
      } else if (i > 4) {
        if (i === lebar - 1 && j > 0 && j < lebar - 1){
          if (j > 2 && j < 6){
            string += '#'
          } else {
            string += '*'
          }
        } else if (i > 5 && j > 2 && j < 6){
          // if (i > 6 && i < )
          string += '#'
          // j === 1 || j === lebar - 2){
        } else if (j === 1 || j === lebar - 2) {
          string += '*'
        } else {
          string += ' '
        }
      }
    }
    string += '\n'
  }
  console.log(string);
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
