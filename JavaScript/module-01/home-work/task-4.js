console.log('~4~');
const credits = 23580;
const pricePerDroid = 3000;
console.log('Всего кредитов: ', credits);
console.log('Цена за одного дроида: ', pricePerDroid);
let totalPrice;
const numOfDroids = prompt(
  'Введите количество дроидов, которое вы хотите приобрести',
);
if (numOfDroids === null) {
  console.log('Отменено пользователем!');
} else if ((totalPrice = numOfDroids * pricePerDroid) > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  console.log(
    `Вы купили ${numOfDroids} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
