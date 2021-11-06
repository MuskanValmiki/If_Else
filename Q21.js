let readlineSync = require("readline-sync");
var day = readlineSync.question("enter any days= ");
var meal = readlineSync.question("enter any meal= ");
if (day == "Monday" || day == "monday"){
   if (meal == "Breakfast" || meal == "breakfast"){
    console.log("poha");
   }
   else if (meal == "Lunch" || meal == "lunch"){
       console.log("rajma puri");
   }
   else{
       console.log("chola puri");
   }
}
else if (day == "Tuesday" || day == "tuesday"){
    if (meal == "Brreakfast" || meal == "breakfast"){
        console.log("sprouts");
    }
    else if (meal == "Lunch" || meal == "lunch"){
        console.log("dal chawal");
    }
    else{
        console.log("rasgulla");
    }
}
// here we made nested manu according to day and meal
