function polynominal(str) {
  //your code here
  str = str.split('+')

  let unique = []
  for (let i = 0 ; i < str.length ; i++) {
    for (let j = str[i].length -1 ; j >= 0 ; j--) {
      if (str[i][j] >= 'a'){
        unique.push(str[i][j])
      }
    }
  }

  let unikReal = []
  for (let i = 0 ; i < unique.length ; i++) {
    let cek = true
    for (let j = 0 ; j < unikReal.length ; j++) {
      if (unique[i] === unikReal[j]){
        cek = false
      }
    }
    if (cek) {
      unikReal.push(unique[i])
    }
  }

  let angka = []
  let huruf = []
  for (let i = 0 ; i < str.length ; i++) {
    let string = ''
    let numStr = ''
    for (let j = 0 ; j < str[i].length ; j++) {
      if (str[i][j] < 10){
        numStr = numStr + str[i][j]
      } else {
        string = string + str[i][j]
      }
    }
    angka.push(numStr)
    huruf.push(string)
  }

  let hurufUnik = []
  for (let i = 0 ; i < huruf.length ; i++) {
    let cek = true
    for (let j = 0 ; j < hurufUnik.length ; j++) {
      if (huruf[i] === hurufUnik[j]){
        cek = false
      }
    }
    if (cek) {
      hurufUnik.push(huruf[i])
    }
  }


  let hasil = []
  for (let i = 0 ; i < hurufUnik.length ; i++) {
    let hitung = 0
    for (let j = 0 ; j <huruf.length ; j++) {
      if (hurufUnik[i] === huruf[j]){
        hitung = hitung + +angka[j]
      }
    }
    hasil[i] = hitung
  }

  for (let i = 0 ; i < hasil.length ; i ++) {
    if (hasil[i] === 0) {
      hasil[i] = hurufUnik[i]
    } else {
      hasil[i] += hurufUnik[i]
    }
  }

  return hasil.join('+')
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a
