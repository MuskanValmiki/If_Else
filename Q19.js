let readlineSync = require("readline-sync");
var day = readlineSync.question("enter any days= ");
if (day == "Monday" || day == "monday"){
console.log("Rajma chawal");
}
else if (day == "Tuesday" || day == "tuesday"){
console.log("Mutton kosha");
}
else if (day == "Wednesday" || day == "wednesday"){
console.log("Pizza");
}
else if (day == "thursday" || day == "Thursday"){
console.log("Dal - Roti");
}
else if (day == "Friday" || day == "friday"){
console.log("puri sabji");
}
else if (day == "Saturday" || day == "satursday"){
console.log("chore puri");
}
else{
console.log("chikken");
}
// here we are making manu condition according to days
