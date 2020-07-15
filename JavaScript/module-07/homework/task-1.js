const categoriesRef = document.querySelectorAll('#categories>li');

const categories = [...categoriesRef];

let num = 0;

const categoriesNum = categories.forEach(category => {
  num += 1;
});

console.log(`В списке ${num} категории.`);
