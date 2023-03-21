
var speChar = true;
var numChar = true;
var lowChar = true;
var upChar = true;
var paSelection = [];
var password="";
var numPass= 0;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// created a function that ask for a number
function askNum(){
    var userchoice = prompt("choose a number between 8-128");
      {if (userchoice > 128){
        window.alert("Too big, Try again");
        askNum();
      }else if(userchoice<8){
        window.alert("Too Small, Try Again");
        askNum();
      }else {
        return numPass=userchoice;
        }
      }
  }
//created a function that checks if atleast one option was chosen
function typeChar(){
    if(!speChar && !numChar && !lowChar && !upChar){
      window.alert("Need to Choose one. Try Again");
      generatePassword();
    }
  }
//generates a password
function createPass(){
      for(i=0; i<=numPass; i++){
        x=Math.floor(Math.random() * paSelection.length)
        y=paSelection[x][Math.floor(Math.random() * paSelection[x].length)]
        password = password.concat(y);
      }
  }

  //This runs the required functions to generate the password with all condition when the button is pressed.
function generatePassword(){
  paSelection=[];
  password="";
  var NuminPass = ["0","1","2","3","4","5","6","7","8","9"];
  var lowCharinPass = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upCharinPass=  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var specinPass = ["!","@","#","$","%","^","&","*","(",")","_","+"];
//ask for number of character in password
  askNum();
//ask for type of character in password
  speChar = confirm("Do you want special character?");
    if(speChar){
      paSelection.push(specinPass);
    }
  numChar = confirm("Do you want numbers?");
    if(numChar){
      paSelection.push(NuminPass);
    }
  lowChar = confirm("Do you want lower case letters?");
    if(lowChar){
      paSelection.push(lowCharinPass);
    }
  upChar = confirm("Do you want Upper Case Letters?");
    if(upChar){
      paSelection.push(upCharinPass);
    }
// Checks if atleast one option was chosen 
  typeChar();
//generates the password
  createPass();
//returns the password on screen
  return password;
}

































