function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const conversionType = document.getElementById('conversionType').value;
    let result;
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (conversionType) {
        case 'Square inches Square millimeters':
            result = value * 645.16;
            break;
        case 'Square feet Square meters':
            result = value *  0.092903;
            break;
        case 'Square yards Square meters':
            result = value *  0.836127;
            break;
        case 'Acres Hectares':
            result = value * 0.404686;
            break;
        case 'Square miles Square kilometers':
            result =  value *  2.58999;
            break;
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}