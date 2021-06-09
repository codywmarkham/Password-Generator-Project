// static variables
  
var abcUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUpperArr = abcUpper.split("");
var abcLower = "abcdefghijklmnopqrstuvwxyz";
var abcLowerArr = abcLower.split("");
var num = "0123456789";
var numArr = num.split("");
var sym = "!#$%&\()*+,-./:;<=>?@^[\\]^_`{|}~";
var symArr = sym.split("");

//  Prompt instruction for the user to begin

window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Main function = Password Generation

function generatePass(){
 var allChars = [];
 var resultPass = "";

// dynamic variables

 var Totlength = prompt("How many characters would you like your password to be?");

 if(Totlength <8 || Totlength > 128){
     alert("It is recommended to have a password between 8 and 128 characters long!\nPlease start over.");
 }

// Confirm the rest of character conditions
 
 else{
     if(confirm("Would you like your password to contain upper case letters?")){
         Array.prototype.push.apply(allChars, abcUpperArr);
     }

     if(confirm("Would you like your password to contain lower case letters?")){
         Array.prototype.push.apply(allChars, abcLowerArr);
     }

     if(confirm("Would you like your password to contain numbers?")){
         Array.prototype.push.apply(allChars, numArr);
     }

     if(confirm("Would you like your password to contain symbols?")){
         Array.prototype.push.apply(allChars, symArr);
     }

     if(alert("Selected character specification types will be applied!")){
     }

     if(allChars.length===0){
         alert("You must select at lease 1 type of characters to generate a password!\nPlease start over.");
     }


// Run for loop 

     else{
         for(var i=0; i<Totlength; i++){
             var random = Math.floor(Math.random()*allChars.length);
             resultPass += allChars[random];
            }
     }
     }
     

     
// Display the result
    
     document.getElementById("password").innerHTML = resultPass;
}


