function generateHouse (size, heightDoor, widthDoor) {
  //your code here
  let hasil = ''
  let dasar = size * 2 -1
  let middle = size -1
  let output=[]
  for(let i=0; i < size; i++){
    let outDalam=[]
    let bintang=''
    for(let j=0; j< dasar; j++){
      if(i == middle || ( j == middle +i || j == middle -i)){
        bintang = '*'
      }
      else{
        bintang=' '
      }
      outDalam.push(bintang)
    }
    output.push(outDalam.join(''))
  }
   hasil += output.join('\n')
   let outputPersegi=[]
   let tinggiBangunan = heightDoor *2 +1
    for(let i = 0; i< size  ;i++){
      let outputPersegiDalam=[]
      let bintang=''
      for(let j = 0; j <= tinggiBangunan ;j++){
        if((j==1 || j == tinggiBangunan  )&& i!=0 || i == size ){
          bintang='*'
        }else{
          bintang=' '
        }

        outputPersegiDalam.push(bintang)
      }
      outputPersegi.push(outputPersegiDalam.join(''))
    }
    hasil += outputPersegi.join('\n')
   console.log(hasil)
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
// /* OUTPUT
//           *
//         *   *
//       *       *
//     *           *
//   *               *
// * * * * * * * * * * *
//   *               *
//   *     # # #     *
//   *     #   #     *
//   *     #   #     *
//   * * * # # # * * *

// */
