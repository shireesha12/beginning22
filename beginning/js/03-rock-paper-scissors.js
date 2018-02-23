/*eslint-env browser*/
var userChoice = window.prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.3) {
    computerChoice = "rock";
} else if ((computerChoice <= 0.6) && (computerChoice >= 0.3) ){
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
window.document.write("User Choice: " + userChoice + "<br>");
window.document.write("Computer Choice: " + computerChoice + "<br>");

if ((userChoice === "rock") || (userChoice === "paper") || (userChoice === "scissors")) {
    
    var compare = function (choice1, choice2) {
        "use strict";
        if (choice1 === choice2) {
            window.alert("The result is a tie!...");
        } else if ((choice1 === "paper") && (choice2 === "rock"))
           {
               window.alert("paper wins....."); 
                
           } else if ((choice1 === "paper") && (choice2 === "scissors"))
            {
                window.alert("scissors wins.....");  
                
            } else if ((choice1 === "rock") && (choice2 === "scissors"))
            {
                window.alert("rock wins.....");
                
            } else if ((choice1 === "rock") && (choice2 === "paper"))
            {
                window.alert("paper wins....."); 
                
            } else if ((choice1 === "scissors") && (choice2 === "paper"))
            {
                window.alert("scissors wins.....");
                
            } else if ((choice1 === "scissors") && (choice2 === "rock"))
            {
                window.alert("rock wins....."); 
            }
        
    };
    compare(userChoice, computerChoice);
    
    } else {
    window.alert("you entered wrong string");
    }





