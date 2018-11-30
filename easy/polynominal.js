function polynominal(str) {
  //your code here
  let numArr = str.split('+')
  let temp = ''
  let arr = []
  for(let i = 0; i < numArr.length; i++) {
    for(let j = 0; j < numArr[i].length; j++){
      if (numArr[i][j] == Number(numArr[i][j])){
        temp+= numArr[i][j]
      }else if (numArr[i][j] !== Number(numArr[i][j]) && j !== numArr[i].length-1 ){
        arr.push(temp)
        temp=''
        temp+= numArr[i][j]
      }else if (numArr[i][j] !== Number(numArr[i][j])  && j === numArr[i].length-1 && numArr[i][j-1] != Number(numArr[i][j-1])  ){
        temp+= numArr[i][j]
        arr.push(temp)
        temp = ''
      }else if (j === numArr[i].length-1 && numArr[i][j-1]  == Number(numArr[i][j-1]) && numArr[i][j] !== Number(numArr[i][j]) ) {
        arr.push(temp)
        temp= ''
        temp+= numArr[i][j]
        arr.push(temp)
        temp = ''
      }
    }
  }

  let hasil = ''
  let obj = {}
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      if(obj[arr[i]] === undefined){
        obj[arr[i]] = 0
      }
      obj[arr[i]] += Number(arr[i-1])
    }
  }

  for(let i = 0; i < Object.keys(obj).length; i++){
    if(i != Object.keys(obj).length-1){
      hasil+= Object.values(obj)[i]+Object.keys(obj)[i]+ '+'
    }else{
      hasil+= Object.values(obj)[i]+Object.keys(obj)[i]
    }
  }
  
  return hasil

}


console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a