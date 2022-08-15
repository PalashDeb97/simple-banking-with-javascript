

// input field
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputFloat = parseFloat(inputValue);
    inputField.value = '';
    return inputFloat;
};

// total field 
function getUpdateTotal(totalFieldId, inputAmount, isAdd) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    if (isAdd == true) {
        totalElement.innerText = parseFloat(totalText) + inputAmount;
    } else {
        totalElement.innerText = parseFloat(totalText) - inputAmount;
    }
};

// deposit button
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = getInputValue('deposit-input');
    if (depositInput > 0) {
        getUpdateTotal('deposit-total', depositInput, true);
        getUpdateTotal('balance-total', depositInput, true);
    } else {
        alert('please enter a positive number')
    }
});

// withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const withdrawInput = getInputValue('withdraw-input');
    if (withdrawInput > 0 && withdrawInput < balanceText) {
        getUpdateTotal('withdraw-total', withdrawInput, true);
        getUpdateTotal('balance-total', withdrawInput, false);
    } else {
        alert('please enter a positive number and Withdraw in your balance');
    }
});



// old code 
/*
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputFloat = parseFloat(inputValue);
    inputField.value = '';
    return inputFloat;
};
function getUpdateTotal(totalFieldId,inputAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    totalElement.innerText = parseFloat(totalText) +  inputAmount;
};
function getBalanceTotal(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    if (isAdd == true) {
        balanceTotal.innerText = parseFloat(balanceText) + amount;
    } else {
        balanceTotal.innerText = parseFloat(balanceText) - amount;
    }
};
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = getInputValue('deposit-input');
    if (depositInput > 0) {
        getUpdateTotal('deposit-total',depositInput);
        getBalanceTotal(depositInput, true);
    }

});
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;

    const withdrawInput = getInputValue('withdraw-input');
    if (withdrawInput > 0 && withdrawInput < balanceText) {
        getUpdateTotal('withdraw-total', withdrawInput);
        getBalanceTotal(withdrawInput, false);
    } else {
        document.getElementById('alert').innerText = 'plase number'
    }
});

*/