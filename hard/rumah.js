function generateHouse (size, heightDoor, widthDoor) {
  if(size < 5 || heightDoor < 3 || widthDoor < 3) {
    return `rumah tidak dapat dibuat`
  }
  let tinggi = (size*2) - 2
  let lebar = (heightDoor*widthDoor) + tinggi - (heightDoor-widthDoor)
  let result = []
  for (let i = 0 ; i <= tinggi ; i++) {
    let temp = []
    for (let j = 0 ; j < lebar ; j++) {
      if(i === 0 && j === Math.round(lebar/2)-1){
        temp.push("*")
      }else if(i === size-1){
        temp.push("*")
      } else if( i === tinggi && j >1 && j < lebar-2) {
        temp.push("*")
      } else if (i > size-1 && i < tinggi && (j === 2 || j === lebar-3)) {
        temp.push("*")

      } else if ( i > 0 && i < size && (j === 2 * )) {
        temp.push("0")
      }
      else{
        temp.push(" ")
      }
    }
    result.push(temp.join(""))
    
  }
  console.log(result)
  //your code here
}


console.log("* * * * * * * * *".length)
generateHouse(5, 3, 3)
/* OUTPUT
 12345123451234512
1        *
2      *   *     6
3    *       *   4   
4  *           * 2
5* * * * * * * * * 
6  *           *
7  *   # # #   *
8  *   #   #   *
9  * * # # # * *
*/
generateHouse(6, 4, 3)
/* OUTPUT
1  12345678*
2        *   *   8
3      *       * 6
4    *           *   4
5  *               * 2
6* * * * * * * * * * *
7  *               *
8  *     # # #     *
9  *     #   #     *
10 *     #   #     *
11 * * * # # # * * *  
 
*/
