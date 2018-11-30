function polynominal(str) {
  //your code here

  let pisah = str.split('+')
  let arrayKoefisien = [];
  let arrayAngka = [];

  if (str.length === 1) return str

  for (let i = 0; i < pisah.length; i++) {
    let koefisien = [];
    let angka = ''
    for (let j = 0; j < pisah[i].length; j++) {
      if (isNaN(pisah[i][j])) {
        koefisien += pisah[i][j]
      } else {
        angka += pisah[i][j]
      }
    }
    arrayKoefisien.push(koefisien)
    arrayAngka.push(angka)
  }

  const koefisien = [...new Set(arrayKoefisien)]
  let grup = [];

  for (let i = 0; i < koefisien.length; i++) {
    let minigrup = 0;
    for (let j = 0; j < arrayKoefisien.length; j++) {
      if (koefisien[i] === arrayKoefisien[j]) {
        // minigrup.push(+arrayAngka[j])
        if (+arrayAngka[j] === 0) {
          arrayAngka[j] = 1
        }
        minigrup += +arrayAngka[j]
      }
    }
    grup.push(minigrup)
  }

  let event = '';
  for (let i = 0; i < grup.length; i++) {
    if (i === grup.length - 1) {
      event += grup[i] + koefisien[i]
    } else {

      event += grup[i] + koefisien[i] + '+'
    }
  }

  return event
}


console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a