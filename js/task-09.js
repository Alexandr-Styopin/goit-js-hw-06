function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onClickChangeColorBtn);

function onClickChangeColorBtn (evt) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorEl.textContent = getRandomHexColor()
};

console.dir(bodyEl);
console.dir(changeColorBtn);
console.dir(colorEl);
