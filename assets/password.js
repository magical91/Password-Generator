var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number= "0123456789";
var symbol= "!@#$%^&*()_+~`|:;?><,./-=";
var userChoice = '';
var password = '';


function generatePassword(){
    var promptLength = parseInt(window.prompt("Enter password length. Must be at least 8 characters but no more than 128."));


if (promptLength < 8 || promptLength > 128) {
    window.alert("Password needs to be at least 8 characters long and no more than 128!");
    return ; 
  }
    // if prompt meets criteria save info temporarily
    else {
        var confirmLowerCase = window.confirm("Would you like to include lower case letters?");  
        var confirmUpperCase = window.confirm("Would you like to include upper case letters?");
        var confirmNumber = window.confirm("Would you like to include numbers?");
        var confirmSpecial = window.confirm("Would you like to include special characters?");


        if(confirmLowerCase === true){
            userChoice += lowerCase // userChoice + lowerCase = userChoice;
        }

        if(confirmUpperCase === true){
            userChoice += upperCase
        }

        if(confirmNumber === true){
            userChoice += number
        }

        if(confirmSpecial === true){
            userChoice += symbol
        }
     console.log("userChoice", userChoice)

        for(let i = 0; i < promptLength; i++){

            let randomizer = Math.floor(userChoice.length * Math.random())

            console.log("randomizer", randomizer)

            password += userChoice.charAt(randomizer)
        }
  }

  document.getElementById("password").textContent = password;
}

var generatebtn = document.getElementById("generate");
generatebtn.addEventListener("click", function(){
    generatePassword()
})
