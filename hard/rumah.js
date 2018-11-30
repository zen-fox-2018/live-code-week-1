function generateHouse(size, heightDoor, widthDoor) {

  //ATAP
  for (let i = 0; i < size; i++) {
    let strAtap = ''
    for (let j = 0; j < (size * 2) - 1; j++) {
      if (j == Math.ceil(size - 1) - i || j == Math.ceil(size - 1) + i) {
        strAtap += ` *`
      } else {
        if (i == size - 1) {
          strAtap += ` *`
        } else {

          strAtap += `  `
        }
      }
    }
    console.log(strAtap);
  }

  //TEMBOK & PINTU
  for (let i = 0; i < size - 1; i++) {
    let strBawah = ''
    for (let j = 0; j < (size * 2) - 1; j++) {
      if (j == 1 || j == (size * 2) - 3) {
        strBawah += ` *`
      } else {
        if (i > size / 2 - heightDoor/2 && j > (size - widthDoor / 2) - 1 && j < (size + 1)) {
          strBawah += ` #`
        } else {
          if (i == size - 2 && j > 0 && j < (size * 2) - 2) {
            strBawah += ` *`
          } else {
            strBawah += `  `
          }
        }
      }
    }
    console.log(strBawah);
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
generateHouse(7, 4, 3)

// 0 - * - - - - - - - - - * -
// 1 - * - - - - - - - - - * -
// 2 - * - - - - - - - - - * -
// 3 - * - - - - - - - - - * -
// 4 - * - # # # # - - - - * -
// 5 - * - # # # # - - - - * -
//   1 2 3 4 5 6 7 8 9 10111213 

generateHouse(9, 5, 5)