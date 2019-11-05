console.log("hello");
function getInputsFromDiv( divId ){
    // make an object to store all of the data from the inputs I have on the page
    let userInputs= {};
    // divElements is an HTML collection that I can iterate through
    let divElements = divId.children;

    for(let i = 0; i < divElements.length; i++) {
        //harvest data from the checked radios (default value is 0)
        if(divElements[i].type === "radio" && divElements[i].checked){
            userInputs[divElements[i].name] = parseFloat(0);
            userInputs[divElements[i].name] += parseFloat(divElements[i].value);
        }
        //harvest data from the rest of the inputs of type number
        else if(divElements[i].type === "number" && divElements[i].value != null){
            userInputs[divElements[i].id] = parseFloat(0);
            userInputs[divElements[i].id] += parseFloat(divElements[i].value);
        }
    }
    return userInputs;
}

function getPercentages({ servers, bussers, foodrunners, bartenders }) {
    let percentage_dict = {
        0:[0.0, 0.0, 0.0],
        1:[0.015, 0.0675, 0.05],
        2:[0.015, 0.045, 0.05],
        3:[0.015, 0.0338, 0.05],
        4:[0.015, 0.027, 0.05],
        5:[0.015, 0.0225, 0.05],
        6:[0.015, 0.0225, 0.05],
        7:[0.015, 0.027, 0.05]
    };

    let percentages = [];

    if (servers > 7){
        percentages = percentage_dict[7];
    }else{
        percentages = percentage_dict[servers];
    }

    if (bussers === 2){
        percentages[0] += 0.005;
    }else if (bussers === 0){
        percentages[0] = 0;
    }

    if (foodrunners === 0){
        percentages[1] = 0;
    }

    if (bartenders === 0){
        percentages[2] = 0;
    }

    return percentages;
}

function getTipouts({ netSales, alcoholSales}, percentages) {
    let tipouts = [0.0, 0.0, 0.0];
    for( let i = 0; i < 2; i++){
        tipouts[i] = netSales * percentages[i];        
    }
    tipouts[2] = alcoholSales * percentages[2];
    return tipouts;
}

function getTotalGratuity({gratuity}, tipouts){
    let total = gratuity;
    for( let i = 0; i < tipouts.length; i++){
        total -= tipouts[i];
    }
    return total;
}

function submitHandler() {
    let userData = getInputsFromDiv(userInputs);
    let percentages = getPercentages(userData);
    let tipouts = getTipouts(userData, percentages);
    let totalGratuity = getTotalGratuity(userData, tipouts);
    busserTipout.innerHTML = "Busser Tipout: $" + tipouts[0].toFixed(2);
    foodrunnerTipout.innerHTML = "Foodrunner Tipout: $" + tipouts[1].toFixed(2);
    bartenderTipout.innerHTML = "Bartender Tipout: $" + tipouts[2].toFixed(2);
    amountYouOwn.innerHTML = "Amount You Own $" + totalGratuity.toFixed(2);
}
