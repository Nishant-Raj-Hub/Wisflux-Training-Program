function multiply() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    document.getElementById('result').innerHTML = "Multiplication is: " + (number1 * number2);
}

function divide(){
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);

    document.getElementById('result').innerHTML = "Division is: " + (number1 / number2);  
}