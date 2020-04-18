console.log('~2~');
const total = 100;
const ordered = 30;
console.log('Общее количество товаров на складе: ', total);
console.log('Товаров в заказе: ', ordered);
const message =
  ordered > total
    ? 'На складе недостаточно твоаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);
