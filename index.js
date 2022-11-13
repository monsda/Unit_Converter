const convertBtn = document.getElementById('convert-btn');
const lengthDisplay = document.getElementById('lengthdisplay');
const volumeDisplay = document.getElementById('volumedisplay');
const massDisplay = document.getElementById('massdisplay');
const numInput = document.getElementById('num-input');

const lengthConversionValue = 3.2808
const volumeConversionValue = 3.785411784
const massConversionValue = 2.20462262

convertBtn.addEventListener('click', function() {
    const inputValue = Number(numInput.value)
    lengthDisplay.innerText = `${numInput.value} meters = ${(inputValue*lengthConversionValue).toFixed(3)} feet | ${numInput.value} feet = ${(inputValue/lengthConversionValue).toFixed(3)} meters`
    volumeDisplay.innerText = `${numInput.value} liters = ${(inputValue/volumeConversionValue).toFixed(3)} gallons | ${numInput.value} gallons = ${(inputValue*volumeConversionValue).toFixed(3)} liters`
    massDisplay.innerText = `${numInput.value} kilos = ${(inputValue*massConversionValue).toFixed(3)} pounds | ${numInput.value} pounds = ${(inputValue/massConversionValue).toFixed(3)} kilos`
})
