function showResult(){
    const number1 = parseFloat(document.getElementById('number1').value);

    if(number1 > 13){
        document.getElementById('result').innerHTML = 2 * (number1 - 13);
    }
    else{
        document.getElementById('result').innerHTML = 13 - number1;
    }
}