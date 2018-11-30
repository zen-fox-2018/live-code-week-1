function polynominal(str) {
  //your code here
  let strSplit = str.split("+");
  // console.log(strSplit);
  let object = {};
  for (let i = 0; i <= strSplit.length-1; i++) {
    var tempAngka = ""
    var tempHuruf = ""
    for (let j = 0; j <= strSplit[i].length-1; j++) {
      if (checkAngka(strSplit[i][j]) === true) {
        tempAngka += strSplit[i][j];
      } else {
        tempHuruf += strSplit[i][j];
      }
    }
    if (object[tempHuruf] === undefined) {
      object[tempHuruf] = tempAngka; 
    } else {
      if ( object[tempHuruf].length === 0) {
        object[tempHuruf] = 1 + Number(tempAngka);
      } else {
        object[tempHuruf] = Number(object[tempHuruf]) + Number(tempAngka);
      }
    }
  }

  let result = "";
  let keys = Object.keys(object);
  let values = Object.values(object);

  for (let i = 0; i <= keys.length-1; i++) {
    if (i !== 0) {
      result += "+";
    }
    result += (values[i] + keys[i]);
  }
  return result;
}
function checkAngka(str) {
  let angka = "0123456789";

  for (let i = 0; i <= angka.length-1; i++) {
    if (angka[i] === str) {
      return true;
    }
  }
  return false;
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a