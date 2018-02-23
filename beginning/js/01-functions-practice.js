/*eslint-env browser*/

//STEP 1
/*var number = window.prompt("enter a number for getting half number");
function halfNumber(number) {
    "use strict";
    window.console.log("Half of " + number + " is " + (number / 2));
}
halfNumber( number);*/

//STEP 2

/*var number = window.prompt("enter a number for squaring");
function squareNumber(number) {
    "use strict";
    window.console.log("The result of squaring the number " + number + " is " + (number * number ));
}
squareNumber(number);*/


//STEP 3

/*var x = window.prompt("enter x value");
var y = window.prompt("enter y value");
function percentOf(x,y) {
    "use strict";
    var percent = (x / y) * 100;
    window.console.log( x + " is " + percent + "% of " + y );
}
percentOf(x,y);*/


//STEP 4
/*var x = window.prompt("enter x value");
var y = window.prompt("enter y value");
function findModulus(x, y) {
    "use strict";
    var modulus = x % y;
    window.console.log( modulus + " is the modulus of " + x + " and " + y + ".");
}
findModulus(x,y);*/


//STEP 5

var numbers = window.prompt("Enter your numbers").split(",");
window.document.write(numbers);

function calculate(numbers) {
    var i, base = Number(numbers);
    for (i = 1; i < arguments.length; i += 1) {
        base += Number(arguments[i]);
    }
    return base + "<br>";
}calculate(numbers);