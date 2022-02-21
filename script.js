
function generatePassword() {
  let passwordStr = {
    lower: caseLower,
    upper: caseUpper,
    number: randomNumber,
    symbols: specCharRandom,
  }


  return passwordStr;
}



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  

}

//Random lower case character
function caseLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Random upper case character
function caseUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Random number character
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Random special character
function specCharRandom() {
  let symbols = '!@#$%^&*()_+-=<>?{}|[]/.,';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


let index = Math.floor(Math.random() * writePassword.length);
console.log(index);
let computerChoice = writePassword[index];
console.log(computerChoice);

if (generateBtn === computerChoice) {
  writePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
