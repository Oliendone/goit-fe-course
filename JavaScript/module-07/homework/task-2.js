const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

ingredientsRef.append(
  ...ingredients.map(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;

    return li;
  }),
);
