function showLargestNumber(){
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const number3 = parseFloat(document.getElementById('number3').value);

    if(number1 > number2){
        if(number1 > number3){
            document.getElementById('result').innerHTML = `Largest Number is: ${number1}`;
        }else{
            document.getElementById('result').innerHTML = `Largest Number is: ${number3}`;
        }
    }
    else if(number2 > number3){
        document.getElementById('result').innerHTML = `Largest Number is: ${number2}`;
    }else{
        document.getElementById('result').innerHTML = `Largest Number is: ${number3}`;
    }
    
}