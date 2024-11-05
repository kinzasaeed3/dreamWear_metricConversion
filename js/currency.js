function convert() {
    const value = document.getElementById('value').value;
    const conversionType = document.getElementById('conversionType').value;
    let result;
    
    if (isNaN(value)) {
        alert('Please enter a valid number');
        return;
    }

    switch (conversionType) {
        case 'USD to EUR':
            result = value *  0.932;
            break;
        case 'EUR to USD':
            result = value *  1.074; 
            break;
        
        default:
            result = 'Invalid conversion type';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}
