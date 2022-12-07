const rangeInput = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

rangeInput.addEventListener('input', event => {
    textSpan.style.fontSize = `${event.target.value}px`
});