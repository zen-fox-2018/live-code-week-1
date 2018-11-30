function buildRoof(size) {
  let print = ''
  let width = size * 4 - 3

  for (let i = 0; i < size; i++) {
    print = ''
    for (let j = 1; j <= width; j++) {
      if (i == size - 1 && j % 2 == 1) {
        print += '*'
      }
      else if (j == (width + 1) / 2 + i * 2 || j == (width + 1) / 2 - i * 2) {
        print += '*'
      }
      else {
        print += ' '
      }
    }
    console.log(print)
  }
}

function isDoor(size, heightDoor, widthDoor, i, j) {
  let width = size * 4 - 3

  if (i == size - 2 || i == size - 2 - heightDoor + 1) {
    if (j >= (size * 2 - 1) - (widthDoor - 1) && j <= (size * 2 - 1) + (widthDoor - 1) && j % 2 === 1) {
      return true
    }
  }
  else if (i < size - 2 && i > size - 2 - heightDoor + 1) {
    if (j == (size * 2 - 1) - (widthDoor - 1) && j === (size * 2 - 1) + (widthDoor - 1) && j % 2 === 1) {
      return true
    }
  }

  return false
}

function buildSquareAndDoor(size, heightDoor, widthDoor) {
  let width = size * 4 - 3
  let print = ""

  for (let i = 0; i < size - 1; i++) {
    print = ''
    for (let j = 1; j <= width; j++) {
      if (j == width - 2 || j == 3) {
        print += '*'
      }
      else if (isDoor(size, heightDoor, widthDoor, i, j)) {
        print += '#'
      }
      else if (i == size - 2 && j % 2 == 1 && j > 1 && j < width) {
        print += '*'
      }
      else {
        print += ' '
      }
    }
    console.log(print)
  }
}

function generateHouse(size, heightDoor, widthDoor) {
  //your code here

  if(size<5 || heightDoor < 3 || widthDoor < 3){
    return "Minimum input value of size is four and minimum  input value of height and width of door are three"
  }

  buildRoof(size)
  buildSquareAndDoor(size, heightDoor, widthDoor)

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
