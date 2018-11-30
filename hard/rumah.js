function generateHouse (size, heightDoor, widthDoor) {
  //your code here
  var tampung = '';
  var tambah = size-1;
  var inc = 0;
  if (size < 5 || heightDoor < 3 || widthDoor < 3) {
    console.log('input salah');
  }
  else{
    for (var i = 0; i < size; i++) {
      if (i === size-1) {
        for (var j = 0; j < (size*2)-1; j++) {
          tampung += '*';
        }
        console.log(tampung);
      }
      else {
        for (var k = 0; k < (size*2)-1; k++) {
          if (k === tambah){
            tampung += '*';
          }
          else if (k === tambah + (inc*2)) {
            tampung += '*';
          }
          else {
            tampung += ' ';
          }
        }
        console.log(tampung);
        // console.log(inc);
        tambah--;
        inc++;
      }
      tampung = '';
    }
    tambah = 0;
    inc = 0;
  //kotak
    for (var l = 0; l < (size*2)-1; l++) {
      if (l === 0) {
        for (var m = 0; m < (size*2)-1; m++) {
          if (m === (size*2)-3 || m === 1 ) {
            tampung += '*';
          }
          else {
            tampung += ' ';
          }
        }
        console.log(tampung);
      }
      else {
        for (var n = 0; n < (size*2)-1; n++) {
          if (n === (size*2)-3 || n === 1 ) {
            tampung += '*';
          }
          else if (l > 0 && n> ) {

          }
          else {
            tampung += ' ';
          }
        }
      }
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
