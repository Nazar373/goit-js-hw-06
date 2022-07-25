function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const container = document.querySelector("#boxes");
const input = document.querySelector("input");