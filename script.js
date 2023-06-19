const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = '0';
let ilkDeger = null;
let operator = null;
let bekelenenDeger = false;

updateDisplay();

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener('click', function(e) { // basılan tuşları tanımlama.
    const element = e.target;
    
    if(!element.matches('button')) return;

    if(element.classList.contains('operator')) {
        console.log('operator' , element.value);
        kullanılanOperator(element.value);
        updateDisplay();
        return;
    }

    if(element.classList.contains('decimal')) {
        inputDecimal();
        updateDisplay();
        return;
    }

    if(element.classList.contains('clear')) {
        clearInput();
        updateDisplay();
        return;
    }

    if(element.classList.contains('sil')) {
        //console.log('silme',element.value);
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});

function kullanılanOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if(operator && bekelenenDeger) {
        operator = nextOperator;
        return;
    }

    if(displayValue === null) {
        ilkDeger = value;
    }
    
    else if(operator){
        const result = hesapla(ilkDeger, operator, value);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        ilkDeger = result;
    }

    bekelenenDeger = true;

    operator = nextOperator;
}

function hesapla(ilk,operator,ikinci) {
    if (operator === '+') {
        return ilk + ikinci;
    }
    else if (operator === '-') {
        return ilk - ikinci;
    }
    else if (operator === '*') {
        return ilk * ikinci;
    }
    else if (operator === '/') {
        return ilk / ikinci;
    }
    return ikinci;
}

function inputNumber(num) {
    if(bekelenenDeger) {
        displayValue = num;
        bekelenenDeger = false;
    }
    else{
        displayValue = displayValue === '0' ? num: displayValue + num;
    }
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function clearInput() {
    displayValue = '';
    updateDisplay();
}