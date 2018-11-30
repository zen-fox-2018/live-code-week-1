function generateHouse (size, heightDoor, widthDoor) {
  //your code here
  let atap = ""
  for (let i = 1; i < size * 2 ; i++) {
    let temp = "";
    for (let j = 1; j < size * 2; j++) {
      if (i <= size) {
        if (i === size || j === size - (i-1) || j === size - (i-1) || j === size + (i-1) ) {
          temp += "*"
        } else {
          temp += " "
        }
      } else if (i > size){
        if (j === 2 || j === (size * 2) - 2 || i === (size * 2)-1 && j < size - 1  || i === (size * 2)-1 && j > (size -1) + (widthDoor-1)) {
          temp += "*"
        } 
        if (i === (size * 2) - heightDoor && j >= size - Math.floor(widthDoor/2) && j <= size + Math.floor(widthDoor/2) ) {
          temp += "#"
        } else if (i >= (size * 2) - heightDoor && j === size -1 || i >= (size * 2) - heightDoor && j === (size -1) + (widthDoor-1)) {
          temp += "#"
        } else if (i === (size * 2)-1 && j >= size -1  && j <= (size -1) + (widthDoor-1)) {
          temp += "#"
        } else {
          temp += " "
        }

      }
     
    }
    console.log(temp)
  }
}

// generateHouse(5, 3, 3)
/* OUTPUT
        *
      *   *
    *       *
  *           *
* * * * * * * * * 5
  *           *
  *   # # #   *  7
  *   #   #   *
  * * # # # * * 9
   
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
/*
       		  *              
          *   *            
        *       *          
      *           *        
    *               *      
  *                   *    
* * * * * * * * * * * * * 
  *                   *   
  *                   *   
  *       # # #       *   
  *       #   #       *   
  *       #   #       *   
  * * * * # # # * * * * 
*/