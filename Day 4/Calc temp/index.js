function calcCelsius(){
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    const celsius = 5 * ((fahrenheit -32) / 9);


    document.getElementById('celsius').value = celsius.toFixed(2); 
}

function calcFahrenheit(){
    const celsius = parseFloat(document.getElementById('celsius').value);

    const fahrenheit = (9 * (celsius / 5)) +32;


    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2); 
}
