
// switch case how it work
var day = "Wednesday"
switch (day) {
  case "Sunday":
      console.log("Meeting with curriculum team")
  	 break;
  case "Wednesday":
       console.log("Meeting with academics team")
  	  break;
  case "Tuesday":
       console.log("Normal working day")
  	  break;
  default:
       console.log("invalid input")
}

// how default work
var day = "Holiday"
switch (day) {
  case "Sunday":
      console.log("Meeting with curriculum team")
  	 break;
  case "Wednesday":
       console.log("Meeting with academics team")
  	  break;
  case "Tuesday":
       console.log("Normal working day")
  	  break;
  default:
       console.log("invalid input")
}

// Grouping of the cases 
var day = "Thursday"
switch (day) {
   case "Sunday":
       console.log("Meeting with curriculum team")
       break;
   case "Monday":   
   case "Tuesday":
   case "Thursday":
   case "Friday":
   case "Saturday":
       console.log("Normal working day")
       break;
   case "Wednesday":
       console.log("Meeting with academics team")
       break; 
   default:
       console.log("invalid input")
}

// we check default condition by using user input
let readline = require('readline-sync')
let arg = readline.question("Enter a value?");
//let arg = '8'
switch (arg) {
case '5':
case '6':
  console.log( 'five or six' );
  break;
case '7':
  console.log( 'Seven' );
  break;
case 8:
  console.log( 'Never executes!' );
  break;
default:
  console.log( 'An unknown value' );
}
