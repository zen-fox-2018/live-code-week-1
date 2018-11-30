function polynominal(strPolynom) {
  //your code here
  let arrPolynom = strPolynom.split('+')
  let objPolynom = {}
  let arrOutput = []

  for (let i = 0; i < arrPolynom.length; i++) {
    let coefficient = ''
    let variable = ''
    

    for (let j = 0; j < arrPolynom[i].length; j++) {
      if(arrPolynom[i][j] % 1 === 0){
        coefficient += arrPolynom[i][j]
      } else{
        variable += arrPolynom[i][j]
      }
    }

    if(Number(coefficient) === 0){
      coefficient = '1'
    }

    if(!objPolynom[variable]){
      objPolynom[variable] = Number(coefficient)
    } else{
      objPolynom[variable] += Number(coefficient)
    }
  }


  for(let i in objPolynom){
    if(objPolynom[i] === 1 && i !== ''){
      arrOutput.push(i)
    } else{
      arrOutput.push(objPolynom[i] + i)
    }
  }
  
  return arrOutput.join('+')
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a