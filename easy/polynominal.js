function polynominal(str) {
  let arr = str.split(`+`)
  let arrResult = arr.join(``)
  let myArray = arrResult.split(/([0-9]+)/)
  let result = ''
  let number = []
  let string = []
  let reg = /^\d+$/;
  const angka = `123456789`
  let val = 0
  
  if (myArray[0] == '') {
    myArray = myArray.slice(1)
  }

  for (let i = 0; i < myArray.length; i++) {
    if (reg.test(myArray[i][0])) {
      number.push(myArray[i])
    } else {
      string.push(myArray[i])
    }
  }

  for (let i = 0; i < number.length; i++) {
    let word = string[i]
    string = string.slice(1)

    for (let j = 0; j < string.length; j++) {
      if (string[j] == word) {
        val += (number[i] + number[i])
      }
    }

  }
  console.log(number);
  console.log(string);

  return `======`

}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
// console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
// console.log(polynominal('1')) // 1
// console.log(polynominal('a'))  // a
