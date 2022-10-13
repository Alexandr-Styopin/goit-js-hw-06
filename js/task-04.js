const counter = {
value: 0,

decrement() {
    this.value -=1;
},

increment() {
    this.value +=1;
},

};


const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener('click', onDecrement);
incrementBtn.addEventListener('click', onIncrement);

function onDecrement (evt) {

    console.log('+');

    counter.decrement();
    counterValue.textContent = counter.value;

};

function onIncrement (evt) {
    console.log('-');


    counter.increment();
    counterValue.textContent = counter.value;
};



console.log(decrementBtn);
console.log(incrementBtn);