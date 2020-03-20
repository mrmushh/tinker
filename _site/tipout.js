function isBonus() {
    if ((getInput("alcoholSales") / netSales.innerHTML) >= 0.3){
        bonus.innerHTML = "FREE DRINK!";
    }else{
        bonus.innerHTML = "";
    }
}

function getInput(name) {
    let x = document.getElementById(name).value;
    if ((x == "") || (!Number.isInteger(parseFloat(x)))) {
        return x = 0; 
    }
    if (name == "servers") {
        return parseInt(x);
    } else if (name == "dining"){
        return parseFloat(x) / 1.1;
    } else {
        return parseFloat(x);
    }
}

function getRadioInput(name) {
    let radio = document.getElementsByName(name);
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return parseInt(radio[i].value);
        }
    }
}

function deductTax() {
    netSales.innerHTML = getInput("dining").toFixed(2);
}

function deductFee() {
    let startingGratuity = getInput("startingGratuity");
    let deduct = startingGratuity * 0.035
    let leftover = startingGratuity - deduct;
    fee.innerHTML = deduct.toFixed(2);
    resultingGratuity.innerHTML = leftover.toFixed(2);
}

function getPercentages() {
    let servers = getInput("servers");
    let bussers = getRadioInput("bussers");
    let foodrunners = getRadioInput("foodrunners");
    let bartenders = getRadioInput("bartenders");

    let percentage_dict = {
        0: [0.0, 0.0, 0.0],
        1: [0.015, 0.0675, 0.05],
        2: [0.015, 0.045, 0.05],
        3: [0.015, 0.0338, 0.05],
        4: [0.015, 0.027, 0.05],
        5: [0.015, 0.0225, 0.05],
        6: [0.015, 0.0225, 0.05],
        7: [0.015, 0.027, 0.05]
    };
    let percentages = [];

    if (servers > 7) {
        percentages = percentage_dict[7];
    } else if ((servers >= 0) && (servers <= 7)) {
        percentages = percentage_dict[servers];
    } else {
        percentages = percentage_dict[0];
    }
    if (bussers === 2) {
        percentages[0] += 0.005;
    } else if (bussers === 0) {
        percentages[0] = 0;
    }
    if (foodrunners === 0) {
        percentages[1] = 0;
    }
    if (bartenders === 0) {
        percentages[2] = 0;
    }

    return percentages;
}

function getTipouts(percentages) {
    let dining = getInput("dining")
    let alcoholSales = getInput("alcoholSales")
    let tipouts = [0.0, 0.0, 0.0];
    for( let i = 0; i < 2; i++){
        tipouts[i] = dining * percentages[i];        
        tipouts[i].toFixed(2);
    }
    tipouts[2] = alcoholSales * percentages[2];
    tipouts[2].toFixed(2);
    return tipouts;
}

function getTotalGratuity(tipouts){
    let total = parseFloat(document.getElementById("resultingGratuity").innerHTML);
    for( let i = 0; i < tipouts.length; i++ ){
        total -= tipouts[i];
    }
    return total;
}

function submitHandler() {
    let tipouts = getTipouts(getPercentages());
    let totalGratuity = getTotalGratuity(tipouts);
    busserTipout.innerHTML = tipouts[0].toFixed(2);
    foodrunnerTipout.innerHTML = tipouts[1].toFixed(2);
    bartenderTipout.innerHTML = tipouts[2].toFixed(2);
    amountYouOwn.innerHTML = totalGratuity.toFixed(2);
}
