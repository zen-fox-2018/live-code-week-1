function generateHouse (size, heightDoor, widthDoor) {
  
  for(let i = 0; i < size; i++) {
    let house = "";
    for(let j = 0; j < size + 2; j++) {
      // console.log(j)
      if(i === 0 || i === size - 1 || j === 0 || j === size) {
        house += " *"
      } else {
        house += " "
      }
    }
    console.log(house)
  }
}

generateHouse(5, 3, 3)
/* OUTPUT
        *
      *   *
    *       *
  *           *
* 0 1 2 3 4 5 6
  * * * * * * * *
  *           *
  *   # # #   *
  *   #   #   *
  * * # # # * *
*/
generateHouse(6, 4, 3)
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
