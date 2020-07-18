const listRef = document.querySelectorAll('#categories>li');
const categories = [...listRef];

let num = 0;
const categoriesNum = categories.forEach(category => {
  num += 1;
});
console.log(`В списке ${num} категории.`);

const categoriesRef = document.querySelectorAll('.item');
const categoriesName = [...categoriesRef];

function getCategoryInfo(category) {
  const name = category.querySelector('h2');
  const nameText = name.textContent;
  const elements = category.querySelectorAll('li');
  let num = 0;
  elements.forEach(element => {
    num += 1;
  });
  return `Категория: ${nameText} 
Количество элементов: ${num}`;
}
console.log(getCategoryInfo(categoriesName[0]));
console.log(getCategoryInfo(categoriesName[1]));
console.log(getCategoryInfo(categoriesName[2]));
