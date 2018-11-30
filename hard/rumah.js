function generateHouse (size, heightDoor, widthDoor) {
 var hasilAkhir = ''
  let deck = size -1
  let tinggi = (size*2)-1
  let lebar =  (size*3) + Math.floor(size/2)-1
  let tengah =  Math.floor(lebar/2)
  // console.log(tengah)
  // console.log(lebar)
  for(i = 0; i < tinggi; i++){
  //  console.log(i)
    let result = ''
    for(j = 0; j <= lebar; j++){
      if(i == 0 && j == tengah){
        result +='*'
      }
      else if(i == deck && j % 2== 0){
        result +='*'
      }else if( i > 0 && j ==  tengah -(i*2) && i != deck|| i > 0 && j == tengah +(i*2) && i != deck){
        result +='*'
      }
      else if (i > deck && j == 2 || i > deck && j == lebar-2){
        result +='*'
      }else if (i == tinggi -1 && j >= 2 && j <= lebar-2 && j % 2 == 0 && j != heightDoor*2 && j != tengah+2 && j != tengah){
        result +='*'
      }
      else if(i >= tinggi-heightDoor && j == heightDoor*2 ||i >= tinggi-heightDoor && j == tengah+2){
        result += '#'
      }
      else if(i == tinggi-heightDoor && j > heightDoor*2 && j <= tengah + 2 && j % 2 == 0){
        result += '#'
      }
      else if(i == tinggi -1 && j > heightDoor*2 && j <= heightDoor*3 && j % 2 == 0 ){
        result += '#'
      }
      else {
        result += ' '
      }
      
    } 
      console.log(result+'\n')
     // hasilAkhir += result +'\n'
  }
  //return hasilAkhir +'\n'
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
