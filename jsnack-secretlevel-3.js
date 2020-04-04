
var arrayOne = [];
var arrayTwo = [];

//Randomly populate the 2 arrays
for (var i = 0; i < randomGenie(50,1000) ; i++) {
  arrayOne.push (randomGenie(0,10000));
}
console.log(arrayOne.length);

for (var i = 0; i < randomGenie(50,1000) ; i++) {
  arrayTwo.push (randomGenie(0,10000));
}
console.log(arrayTwo.length);

if (arrayOne.length > arrayTwo.length) {
  var diff = arrayOne.length - arrayTwo.length;

  for (var k = 0; k < diff; k++) {
    arrayTwo.push (randomGenie(0,10000));
  }
}
else if (arrayOne.length < arrayTwo.length) {
  var diff = arrayTwo.length - arrayOne.length;

  for (var k = 0; k < diff; k++) {
    arrayOne.push (randomGenie(0,10000));
  }
}

console.log(diff);
console.log(arrayOne.length);
console.log(arrayTwo.length);

//Generate a random in a range min max
function randomGenie(min, max){
  var randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
  return randomNumber;
}
