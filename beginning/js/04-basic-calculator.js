/*eslint-env browser*/

function calculate(x, y, operator) {
 x = parseInt(window.prompt ("enter x value"));
 y = parseInt(window.prompt("enter y value "));
operator = window.prompt("Enter the operation that you would like to perform (add, subtract, multiply, divide)");
    
    switch (operator) {
        case "add":
            window.alert (x + y);
            break;
        case "subtract":
            window.alert (x - y);
            break; 
        case "multiply":
            window.alert (x * y);
            break;
        case "divide":
             window.alert (x / y);
            break;    
            
    }
}
calculate();

