function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (conversionType) {
        case 'Ounces grams':
            result = value * 28.3495 ;
            break;
        case 'Pounds kilograms':
            result = value *  0.453592;
            break;
        case 'short tons - mega grams':
            result = value *  0.907185;
            break;
        
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}