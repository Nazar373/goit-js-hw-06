const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');
input.addEventListener('blur', () => {
  if (input.value.length === Number(inputLength)){
    return input.classList.add(`valid`);
  } else {
    return input.classList.add(`invalid`)
  }
})