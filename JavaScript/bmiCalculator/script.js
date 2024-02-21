function bmiCalculator(weight, height) {
    var bmi = weight/(height ** 2);
    alert(`Your BMI is ${Math.round(bmi)}`)
}

bmiCalculator(65, 1.8);