const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
input.addEventListener('blur', () => {
  if (input.value.length === Number(inputLength)){
    return input.classList.replace(`invalid`, `valid`) || input.classList.add(`valid`)
  } if (input.value.length !== Number(inputLength)) {
    input.classList.replace(`valid`, `invalid`) || input.classList.add(`invalid`)

  }
})