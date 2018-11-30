function generateHouse (size, heightDoor, widthDoor) {
  //your code here

  if (size < 5 || heightDoor < 3 || widthDoor < 3) {
     return 'Rumah tidak akan bisa dibuat'
  }
  

  for (let i = 0; i < size; i++) {
    let atap = ''
    for (let j = 0; j < size+size; j++) {
      if (i==0 && j == 4) {
        atap += '*'
      } else {
        atap += ' '
        // console.log(atap)
      }

      if (i==1 && (j==3 || j == 5)) {
        atap += '*'
      } else {
        atap += ' '
      }

      if (i==2 && (j==2 || j == 6)) {
        atap += '*'
      } else {
        atap += ' '
      }

      if (i==3 && (j==1 || j == 7)) {
        atap += '*'
      } else {
        atap += ' '
      }

      if (i==4 && (j==0 || j == 8)) {
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
