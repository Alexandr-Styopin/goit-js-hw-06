
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrement);
incrementBtn.addEventListener('click', onIncrement);

let counterValue = 0;

function onDecrement (evt) {
    console.log('-');
    valueEl.textContent = counterValue -=1;
};

function onIncrement (evt) {
    console.log('+');
    valueEl.textContent = counterValue +=1;
};