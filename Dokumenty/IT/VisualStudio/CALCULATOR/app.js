const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber");
const mathSight = document.querySelector(".mathSight");
const numbersButtons = document.querySelectorAll(".numbers");
const operatorsButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equalsButton");
const clearButton = document.querySelector(".clearButton");
const calculatorHistory = document.querySelector(".history");
const historyBtb = document.querySelector(".history-btn");

let result = '';


//comma 
function displayNumbers() {
    if (this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if (this.textContent === '.' && currentNumber.innerHTML === "") return currentNumber.innerHTML = '0.'

    currentNumber.innerHTML += this.textContent
}

function operate() {
    if (currentNumber.innerHTML === '' && this.textContent === '-') {
        currentNumber.innerHTML = '-';
        return;
    } else if (currentNumber.innerHTML === '') {
        return;
    }
    if (mathSight.innerHTML !== '') {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSight.innerHTML = this.textContent;
    currentNumber.innerHTML = '';
}
// show results
function showResult() {
    if (previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSight.innerHTML;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = b - a;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = b / a;
            break;
        case '2^':
            result = b ** a;
            break;

    }
    addToHistory();
    historyBtb.classList.add('active')
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSight.innerHTML = '';
}

function addToHistory() {
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `$(currentNumber.innerGTML) $(mathSight.innerHTML) $(previousNumber.innerHTML)` = `$(result)`
}
// clear history
function clearHistory() {
    calculatorHistory.textContent = '';
    if (calculatorHistory.textContent === '') {
        historyBtb.classList.remove('active');
    }
}

function clearScreen() {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSight.innerHTML = '';
}



//Listeners

operatorsButtons.forEach((button) => button.addEventListener('click', operate));

numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
});

equalsButton.addEventListener('click', showResult);

clearButton.addEventListener('click', clearScreen);

historyBtb.addEventListener('click', clearHistory)