function polynominal(str) {
  let strArray = str.split('+')
  // return strArray
  let resultArray = []
  for (let i = 0; i < strArray.length; i++) {
    var alphabet = ''
    var number = ''
    for (let j = 0; j < strArray[i].length; j++) {
      // if(String(strArray[i][j]) == strArray[i][j]){

      // }
      if (Number(strArray[i][j]) == strArray[i][j]) {
        number += strArray[i][j]
      }
      else {
        alphabet += strArray[i][j]
      }
    }
    resultArray.push([number, alphabet])
  }
  // console.log(resultArray)
  var hasil = {}
  for (var i = 0; i < resultArray.length; i++){
    abjad = resultArray[i][1]
    if (hasil[abjad] === undefined){
      hasil[abjad] = 0
    }
    if(resultArray[i][0] === ''){
      resultArray[i][0] = 1 
    }
    hasil[abjad] = hasil[abjad] + Number(resultArray[i][0])
  }
  var untukDitampilkan = []
  for (var i in hasil) {
    if(hasil[i] == 1 && i !== '') {
      hasil[i] = ''
    }
    untukDitampilkan.push(hasil[i]+i)
  }
  return untukDitampilkan.join('+')
}


console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a