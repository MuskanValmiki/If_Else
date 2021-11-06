let readlineSync = require("readline-sync");
var varx = readlineSync.questionInt("Enter any number :=");

if (varx%5==0 && varx%15==0){
    console.log("Divisible by both");
}
else{
    console.log("Not diisible by both");
}
// here we are checking it is divisible by 5 or 15 or not