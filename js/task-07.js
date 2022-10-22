const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInputValueChange);

let value = 0;

function onInputValueChange(evt) {
    value = fontSizeControl.value
    text.style.fontSize = value + 'px';
};