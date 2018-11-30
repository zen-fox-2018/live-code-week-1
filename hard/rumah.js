function generateHouse (size, heightDoor, widthDoor) {
  if (size < 5 || widthDoor < 3 || heightDoor < 3) {
    return 'Rumah tidak bisa dibuat'
  } else {
    let height = (size*2) - 1
    let mid = Math.floor(height/2)
    let left = mid;
    let right = mid;
    for (let i = 0; i < height; i++) {
      let row = ''
      for (let j = 0; j < height; j++) {
        if (i === 0 && j === mid) {
          row += '*'
        } else if (j === left || j === right ) {
          row += '*'
        } else if (i === size - 1) {
          row += '*'
        } else if (j === 1 && i > size -1 || j === height - 2 && i > size -1) {
          row += '*'
        } else if (i === height - 1 && j > 1 && j < mid - ((widthDoor-1) / 2) || i === height - 1 && j < height-2 && j > mid + ((widthDoor-1) / 2)) {
          row += '*'
        } else if (i >= height - heightDoor && j === mid - ((widthDoor-1) / 2) || i >= height - heightDoor && j === mid + ((widthDoor-1) / 2)) {
          row += '#'
        } else if (j === mid && i === height - heightDoor || j === mid && i === height -1) {
          row += '#'
        }
        else {
          row += ' '
        }
      }
      left --
      right ++
      console.log(row);
    }
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
generateHouse(7, 4, 3)
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
