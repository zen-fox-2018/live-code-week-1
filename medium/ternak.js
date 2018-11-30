function generateBoard(str) {
  let result = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'C') {
      var hewan = 'Cow';
    } else if (str[i] ===  'H') {
      hewan = 'Horse';
    } else if (str[i] === 'S') {
      hewan = 'Sheep'
    } else if (str[i] === 'P') {
      hewan = 'Pig';
    }
    result.push(hewan);
  }
  return result;
}

function getCagesAnimals(animals) {
  // console.log(animals);
  var ternak = [
    { name: 'Sheep', jumlah: 1 },
    { name: 'Horse', jumlah: 2 },
    { name: 'Cow', jumlah: 2 },
    { name: 'Pig', jumlah: 3 }
  ]

  var result = [];
  for (let i = 0; i < ternak.length; i++) {
    var count = 0;
    var hasil = []
    var isSame = false;
    for (let j = 0; j < animals.length; j++) {
      if (ternak[i].name === animals[j] && ternak[i].jumlah > count) {
        isSame = true;
      }
      if (isSame) {
        hasil.push(animals[j]);
        count++;
        hasil = hasil.slice(j, 1);
      }
    }
    count = 0;
    result.push(hasil);
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
