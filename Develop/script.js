// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // let passwordLenght = +prompt("Choose how many characters do you want? Type number from 8 to 128.");
  // let useUpperCase = prompt("Include Upper Case characters");
  // let useLowerCase = prompt("Include Lower Case characters");
  // let useNumbers = prompt("Include Numbers");
  // let useSpecialSymbols = prompt("Include Special Symbols");

  
  var password = generatePassword(8);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function to generate password
function generatePassword(passwordLenght,useUpperCase,useLowerCase,useNumbers,useSpecialSymbols) {
  let upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
  let symbolsArray = ['-','!','+','=','*','?','|','@','<','>'];
  // define which array we need to merge by input parameters.
  let alphabetArray = [];
  alphabetArray = alphabetArray.concat(upperCaseArray); //alphabetArray: ['A','B']
  alphabetArray = alphabetArray.concat(lowerCaseArray);
  alphabetArray = alphabetArray.concat(numbersArray);
  alphabetArray = alphabetArray.concat(symbolsArray);


  debugger;
  // 
  let result = "";
  for (let i = 0; i < passwordLenght; i++) {
    // 1. Get random index (line 33) [x]
    // 2. Get random character from the alphabetArray (line 34) [x]
    // 3. append the character to the result string. []
    let idx = getRandomInt(alphabetArray.length); // 0 including - alphabet.length not including border value,
    let C = alphabetArray[idx];
    result += C; // result = result + <something>;
  }
  
  return result;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
