const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const elements = ingredients.map((ingredient) => {
//   const element = document.createElement("li");
//   element.innerHTML = ingredient;
//   element.classList.add("item");
//   return element;
// })

// const elementsList = document.getElementById("ingredients");
// elementsList.append(...elements);
// console.log(elementsList);




const elements = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.innerHTML = ingredient;
  element.classList.add("items");
  return element;
});

const elementsList = document.getElementById("ingredients");
elementsList.append(...elements);
console.log(elementsList)