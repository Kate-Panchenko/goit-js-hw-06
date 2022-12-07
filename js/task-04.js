let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
    counterValue--;
    valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue++;
    valueEl.textContent = counterValue;
});