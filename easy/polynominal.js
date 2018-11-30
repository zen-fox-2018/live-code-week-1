function polynominal(str) {
  let temp = []
  let arr = str.split('+').forEach(e => {temp.push(e.split(''))})

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      // let temp2 = []
      // g bisa di jason parse
      // if (!temp[i][j].match(/[a-z]/gi)) {
      //   // console.log('masuk')
      //   temp2.push([JSON.parse(temp[i][j])])
      // } else {
      //   temp2[temp2.length-1].push(temp[i][j])
      // }
    }
  }
 
  // console.log(typeof JSON.parse('3'))

  return temp
}

  // console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
  // console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
  // console.log(polynominal('a+2a+3a+4a+5a')) // 15a
  console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
  // console.log(polynominal('1')) // 1
  // console.log(polynominal('a'))  // a