function polynominal(str) {
  //your code here
   strArray = str.split('+')
   console.log(strArray)
   let output = []
   for(let i =0; i < strArray.length; i++){
    var outputDalam=[]
    let tempAngka=''
    let tempVariabel=''
    for(let j = 0; j < strArray[i].length; j++){
      if(!Number(strArray[i][j]) && strArray[i][j] !=0){
        tempVariabel += strArray[i][j]
      }else {
        tempAngka += strArray[i][j]
      }
      }   
      outputDalam.push(tempAngka,tempVariabel)
    output.push(outputDalam)
   }
   var objVokal= new Object
   for(let i = 0 ;i<output.length;i++){

    if(!objVokal[output[i][1]]){
      objVokal[output[i][1]] = 0
    }
      objVokal[output[i][1]] += Number(output[i][0]) 
   }
   let hasil=[]
   for(let isi in objVokal){
    
      hasil.push([String([objVokal[isi]]),isi])
    }

   console.log(hasil)
   let outputFinal =[]
   for(let i = 0;i < hasil.length;i++){
    outputFinal.push(hasil[i].join(''))
   }
   
   console.log(outputFinal)
    
   return outputFinal.join('+')
}


console.log(polynominal('270a+33ab+45b+4a+3b')) // 274a+33ab+48b
console.log(polynominal('a+2ab+3b+4c+5bc')) // a+2ab+3b+5bc+4c
console.log(polynominal('a+2a+3a+4a+5a')) // 15a
console.log(polynominal('a+2a+3b+4a+5a+4')) // 4+12a+3b
console.log(polynominal('1')) // 1
console.log(polynominal('a'))  // a
