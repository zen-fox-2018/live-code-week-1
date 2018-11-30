function generateHouse (size, heightDoor, widthDoor) {
  if (size < 5 || heightDoor < 3 || widthDoor < 3) {
    return console.log('input size kurang dari 5, width door dan height door juga tidak boleh kurang dari 3');
  }
  //Atap
  let atap = ""
  for (let i = 0; i < size ; i++) {
    for (let j = 0; j < size*2+size+2; j++) {
      if (i === size-1) {
        if (j % 2 === 0) {
          atap = atap + "*"
        }
        else {
          atap = atap + " "
        }
      }
      else if (i === 0) {
        if (j === size*2 - 2) {
          atap = atap + "*"
        }
        else {
          atap = atap + " "
        }
      }
      else {
        if (i % 2 === 0) {
          if (j === size*2 - (size+i + 1) || j === size*2 + i*2) {
            atap = atap + "*"
          }
          else {
            atap = atap+ " "
          }
        }
      }
    }
    console.log(atap);
    atap=""
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
