// const counter = {
// value: 0,

// decrement() {
//     this.value -=1;
// },

// increment() {
//     this.value +=1;
// },

// };

// const counterValue = document.querySelector('#value');
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

// decrementBtn.addEventListener('click', onDecrement);
// incrementBtn.addEventListener('click', onIncrement);

// function onDecrement (evt) {
//     counter.decrement();
//     counterValue.textContent = counter.value;
// };

// function onIncrement (evt) {
//     counter.increment();
//     counterValue.textContent = counter.value;
// };

// console.log(decrementBtn);
// console.log(incrementBtn);

//----------------------------------------------

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

console.log('counterValue =', counterValue);
