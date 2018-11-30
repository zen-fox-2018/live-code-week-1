function polynominal(str) {
  //your code here
  let output = ''

  let input = str.split('+')
  let arrA = []
  let arrB = []
  let arrC = []
  let arrAB = []
  let arrBC = []
  let arrNum = []

  for (let i = 0; i < input.length; i++) {

    if (input[i][input[i].length - 1] == 'a') {
      arrA.push(input[i])
    } else if (input[i][input[i].length - 2] == 'a' && input[i][input[i].length - 1] == 'b') {
      arrAB.push(input[i])
    } else if (input[i][input[i].length - 2] == 'b' && input[i][input[i].length - 1] == 'c') {
      arrBC.push(input[i])
    } else if (input[i][input[i].length - 1] == 'b') {
      arrB.push(input[i])
    } else if (input[i][input[i].length - 1] == 'c') {
      arrC.push(input[i])
    } else {
      arrNum.push(input[i])
    }

  }

  // console.log('ini A',arrA);
  // console.log('ini B',arrB);
  // console.log('ini AB',arrAB);

  return `${joinA(arrA)}+${joinB(arrB)}+${joinC(arrC)}+${joinAB(arrAB)}+${joinBC(arrBC)}`

}


function joinA(data) {

  let arr = []

  for (let i = 0; i < data.length; i++) {
    let number = []
    for (let j = 0; j < data[i].length; j++) {

      if (data[i][j] !== 'a') {
        number.push(data[i][j])
      }

    }
    arr.push(number)

  }

  if (gabung(arr) == 0) {
    return 'a'
  }
  return gabung(arr) + 'a'

}

function joinB(data) {

  let arr = []

  for (let i = 0; i < data.length; i++) {
    let number = []
    for (let j = 0; j < data[i].length; j++) {

      if (data[i][j] !== 'b') {
        number.push(data[i][j])
      }

    }
    arr.push(number)

  }

  if (gabung(arr) == 0) {
    return 'b'
  }
  return gabung(arr) + 'b'

}

function joinC(data) {

  let arr = []

  for (let i = 0; i < data.length; i++) {
    let number = []
    for (let j = 0; j < data[i].length; j++) {

      if (data[i][j] !== 'c') {
        number.push(data[i][j])
      }

    }
    arr.push(number)

  }

  if (gabung(arr) == 0) {
    return 'c'
  }
  return gabung(arr) + 'c'

}

function joinAB(data) {

  let arr = []

  for (let i = 0; i < data.length; i++) {
    let number = []
    for (let j = 0; j < data[i].length; j++) {
      if (j > 0) {
        
        if (data[i][j] !== 'a' && data[i][j] !== 'b') {
          number.push(data[i][j])
        }
      }

    }
    // console.log(number);
    
    arr.push(number)

  }

  if (gabung(arr) == 0) {
    return 'ab'
  }
  return gabung(arr) + 'ab'

}

function joinBC(data) {

  let arr = []

  for (let i = 0; i < data.length; i++) {
    let number = []
    for (let j = 0; j < data[i].length; j++) {

      if (data[i][j - 1] !== 'b' && data[i][j] !== 'c') {
        number.push(data[i][j])
      }

    }
    arr.push(number)

  }

  if (gabung(arr) == 0) {
    return 'bc'
  }
  return gabung(arr) + 'bc'

}



function gabung(data) {

  let result = 0

  for (let i = 0; i < data.length; i++) {
    let str = ''
    for (let j = 0; j < data[i].length; j++) {
      str = str + data[i][j]
    }
    result = result + +str
  }
  return result
}





console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a