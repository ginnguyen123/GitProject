function bmi(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bMI = weight / (height*height); // hoặc bMI = weight / ( Math.pow(height, 2)
    result = (bMI<18.5? 'Underweight' : bMI<25? 'Normal' : bMI<30? 'Over Weight' : 'Obese');
    console.log(bMI);
    document.getElementById('display').innerText = result;
}