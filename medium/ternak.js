function generateBoard(str) {
  //your code here
  // console.log(str);
  var result = [];
  var isi = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'C') {
      isi.push('COW');
    }
    else if (str[i] === 'H') {
      isi.push('HORSE');
    }
    else if (str[i] === 'S') {
      isi.push('SHEEP');
    }
    else if (str[i] === 'P') {
      isi.push('PIG');
    }
    if (isi.length === 4){
      result.push(isi);
      isi = [];
    }
  }
  return result;
}

function getCagesAnimals(animals) {
  //your code here
  // animals = animals.join();
  // animals = animals.split(',');
  // console.log(animals);
  var result = [];
  var cow = 0;
  var sheep = 0;
  var pig = 0;
  var horse = 0;
  for (var i = 0; i < animals.length; i++) {
    var isi = [];
    var isikedua = [];
    for (var j = 0; j < animals[i].length; j++) {
      if (animals[i][j] == 'PIG'){
        if (pig <= 3){
          isi.push('PIG');
          pig++;
        }
        else{
          isikedua.push('PIG');
        }
      }
      else if (animals[i][j] == 'HORSE') {
        if (horse <= 2){
          isi.push('HORSE');
          horse++;
        }
        else{
          isikedua.push('HORSE');
        }
      }
      else if (animals[i][j] == 'COW') {
        if (horse <= 2){
          isi.push('COW');
          horse++;
        }
        else{
          isikedua.push('COW');
        }
      }
      else if (animals[i][j] == 'SHEEP') {
        if (horse <= 1){
          isi.push('SHEEP');
          horse++;
        }
        else{
          isikedua.push('SHEEP');
        }
      }
    }
    if (pig >=3 && cow >=2 && horse >=2 && sheep >=1){
      result.push(isi);
    } else{
      result.push(isi);
      horse = 0;
      cow = 0;
      pig = 0;
      sheep = 0;
    }
  }
  return result;
}

// DRIVER CODE

console.log(getCagesAnimals(generateBoard('CHCPSCSHHPSHCPPH')))
/* OUTPUT
[
  [ 'Cow', 'Horse', 'Cow', 'Pig', 'Sheep', 'Horse', 'Pig', 'Pig' ],
  [ 'Cow', 'Sheep', 'Horse', 'Horse', 'Cow', 'Pig' ],
  [ 'Sheep', 'Horse' ]
]
*/
console.log(getCagesAnimals(generateBoard('CCCCHHHHPPPPSSSS')))
/* OUTPUT
[
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Pig', 'Pig', 'Sheep' ],
  [ 'Cow', 'Cow', 'Horse', 'Horse', 'Pig', 'Sheep' ],
  [ 'Sheep' ],
  [ 'Sheep' ]
]
*/
