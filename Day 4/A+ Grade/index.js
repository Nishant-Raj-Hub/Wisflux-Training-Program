function calcAGrade(){
    const hindi = parseFloat(document.getElementById('hindi').value);
    const english = parseFloat(document.getElementById('english').value);
    const mathematics = parseFloat(document.getElementById('mathematics').value);
    const socialStudies = parseFloat(document.getElementById('socialStudies').value);
    const science = parseFloat(document.getElementById('science').value);

    const totalMarks = hindi + english + mathematics + socialStudies + science;

    if(totalMarks >= 90){
        document.getElementById('result').innerHTML = "Your grade is A+";
    }else{
        document.getElementById('result').innerHTML = "Your grade is not A+";
    }
    
}