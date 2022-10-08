const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
console.dir(list);

const createList = ingredients.map((ingredient) => {
  const createLi = document.createElement('li');
  createLi.className = "item";
  createLi.textContent = ingredient;
  return createLi;
});



list.append(...createList);

console.log(createList);