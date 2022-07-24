const textInput = document.querySelector('#name-input')
const textSpan = document.querySelector('#name-output')

textInput.addEventListener("input", () => {
  textSpan.textContent = textInput.value
    if (textInput.value.trim() === ""){
      textSpan.textContent = "Anonymous!"
    }
})
