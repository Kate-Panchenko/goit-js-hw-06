function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const colorSpan = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
});
