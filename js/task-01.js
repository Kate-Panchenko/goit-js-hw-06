const categories = document.querySelector('ul#categories');
console.log(`Number of categories: ${categories.children.length}`);

const items = categories.querySelectorAll('li.item');

for (const item of items) {
    const category = item.querySelector('h2');
    const elements = item.querySelectorAll('li');
    console.log(`Category: ${category.textContent}`);
    console.log(`Elements: ${elements.length}`);
}
