const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("ul#ingredients");
const fullList = [];

ingredients.map(items => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = items;
  ingredientEl.classList.add("item");
  fullList.push(ingredientEl);
})

ingredientsList.append(...fullList);