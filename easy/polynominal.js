function polynominal(str) {
  // console.log(str)
  let number = str.split("+")
  let kamus = "abcdefghijklmnopqrstu"

  if(number.length === 1) {
    return number[0]
  }
  let angka = number.map(element => {
    return element.split("")
    // console.log(benar)
  });

  let arr = []
  for (let i = 0 ; i < angka.length ; i++) {
    for (let j = i+1 ; j < angka.length ; j++) {
      let num = angka[i]
      let nums = angka[j]
      if(num[num.length-1] === nums[nums.length-1] && num[num.length-2] === num[nums.length-2] || num[num.length-1] === nums[nums.length-1]) {
        arr.push([num.join(""),nums.join('')])
        number.map(element => {
          if(element[element.length-1])
        })
      }
    }

  }
  console.log(arr)
  

  
}
console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
// console.log(polynominal('1')) // 1
//   console.log(polynominal('a'))  // a