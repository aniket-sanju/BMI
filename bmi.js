function calculateBMI() {
    // Get input values
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Validate input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').textContent = 'Please enter valid height and weight.';
        return;
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2); // Convert height to meters

    // Display result
    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi < 25) {
        bmiCategory = 'Normal weight';
    } else if (bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }

    const result = `Your BMI is ${bmi.toFixed(2)}. You are ${bmiCategory}.`;
    document.getElementById('result').textContent = result;
    
}