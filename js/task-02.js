const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


  
  
for (const ingredient of ingredients) {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;

  ingredientEl.classList.add("item");

  const ingredientsEl = document.querySelector("ul#ingredients");
  ingredientsEl.append(ingredientEl);
}
