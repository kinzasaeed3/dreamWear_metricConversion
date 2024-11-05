function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (conversionType) {
        case 'inchesToMillimeters':
            result = value * 25.4;
            break;
        case 'feetToMeters':
            result = value * 0.3048;
            break;
        case 'yardsToMeters':
            result = value * 0.9144;
            break;
        case 'milesToKilometers':
            result = value * 1.60934;
            break;
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
    
 