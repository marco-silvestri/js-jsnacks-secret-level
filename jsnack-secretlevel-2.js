// Check if the input is a prime number

// Reference
var result = document.getElementById('list');

//Declare variables
//var askPrime = sanitizedNumericalInput('Insert a number: ');
var isPrime;

//Check numbers between 0 and 1000
for (var i = 0; i < 1000; i++) {
  isPrime = checkPrime(i);

  if (isPrime) {
    console.log('Yay, we have a prime', ' ', i);
    result.innerHTML += '<li>' + i + '</li>';
  }
  else {
    console.log('No prime, sorry.');
  }
}

//Check whetever a number is prime or not
function checkPrime (number){
  var isPrime;
  var sqrRoot = Math.sqrt(number);

  if (number == 2 || number == 3) {
    isPrime = true;
    return isPrime;
  }
  else {
    for (var i = 2; i < sqrRoot; i++) {
      if (number % i == 0){
        isPrime = false;
        return isPrime;
      }
      else {
        isPrime = true;
        return isPrime;
      }
    }
  }
}

//Force a non-empty numerical input
function sanitizedNumericalInput(question) {
   do {
     usersInputRaw = parseInt(prompt(question).trim());
   } while (usersInputRaw == null || isNaN(usersInputRaw));

   return usersInputRaw;
}
