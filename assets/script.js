// HTML input variables
var passwordText = document.querySelector("#password");
var lowerEl = document.querySelector("#input1");
var upperEl = document.querySelector("#input2");
var numberEl = document.querySelector("#input3");
var specEl = document.querySelector("#input4");
var lengthEl = document.querySelector("#lengthInput");

// Char Strings
var generateBtn = document.querySelector("#generate");
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChars = "!@#$%^&*()";

// Setting generatePassword function
function generatePassword() {
  let pass = "";
  let length = lengthEl.value;
  console.log(length)
  let chars = "";

  // Applying Char strings based on what boxes are checked using ternary operator
  chars += lowerEl.checked ? charsLower : "";
  chars += upperEl.checked ? charsUpper : "";
  chars += numberEl.checked ? numbers : "";
  chars += specEl.checked ? specialChars : "";

  for (var i = 0; i <= length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    pass += chars.substring(rand, rand +1);
  }

  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
