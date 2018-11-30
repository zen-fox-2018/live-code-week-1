function generateHouse(size, heightDoor, widthDoor) {
  var jarak = (size * 2) - 1;

  var atap = '';
  for (var i = 1; i <= size; i++) {
    var result = '';
    for (var j = size - 1; j <= jarak + i + 1; j++) {
      if (i === size) {
        if (j % 2 === 0) {
          result += '*';
        } else {
          result += ' ';
        }
      } else if (j === jarak && i === 1) {
        result += '*';
      } else if ((j === jarak - i|| j === jarak + i) && i !== 1) {
        result += '* ';
      } else {
        result += ' ';
      }
    }
    atap += result + '\n';
  }
  console.log(atap);
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
