function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (conversionType) {
        case 'fluid ounces milliliters':
            result = value *  29.5735;
            break;
        case 'gallons liters':
            result = value * 3.78541;
            break;
        case 'cubic feet - cubic meters':
            result = value *  0.0283168;
            break;
        case 'cubic yards - cubic meters':
            result = value *  0.764555;
            break;
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}