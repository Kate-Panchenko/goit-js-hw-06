function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  const arrayDiv = [];
  let size = 20;

  for (let i = 0; i < amount; i++) {
    size += 10;

    let divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    
    arrayDiv.push(divEl);
  }

  boxes.append(...arrayDiv);

}

createBtn.addEventListener("click", () => {
  const values = input.value;
  createBoxes(values);
});

destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = '';
  input.value = '';
});

