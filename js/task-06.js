const input = document.querySelector('#validation-input');
const dataLength = Number(input.getAttribute('data-length'));

input.addEventListener('blur', onInputBlur);

function onInputBlur (evt) {
    
    console.log(evt.currentTarget.value.length);
    console.log('dataLength',dataLength);

    if (evt.currentTarget.value.length !==  dataLength) {
        input.classList.remove('valid')
        return input.classList.add('invalid');
    } else {
        input.classList.remove('invalid')
        return input.classList.add('valid');
    }
    
};