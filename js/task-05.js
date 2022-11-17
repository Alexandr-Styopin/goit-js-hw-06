const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInputText);

function onInputText(evt) {
    output.textContent = evt.currentTarget.value;

    if (!evt.currentTarget.value) {
        return output.textContent = "Anonymous";
    } 

};
