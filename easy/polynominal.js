function polynominal(str) {
  //your code here
  var newStr = str.split('+');
  var kelompok = {};
  var huruf = '';
  var angka = '';
  var result = '';
  for (var i = 0; i < newStr.length; i++) {
    huruf = newStr[i].match(/[a-z]/gi);
    // huruf = huruf.replace(/[,]/ , '');
    if (kelompok[huruf] === undefined) {
      angka = newStr[i].match(/[0-9]/gi)
      if (angka !== null) {
        angka = angka.join();
        var angkaBaru = '';
        for (let j = 0; j < angka.length; j++) {
          if (angka[j] !== ','){
            angkaBaru += angka[j];
          }
        // angka = angka.replace(/[,]/,'');
          angka = Number(angkaBaru);
          kelompok[huruf] = angka
        }
      }
      else {
        kelompok[huruf] = 1;
      }
    }
    else if (kelompok[huruf] > 0){
      angka = newStr[i].match(/[0-9]/gi).join();
      var angkaBaru = '';
      for (let k = 0; k < angka.length; k++) {
        if (angka[k] !== ','){
          angkaBaru += angka[k];
        }
      }
      angka = Number(angkaBaru);
      kelompok[huruf] = kelompok[huruf] + angka;
    }
  }
  var keys = Object.keys(kelompok);
  for (var l = 0; l < keys.length; l++) {
    if (kelompok[keys[l]] === 1) {
      result += keys[l];
    }
    else{
    result += kelompok[keys[l]]+keys[l] + '+';
    }
  }
  return result.substr(0,result.length-1);
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a
