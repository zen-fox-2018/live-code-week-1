function generateHouse (size, heightDoor, widthDoor) {
  let height = 2 * size - 1;
  let myHouse = '';
  for (let i = 1; i <= height; i++) {
    let tempHouse = '';
    for (var j = 1; j <= height; j++) {
      if (i < size) {
        if (j === size - (i - 1) || j === size + (i - 1)) {
          tempHouse += '* ';
        } else {
          tempHouse += '  ';
        }
      } else if (i === size) {
        tempHouse += '* ';
      } else if (i === height){
        if ( j === 1 || j === height){
          tempHouse += '  ';
        } else if (j <= Math.floor((height - widthDoor) / 2) || j > Math.floor((height - widthDoor) / 2) + widthDoor) {
          tempHouse += '* ';
        } else {
          tempHouse += '# ';
        }
      } else if (i <= height - heightDoor) {
        if(j === 2 || j === height - 1) {
          tempHouse += '* ';
        } else {
          tempHouse += '  ';
        }
      } else if (i === height - heightDoor + 1) {
        if (j === 2 || j === height - 1 ){
          tempHouse += '* ';
        } else if (j >= Math.floor((height - widthDoor) / 2) + 1 && j <= Math.floor((height - widthDoor) / 2) + widthDoor) {
          tempHouse += '# ';
        } else {
          tempHouse += '  ';
        }
      } else {
        if (j === 2 || j === height - 1 ){
          tempHouse += '* ';
        } else if (j === Math.floor((height - widthDoor) / 2) + 1 || j === Math.floor((height - widthDoor) / 2) + widthDoor) {
          tempHouse += '# ';
        } else {
          tempHouse += '  ';
        }
      }
    }
    console.log(tempHouse);
  }
  //your code here
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
