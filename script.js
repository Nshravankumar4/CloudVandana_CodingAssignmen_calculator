let display = document.getElementById('display');
function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function togglePlusMinus() {
    if (display.value) {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1); // Remove the minus sign
        } else {
            display.value = '-' + display.value; // Add a minus sign
        }
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
