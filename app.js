let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let valMemStored = "";

function numButPress(num){
    // Check if a number has been already clicked
    if(resultVal){
        // Start a new new number
        newVal = num;
        // Reset to create a new result
        resultVal = "";
    } else {
        // Used to block using multiple decimals
        if(num === '.'){
            if(decimalClicked != true){
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
        
    // Update value in entry input tag
    document.getElementById("entry").value = newVal;
}

function mathButPress(operator){
    // Check if there was a previous calculation
    // by seeing if resultVal has a value
 
    // If result doesn't have a value then store
    // the current val as a previous for the next 
    // calculation
    if(!resultVal){
        prevVal = newVal;
    } else {
 
        // If there is a current result store that as
        // the previous value entered
        prevVal = resultVal;
    }
    
    // Restart creation of new number
    newVal = "";
    // Reset decimalClicked
    decimalClicked = false;
    // Store operator clicked
    mathOperator = operator;
 
    // Prepare entry for receiving new numbers
    resultVal = "";
    document.getElementById("entry").value = "";
}

function equalButPress(){
    // Reset decimalClicked
    decimalClicked = false;
 
    // Convert string numbers to floats
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);
 
    // Perform calculations based on stored operator
    switch(mathOperator){
        case "+":
            resultVal = prevVal + newVal;
            break;
        case "-":
            resultVal = prevVal - newVal;
            break;
        case "*":
            resultVal = prevVal * newVal;
            break;
        case "/":
            resultVal = prevVal / newVal;
            break;
        // If equals is hit without an operator 
        // leave everything as is
        default:
            resultVal = newVal;
    }
 
    // Store the current value as the previous so that 
    // I can except to next value in the calculation
    prevVal = resultVal;
 
    // Put the calculation result in the entry window
    document.getElementById("entry").value = resultVal;
}

function clearButPress() {
    prevVal = "";
    newVal = "";
    resultVal = "";
    mathOperator = "";
    decimalClicked = false;
    document.getElementById("entry").value = "0";
}

function copyButPress(num) {
    valMemStored = document.getElementById("entry").value;
}

function pasteButPress(num) {
    if (valMemStored) {
        document.getElementById("entry").value = valMemStored;
        newVal = valMemStored;
    }
}