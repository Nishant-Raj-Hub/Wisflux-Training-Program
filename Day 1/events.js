const colorButton = document.getElementById('color-btn');
const colorLabel = document.getElementById('color-label');
colorLabel.style.fontWeight = 700;

function random(number){
    return Math.floor(Math.random() * (number +1));
}


colorButton.addEventListener('click', ()=>{
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)}`;
    colorLabel.style.color = rndCol;
})

const mouseArea = document.getElementById('mouse-area');
mouseArea.addEventListener('mouseenter', ()=> console.log('Mouse Entered'));
mouseArea.addEventListener('mousemove', ()=> console.log('Mouse Moved'));
mouseArea.addEventListener('mousedown', ()=> console.log('Mouse Clicked Down'));


