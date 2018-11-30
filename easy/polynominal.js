function polynominal(str) {
  let strArr = str.split('+')
  let objKoefisien = generateUnik(strArr)
  let keysObjKoefisien = Object.keys(objKoefisien)
  let valuesObjKoefisien = Object.values(objKoefisien)

  for (let i = 0; i < strArr.length; i++) {
    let koefisien = ''
    let num = 0
    //new
    // let numStr = ''
    for (let j = 0; j < strArr[i].length; j++) {
      if (cekKoefisien(strArr[i][j])) {
        koefisien += strArr[i][j]
      }
      else if (cekNum(strArr[i][j])) {
        num += Number(strArr[i][j])
      }
    } 
    for (let k = 0; k < keysObjKoefisien.length; k++) {
      if (koefisien.length === 0 && keysObjKoefisien[k].length === 0) {
        valuesObjKoefisien[k] += num
      }
      else if (keysObjKoefisien[k] === koefisien) {
        if (num === 0) {
          valuesObjKoefisien[k] += 1
        }
        else {
          valuesObjKoefisien[k] += num
        }
      }
    }
  }
  // console.log(keysObjKoefisien, valuesObjKoefisien);
  
  let finalResult = mergeResult(keysObjKoefisien, valuesObjKoefisien)
  return finalResult
}

function mergeResult(keys, values) {
  let result = []
  for (let i = 0; i < keys.length; i++) {
    let angka = ''
    if (keys[i].length === 0) {
      angka = values[i]
    }
    else if (values[i] === 1) {
      angka = keys[i]
    }
    else {
      angka = values[i]
      angka += keys[i]
    }
    result.push(angka)
  }
  return result.join('+')
}

function cekKoefisien(kons) {
  let koefisien = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < koefisien.length; i++) {
    if (kons === koefisien[i]) {
      return true
    }
  }
  return false
}

function cekNum(num) {
  let numList = '0123456789'
  for (let i = 0; i < numList.length; i++) {
    if (num === numList[i]) {
      return true
    }
  }
  return false
}

function generateUnik(data) {
  let obj = {}
  for (let i = 0; i < data.length; i++) {
    let koefisienGabung = ''
    for (let j = 0; j < data[i].length; j++) {
      if (cekKoefisien(data[i][j])) {
        koefisienGabung += data[i][j]
      }
    }
    if (obj[koefisienGabung] === undefined) {
      obj[koefisienGabung] = 0
    }
  }
  return obj
}

//TEST CASE
console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b //belum selesai
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a