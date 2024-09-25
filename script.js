function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.textContent += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Replace percentage sign with division by 100
        let expression = display.textContent.replace(/%/g, '/100');
        // Evaluate the expression
        let result = eval(expression);
        // Display the result
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}