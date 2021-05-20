// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//While checked +prompt the code took any value, once it showed me the value Nan. I googled to find info how to check if a string contains only digits.
//I am not understanding what it does.
   let passwordLenghtString = prompt("Choose how many characters do you want? Type number from 8 to 128.");
   let isnum = /^\d+$/.test(passwordLenghtString);
   //if statement to check the value doesn't have alphabetical simbols
   if (!isnum) {
    alert("Not valid. Please type the valid number.");
    return;
   }
   //converting string to digit
   let passwordLenght = +passwordLenghtString;
  //if statement to check the value client typed
   if ( passwordLenght<8 || passwordLenght>128) {
    alert("Not valid. Please type the valid number.");
    return;
  } 
  //pop-ups showed to client to choose options
   let useUpperCaseString = prompt("Include Upper Case characters. Push any keys to Yes. Click CANCEL to No.");
   let useLowerCaseString = prompt("Include Lower Case characters. Push any keys to Yes. Click CANCEL to No.");
   let useNumbersString = prompt("Include Numbers. Push any keys to Yes. Click CANCEL to No.");
   let useSpecialSymbolsString = prompt("Include Special Symbols. Push any keys to Yes. Click CANCEL to No.");
   //checking if client clicked button CANCEL
   let useUpperCase = useUpperCaseString!= null;
   let useLowerCase = useLowerCaseString!=null;
   let useNumbers = useNumbersString!=null;
   let useSpecialSymbols = useSpecialSymbolsString!=null;
  //checking if client choose all No options in 4 questions about characteristics
   if (!useUpperCase && !useLowerCase && !useNumbers && !useSpecialSymbols) {
    alert("At least 1 option must be choosen.");
    return;
  } 
      
//calling function to generate a password based on choosen options
  var password = generatePassword(passwordLenght,useUpperCase,useLowerCase,useNumbers,useSpecialSymbols);
  //taking the whole element by ID selector password and places it into var passwordText 
  var passwordText = document.querySelector("#password");
//Sets or returns the contents of a text area
  passwordText.value = password;

}

// function to generate password
function generatePassword(passwordLenght,useUpperCase,useLowerCase,useNumbers,useSpecialSymbols) {
  //Define arrays of simbols
  let upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let numbersArray = ['0','1','2','3','4','5','6','7','8','9'];
  let symbolsArray = ['-','!','+','=','*','?','|','@','<','>'];
  // define which array we need to merge by input parameters.
  let alphabetArray = [];
 //if statement to checking if client wanted UpperCase
  if (useUpperCase) {
    alphabetArray = alphabetArray.concat(upperCaseArray);
  }
  //if statement to checking if client wanted Lower Case
  if (useLowerCase) {
    alphabetArray = alphabetArray.concat(lowerCaseArray);
  }
  
  //if statement to checking if client wanted Numbers
  if (useNumbers) {
    alphabetArray = alphabetArray.concat(numbersArray);
  }
  
  //if statement to checking if client wanted special symbols
  if (useSpecialSymbols) {
    alphabetArray = alphabetArray.concat(symbolsArray);
  }
  
 
  // resulting random string
  let result = "";
  //for loop to generate and concantinate random characters
  for (let i = 0; i < passwordLenght; i++) {
    // 1. Get random index 
    // 2. Get random character from the alphabetArray 
    // 3. append the character to the result string. 
    let idx = getRandomInt(alphabetArray.length); // 0 including - alphabet.length not including border value,
    let C = alphabetArray[idx];
    result += C; // result = result + <something>;
  }
  
  return result;
}
//copied from MDN something black box
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
