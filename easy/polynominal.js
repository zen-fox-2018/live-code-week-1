function polynominal(str) {
  let result = []
  let arrayresult = []
  let array = str.split("+")
  if (array.length === 1) {
    return array.join("")
  }
  let dic = ["0","1","2","3","4","5","6","7","8","9"]
  for (let i = 0; i < array.length; i++) {
    let numberStr = ""
    let variable = ""
    for (let j = 0; j < array[i].length; j++) {
      if (dic.indexOf(array[i][j]) !== -1) {
        numberStr = numberStr + array[i][j]
      }
      else {
        variable = variable + array[i][j]
      }
    }
    arrayresult.push([variable, numberStr])
  }
  arrayresult.sort()
  // return arrayresult

  let resultTemp = []
  let sum = 0
  let variable = arrayresult[0][0]
  for (let i = 0; i < arrayresult.length; i++) {
    if (arrayresult[i][0] === variable) {
      if (arrayresult[i][1].length === 0) {
        arrayresult[i][1] = "1"
      }
      sum = sum + Number(arrayresult[i][1])
      if (i === arrayresult.length -1) {
        if (sum === 0) {
          resultTemp = [variable]
          result.push(resultTemp.join(""))
          variable = arrayresult[i][0]
          sum = Number(arrayresult[i][1])
        }
        else {
          resultTemp = [sum,variable]
          result.push(resultTemp.join(""))
          variable = arrayresult[i][0]
          sum = Number(arrayresult[i][1])
        }
      }
    }
    else {
      if (sum === 0) {
        resultTemp = [variable]
        result.push(resultTemp.join(""))
        variable = arrayresult[i][0]
        if (arrayresult[i][1].length === 0) {
          arrayresult[i][1] = "1"
        }
        sum = Number(arrayresult[i][1])
        if (i === arrayresult.length -1) {
          if (sum === 0) {
            resultTemp = [variable]
            result.push(resultTemp.join(""))
            variable = arrayresult[i][0]
            if (arrayresult[i][1].length === 0) {
              arrayresult[i][1] = "1"
            }
            sum = Number(arrayresult[i][1])
          }
          else {
            resultTemp = [sum,variable]
            result.push(resultTemp.join(""))
            variable = arrayresult[i][0]
            if (arrayresult[i][1].length === 0) {
              arrayresult[i][1] = "1"
            }
            sum = Number(arrayresult[i][1])
          }
        }
      }
      else {
        resultTemp = [sum,variable]
        result.push(resultTemp.join(""))
        variable = arrayresult[i][0]
        if (arrayresult[i][1].length === 0) {
          arrayresult[i][1] = "1"
        }
        sum = Number(arrayresult[i][1])
        if (i === arrayresult.length -1) {
          if (sum === 0) {
            resultTemp = [variable]
            result.push(resultTemp.join(""))
            variable = arrayresult[i][0]
            if (arrayresult[i][1].length === 0) {
              arrayresult[i][1] = "1"
            }
            sum = Number(arrayresult[i][1])
          }
          else {
            resultTemp = [sum,variable]
            result.push(resultTemp.join(""))
            variable = arrayresult[i][0]
            if (arrayresult[i][1].length === 0) {
              arrayresult[i][1] = "1"
            }
            sum = Number(arrayresult[i][1])
          }
        }
      }
    }
  }
  return result.join("+")
  //Maaf kode saya buruk rupa nanti saya refactor lagi, yang penting jalan dulu yaa :D
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a
