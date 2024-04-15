function calculateArea() {
    const sideA = parseFloat(document.getElementById('sideA').value);
    const sideB = parseFloat(document.getElementById('sideB').value);
    const sideC = parseFloat(document.getElementById('sideC').value);

    const s = (sideA + sideB + sideC) / 2;

    const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

    document.getElementById('result').innerHTML = `The area of triangle is: ${area}`;
}

function reset(){
    document.getElementById('sideA').innerHTML = "";
    document.getElementById('sideB').innerHTML = "";
    document.getElementById('sideC').innerHTML = "";   
    // document.getElementById('result').innerHTML = "";   
}