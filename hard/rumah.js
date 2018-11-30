function generateHouse(size, heightDoor, widthDoor) {
  //your code here
  if (size < 4 || heightDoor < 3 || widthDoor < 3) {
    console.log('Minimum input value of size is four and minimum input value of height and width of door are three')
  }

  let batasAtap = (size * 2) - 1
  let atap = ''

  for (let i = 1; i <= size; i++) {
    atap = ''
    for (let j = 1; j <= batasAtap; j++) {
      if (i == size) {
        atap += '*'
      } else if (i == 4 && j == 2 || i == 4 && j == 8) {
        atap += '*'
      } else if (i == 3 && j == 3 || i == 3 && j == 7) {
        atap += '*'
      } else if (i == 2 && j == 4 || i == 2 && j == 6) {
        atap += '*'
      } else if (i == 1 && j == 5) {
        atap += '*'
      } else {
        atap += ' '
      }
    }
    console.log(atap)
  }

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
