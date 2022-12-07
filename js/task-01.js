const list = document.querySelectorAll('.item');
console.log(`Number of categories: ${list.length}`);

list.forEach(items => {
  console.log(`Category: ${items.firstElementChild.textContent}`);
  console.log(`Elements: ${items.lastElementChild.children.length}`);
});