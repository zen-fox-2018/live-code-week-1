function polynominal(str) {
  //your code here
  let result = '';
  let objResult = new Object();
  str = str.split('+');
  str.forEach( e => {
    let angka = '';
    let huruf = '';
    for (let i = 0; i < e.length; i++) {
      if (e[i].toLowerCase() != e[i].toUpperCase()) {
        huruf += e[i];
      } else {
        angka += e[i]
      }
    }
    if(objResult[huruf] === undefined) {
      objResult[huruf] = 0;
    }
    if(angka === '') {
      angka = 1;
    }
    objResult[huruf] += +angka;
  });

  for (let hasil in objResult) {
    if(objResult[hasil] === 1 && hasil != ''){
      result += hasil;
    } else {
      result += objResult[hasil] + hasil;
    }
    if(hasil != Object.keys(objResult)[Object.keys(objResult).length-1]) {
      result += '+';
    }
  }
  return result;
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a
