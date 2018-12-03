function polynominal(str) {
  str = str.split('+');
  // console.log(str);

  //split angka
  var arr1 = [];
  var arr2 = [];
  var angka = '0123456789';
  for (let i = 0; i < str.length; i++) {
    let arrAngka = [];
    let arrHuruf = [];
    for (let j = 0; j < str[i].length; j++) {
      let isAngka = false;
      for (let k = 0; k < angka.length; k++) {
        if (str[i][j] === angka[k]) {
          arrAngka.push(str[i][j]);
          isAngka = true;
        }
      }
      if (!isAngka) {
        arrHuruf.push(str[i][j]);
      }
    }
    arrAngka = arrAngka.join('');
    arrHuruf = arrHuruf.join('');
    arr1.push(arrAngka);
    arr2.push(arrHuruf);
  }
  console.log(arr1, arr2);

  //cari huruf yang sama
  var result = [];
  var calculate = 0;
  for (let i = 0; i < arr2.length; i++) {
    var isSame = false;
    for (let j = i+1; j <= arr2.length; j++) {
      if (arr2[i] === arr2[j] && i !== j) {
        if (calculate === 0) {
          calculate += Number(arr1[i]);
        } else {
          calculate += Number(arr1[j]);
        }
        console.log(arr2[i], arr1[i], '=========', arr2[j], arr1[j], calculate);
        arr1.splice(j, 1);
        arr2.splice(j, 1);
        isSame = true;
      }
    }
    if (!isSame) {
      calculate = Number(arr1[i]);
    }
    if (calculate !== 0) {
      var combine = calculate.toString() + arr2[i];
      result.push(combine);
      calculate = 0;
    } else if (calculate === 0) {
      result.push(arr2[i]);
    }
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
