// Print the pow of 2 till 1000

var result = document.getElementById('list');
var pows = 0;
var exponent = 0;

while (Math.pow(2, exponent) < 10000) {
  pows = Math.pow(2, exponent);
  result.innerHTML += '<li>' + pows + '</li>';
  exponent++;
}
