function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNumber = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');
button.addEventListener('click', () => {
  colorNumber.innerHTML = getRandomHexColor();
  body.style.backgroundColor = colorNumber.innerHTML;
})