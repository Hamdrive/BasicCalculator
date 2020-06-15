let outputScreen = document.getElementById("screen");
let calculatorButtons = document.querySelectorAll("button");
let outputScreenValue = "";
//console.log(calculatorButtons)
let lastPress= ""

for(button of calculatorButtons){
    //console.log(buttonValue)
    
    button.addEventListener("click", function(event){
        buttonValue = event.target.innerText;
        //console.log(buttonNumber);

    
    
        if (buttonValue === "AC"){
            outputScreenValue = "";
            outputScreen.value = outputScreenValue
        }
        else if (buttonValue === "C"){
            outputScreenValue = outputScreenValue.slice(0, outputScreen.value.length -1);
            outputScreen.value = outputScreenValue
        }
        else if(buttonValue === "="){
            outputScreen.value = eval(outputScreenValue);
            lastPress = outputScreen.value
        }
        else{
            outputScreenValue += buttonValue;    
            //console.log(outputScreenValue);
            outputScreen.value = outputScreenValue;
            
            
        }
        if(lastPress === outputScreen.value){
            outputScreenValue="";
        }
        
    });

    
    
}

document.addEventListener("keydown", function(event){
    buttonValue = event.key;
    //console.log(buttonValue);

    if (buttonValue === "Delete"){
        outputScreenValue = "";
        outputScreen.value = outputScreenValue;
    }
    else if (buttonValue === "Backspace"){
        outputScreenValue = outputScreenValue.slice(0, outputScreen.value.length -1);
        outputScreen.value = outputScreenValue
    }
    else if(buttonValue === "=" || buttonValue === "Enter" ){
        outputScreen.value = eval(outputScreenValue);
        lastPress = outputScreen.value
    }
    else if(buttonValue === "/"){
        outputScreenValue += "/";
        outputScreen.value = outputScreenValue;
    }
    else if(buttonValue === "*"){
        outputScreenValue += "*";
        outputScreen.value = outputScreenValue;
    }
    else if(buttonValue === "-"){
        outputScreenValue += "-";
        outputScreen.value = outputScreenValue;
    }
    else if(buttonValue === "+"){
        outputScreenValue += "+";
        outputScreen.value = outputScreenValue;
    }
    else if (!isNaN(buttonValue)){
        outputScreenValue += parseInt(buttonValue);
        //console.log(outputScreenValue);
        outputScreen.value = outputScreenValue;
    }

    if(lastPress === outputScreen.value){
        outputScreenValue="";
    }
});
