function generateHouse(size, heightDoor, widthDoor) {
  var atap = (size * 2) - 1;

  //atap
  var result = '';
  for (let i = 0; i < size; i++) {           // 1-5
    for (let j = 1; j <= atap + i + i; j++) {
      if (i === 0 && j === atap) {
        result += '*';
      } else if ((j === atap - i - i || j === atap + i + i) && i < size - 1) {
        result += '*';
      } else if (i === size - 1 && j % 2 === 1) {
        result += '*';
      } else {
        result += ' ';
      }
    }
      result += '\n';
  }

  //kotak
  var panjang = (atap * 2) - 2;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < panjang; j++) {
      if (j === 2 || j === panjang - 2) {
        result += '*';
      } else {
        if (i === size - 2 && j % 2 === 0 && j !== 0) {
          result += '*';
        } else {
          result+= ' ';
        }
      }
    }
    result += '\n';
  }



  console.log(result);
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
