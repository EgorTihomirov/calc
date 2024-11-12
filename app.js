var n = "";
var dspl = document.getElementById('dspl');
var resultEl = document.getElementById('result');


function addNumber(num) {
    n += num;
    dspl.value = n;
}


function addOperator(op) {
    if (n.length > 0 && !isNaN(n[n.length - 1])) {
        n += op;
        dspl.value = n;
    }
}


function calculate() {
    try {
        var result = eval(n);
        resultEl.innerText = "= " + result;
        n = "";
    } catch (err) {
        alert('Невозможно вычислить выражение.');
    }
}


function clearCalc() {
    n = "";
    dspl.value = n;
    resultEl.innerText = "= ";
}


function backspace() {
    if (n.length > 0) {
        n = n.slice(0, -1);
        dspl.value = n;
    }
}

function resetCalc() {
    n = "";
    dspl.value = n;
    resultEl.innerText = "= ";
}


document.addEventListener('DOMContentLoaded', () => {
    const displayInput = document.getElementById('dspl');

    function updateDisplay() {
        displayInput.value = n;
    }

    updateDisplay(); 
});

function clearCalc() {
    n = "";
    dspl.value = n;
    resultEl.innerText = "= ";
}

function backspace() {
    if (n.length > 0) {
        n = n.slice(0, -1);
        dspl.value = n;
    }
}

function resetCalc() {
    n = "";
    dspl.value = n;
    resultEl.innerText = "= ";
}
