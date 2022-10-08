const categoriesEl = document.querySelector('#categories');
const numberItemsEl = [...categoriesEl.children];
console.log("Number of categories:", numberItemsEl.length);

const itemsEl = document.querySelectorAll('.item');

itemsEl.forEach((el) => { 
  console.log('Category:', el.firstElementChild.textContent);
  console.log('Elements:', el.lastElementChild.childElementCount);
  });



  












