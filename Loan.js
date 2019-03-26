function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}

const cashSlider = document.getElementById("cashSlider");
const timeSlider = document.getElementById("timeSlider");

const cashOutput = document.getElementById("cashOutput");
const timeOutput = document.getElementById("timeOutput");

const installment = document.getElementById("installment");

//Display the default value of sliders
cashOutput.innerHTML = cashSlider.value;
timeOutput.innerHTML = timeSlider.value;

var cashAmount = parseInt(cashSlider.value);
var timeAmount = parseInt(timeSlider.value);

var monthInstallment = (cashAmount * (1 + timeAmount * 0.0055)) /timeAmount;

installment.innerHTML = Round(monthInstallment, 2);



//Update sliders values
cashSlider.oninput = function()
{
    cashOutput.innerHTML = this.value;   

    cashAmount = parseInt(cashSlider.value);
    timeAmount = parseInt(timeSlider.value);
    monthInstallment = (cashAmount * (1 + timeAmount * 0.0055)) /timeAmount;
    installment.innerHTML = Round(monthInstallment, 2);
}

timeSlider.oninput = function()
{
    timeOutput.innerHTML = this.value;   

    cashAmount = parseInt(cashSlider.value);
    timeAmount = parseInt(timeSlider.value);
    monthInstallment = (cashAmount * (1 + timeAmount * 0.0055)) /timeAmount;
    installment.innerHTML = Round(monthInstallment, 2);
}
