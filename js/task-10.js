function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputValue = document.querySelector('#controls > input');
const boxes = document.querySelector('#boxes');

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elementsToAdd.push(divEl);
  }
  return elementsToAdd;
};

const destroyBoxes = () => {
  boxes.innerHTML = '';
};

createBtn.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputValue.value);
  boxes.append(...boxesToAdd);
});
console.log(inputValue);

destroyBtn.addEventListener('click', () => {
  destroyBoxes.call();
});
