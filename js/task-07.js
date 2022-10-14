const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', onInput);

let value = 0;

function onInput(evt) {
    value = fontSizeControl.value
    text.style.fontSize = value + 'px';
};