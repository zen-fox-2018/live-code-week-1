function polynominal(str) {

  if(str.length < 2) {
    return str
  } else {

    let strSplit = str.split("+");
    // let kamus = "abcdefghijklmnopqrstuvwxyz"
    let temp = []
    for(let i = 0; i < strSplit.length; i++) {
      let strNum = strSplit[i].match(/[a-z]+|[^a-z]+/gi);
      temp.push(strNum)

    }

    let countA = 0
    let countB = 0
    let countAb = 0

    temp.forEach(element => {
      if (element[1] === "a") {
        countA += Number(element[0])
      } else if (element[1] === "ab") {
        countAb += Number(element[0])
      } else if (element[1] === "b") {
        countB += Number(element[0])
      }
    })

    console.log(`${countA}a+${countAb}ab+${countB}b`)
  }
}

console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
// console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
// console.log(polynominal('a+2a+3a+4a+5a')) // 15a
// console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
// console.log(polynominal('1')) // 1
// console.log(polynominal('a'))  // a

// regex str.match(/[a-z]+|[^a-z]+/gi);

// - tidak ada operator lain selain `+`
// - tidak perlu diurutkan hasilnya jadi apabila pada test case adalah `4+12a+3b` sedangkan jawaban kamu `12a+3b+4` ini sudah benar
// - apabila bilangan tidak punya koefisien contoh `5` maka tampilkan `5`, jika tidak memiliki angka tapi punya koefisien sepert `ab` maka tampilkan `ab`
// - Kamu boleh membuat function lain yang dapat membantu kamu menyelesaikan masalah