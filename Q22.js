let readlineSync = require("readline-sync");
var day = readlineSync.question("enter any day = ");
if (day == "monday") {
  console.log("Somi\nMuskan\Samridhhi\Ruchi\Sindhu\Sudha");
}
else if (day == "tuesday") {
  console.log("Megha\nPriti\nPinki\Priyanka\nthapa\nAarti");
}
else if (day == "wednesday") {
  console.log("Shweta\Kanchan\Parveen\Sandhya\nLaxmi\Karishma");
}
else if (day == "thursday") {
  console.log("Nikita\nMona\nPriyanka\Tejashree\nLovely\Mehzebin");
}
else if (day == "friday") {
  console.log("Pihu\Sejal\nChaya\Shrestha\nMonali\nAardhangya");
}
else if (day == "saturday") {
  console.log("Gunjan\nShweta\nRani\nIsha\nKusu\Madhu\n");
}
else if (day == "sunday") {
  console.log("Swati\nKhusboo\nidhi\Preeti\nDipti\nAnamika");
}
else {
  console.log("Please enter valid week day");
}
// here we made kitchen team according to day
