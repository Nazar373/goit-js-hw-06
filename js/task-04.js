let counterValue = 0;
const value = document.querySelector('#value');
const increaseBtn = document.querySelector('[data-action="increment"]');
const decreaseBtn = document.querySelector('[data-action="decrement"]');

const decrease = () => {
  counterValue -= 1;
  value.textContent = counterValue;
}

const increase = () => {
  counterValue += 1;
  value.textContent = counterValue;
}

decreaseBtn.addEventListener("click", decrease);
increaseBtn.addEventListener("click", increase);



