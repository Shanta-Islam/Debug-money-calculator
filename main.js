function getInputValueById(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputFeildString = inputFeild.value;
    const inputFeildNum = parseInt(inputFeildString);
    return inputFeildNum;
}

function getElementValueById(elementId, value){
    const elementFeild = document.getElementById(elementId);
    elementFeild.innerText = value;  
}

function calculateSavings(){
    //calculate saving amount
    const saveFeild = getInputValueById('save');
    const income = getInputValueById('income');

    const savingAmount = (saveFeild * income) / 100;
    getElementValueById('saving-amount', savingAmount);

    //calculate remaining balance
    const balance = document.getElementById('balance');
    const balanceNum = balance.innerText;
    const savingAm = document.getElementById('saving-amount');
    const savingAmNum = savingAm.innerText;

    const remainingBalance = balanceNum - savingAmNum;
    getElementValueById('remaining-balance', remainingBalance);


}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = getInputValueById('income');
    const food = getInputValueById('food');
    const rent = getInputValueById('rent');
    const clothes = getInputValueById('clothes');

    //calculate total expense
    const plusInput = food + rent + clothes;
    //calculate balance
    const remainingBalance = income - plusInput;

    getElementValueById('total-expense', plusInput);
    getElementValueById('balance', remainingBalance);

})
