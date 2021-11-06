let readlineSync = require("readline-sync");
var value = readlineSync.question("enter any city= ");
var guess = "kanpur";
if (guess != value){
console.log("your answer is wrong");
} 
else{
console.log("your answer is correct");
}
// here we are guessing place name
