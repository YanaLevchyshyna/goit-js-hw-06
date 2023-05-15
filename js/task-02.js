const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log('ingredients: ', ingredients);

const listIngredientsEl = document.querySelector('#ingredients');
console.log('listIngredientsEl: ', listIngredientsEl);

const firstIngredientEl = document.createElement('li');
firstIngredientEl.textContent = 'Potatoes';
firstIngredientEl.classList.add('item');
// console.log('firstIngredientEl ', firstIngredientEl);

const secondIngredientEl = document.createElement('li');
secondIngredientEl.textContent = 'Mushrooms';
secondIngredientEl.classList.add('item');
// console.log('secondIngredientEl ', secondIngredientEl);

const thirdIngredientEl = document.createElement('li');
thirdIngredientEl.textContent = 'Garlic';
thirdIngredientEl.classList.add('item');
// console.log('thirdIngredientEl ', thirdIngredientEl);

const fourthIngredientEl = document.createElement('li');
fourthIngredientEl.textContent = 'Tomatos';
fourthIngredientEl.classList.add('item');
// console.log('fourthIngredientEl ', fourthIngredientEl);

const fifthIngredientEl = document.createElement('li');
fifthIngredientEl.textContent = 'Herbs';
fifthIngredientEl.classList.add('item');
// console.log('fifthIngredientEl ', fifthIngredientEl);

const sixthIngredientEl = document.createElement('li');
sixthIngredientEl.textContent = 'Condiments';
sixthIngredientEl.classList.add('item');
// console.log('sixthIngredientEl ', sixthIngredientEl);

listIngredientsEl.append(
  fifthIngredientEl,
  secondIngredientEl,
  thirdIngredientEl,
  fourthIngredientEl,
  fifthIngredientEl,
  sixthIngredientEl
);
