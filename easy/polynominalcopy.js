function polynominal(str) {
  str = str.split('+');
  // console.log(str);

  //split angka
  var arr = [];
  var angka = '0123456789';
  for (let i = 0; i < str.length; i++) {
    let arrAngka = [];
    let arrHuruf = [];
    for (let j = 0; j < str[i].length; j++) {
      let isAngka = false;
      for (let k = 0; k < angka.length; k++) {
        if (str[i][j] === angka[k]) {
          arrAngka.push(angka[k]);
          isAngka = true;
        }
      }
      if (!isAngka) {
        arrHuruf.push(str[i][j]);
      }
    }
    arrAngka = arrAngka.join('');
    arrHuruf = arrHuruf.join('');
    arr.push([Number(arrAngka), arrHuruf]);
  }
  // console.log(arr);

  //cari huruf yang sama
  var obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i][1]] === undefined) {
      obj[arr[i][1]] = arr[i][0];
    } else {
      obj[arr[i][1]] += arr[i][0];
    }
  }

  let keys = Object.keys(obj);
  let result = [];
  let combine = '';
  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === 0) {
      combine += 1;
    }
    combine = obj[keys[i]] + keys[i];
    result.push(combine);
  }
  result = result.join('+');
  return result;
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a
