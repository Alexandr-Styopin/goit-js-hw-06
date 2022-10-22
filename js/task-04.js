
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementBtnСlick);
incrementBtn.addEventListener('click', onIncrementBtnСlick);

let counterValue = 0;

function onDecrementBtnСlick (evt) {
    valueEl.textContent = counterValue -=1;
};

function onIncrementBtnСlick  (evt) {
    valueEl.textContent = counterValue +=1;
};