let n = '';
let dspl = document.getElementById('dspl'); 
let resultEl = document.getElementById('result'); 

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
        let result = eval(n);
        resultEl.innerText = '= ' + result;
        n = '';
    } catch (err) {
        alert('Невозможно вычислить выражение.');
    }
}