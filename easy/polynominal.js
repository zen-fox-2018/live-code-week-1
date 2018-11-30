function polynominal(str) {
  //your code here
  if(str.length === 1 ) {
    return str
  }
  let koefTemp = str.split('+')
  
  let number = []
  let koef = []
  for(let i = 0; i < koefTemp.length; i++) {
    let numTemp = ''
    let tempKoef = ''
    for(let j = 0; j < koefTemp[i].length; j++) {
      if(koefTemp[i][j] === '1' || koefTemp[i][j] === '2' || koefTemp[i][j] === '3' || koefTemp[i][j] === '4' || koefTemp[i][j] === '5' || koefTemp[i][j] === '6' || koefTemp[i][j] === '7' || koefTemp[i][j] === '8' || koefTemp[i][j] === '9' || koefTemp[i][j] === '0') {
        numTemp += koefTemp[i][j]
      } else {
        tempKoef += koefTemp[i][j]
      }
    }
    number.push(numTemp)
    koef.push(tempKoef)
  }
  let result = ''
  for(let i = 0; i < number.length; i++) {
    let resultInner = 0
    for(let j = i+1; j < number.length-1; j++ ) {
      if(koef[i] === koef[j]) {
        resultInner += Number(number[i]) + Number(number[j])
      }
    }
    result += resultInner + koef[i]
  }
  return result
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
// console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
// console.log(polynominal('a+2a+3a+4a+5a')) // 15a
// console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
// console.log(polynominal('1')) // 1
// console.log(polynominal('a'))  // a
