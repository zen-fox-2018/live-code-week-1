function generateHouse (size, heightDoor, widthDoor) {
  //your code here
  if(size < 5 && heightDoor < 3, widthDoor < 3) {
    return 'minimal size 5, dan minimal heightdoor dan widthdoor adalah 3'
  }else{
    for(let i = 1; i <= size*2 ; i++) {
      let hasil =  ''
      for( let j = size; j > 1 ; j--) {
        if(i === size){
          hasil += ('*')
        }else if(i === size*2 && j !== size){
          hasil += '*'
        }else if (i === j){
          hasil += '*'
        }else if (j === size-1 &&  i > size){
          hasil += '*'
        }else {
          hasil += ' '
        }
        
      }
      for( let j = 1; j <= size ; j++) {
        if(i === size){
          hasil += ('*')
        }else if(i === size*2 && j !== size){
          hasil += '*'
        }else if (i === j) {
          hasil += '*'
        }else if (j === size-1 &&  i > size){
          hasil += '*'
        }else {
          hasil += ' '
        }
      }
      console.log(hasil)
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
