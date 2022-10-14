const input = document.querySelector('#validation-input');
const dataLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onBlur);

function onBlur (evt) {
    if (dataLength === evt.currentTarget.value.length) {
        input.classList.add('valid');
        
    } else {
        input.classList.add('invalid');
        console.log(evt.currentTarget.value.length);
    }

};