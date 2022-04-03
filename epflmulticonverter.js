// epfl's solution for multiconvertor

function eurosToCHF(euros){
    return euros *1.13;
}

function celsiusToF(celsius){
    return (celsius * 9/5) +32;
}

function littersToGallons(litters){
    return litters /3.785;
}
function askContinue(){
    var answer = window.prompt("Do you want to convert a value? yes/no ");
    if (answer == "yes"){
        return true;
    }else {
        return false;
    }
}

function askConversion(){
    var answer = window.prompt("Which conversion do you want to do? euros/celsius/litters");
    return answer;
}

function askValue(){
    var answer = window.prompt("Enter a value ");
    return answer;
}

while (askContinue()){
    var conversionType = askConversion();
    var conversionValue = askValue();
    var resultMessage = "The result is ";

    if (conversionType == "euros"){
        resultMessage += eurosToCHF(Number(conversionValue)).toString;
    }
    else if (conversionType == "celsius"){
        resultMessage += celsiusToF(Number(conversionValue)).toString;
    } 
    else if (conversionType == "litters"){
            resultMessage += littersToGallons(Number(conversionValue)).toString;
    }
    else {
        resultMessage = "Sorry I can't do this conversion";  
    }

    console.log(resultMessage);
}