function  convert(){
    let  value = document.getElementById('value').value;
    let  conversionType = document.getElementById('conversionType').value;
    let result = '';

    if ( conversionType === 'CtoF') {
        result = ( value * 9/5) + 32 + ' °F';
    } else if ( conversionType === 'FtoC') {
        result = ( value - 32) * 5/9 + ' °C';
    }

    document.getElementById('result').innerText = 'Result: ' + result;
}