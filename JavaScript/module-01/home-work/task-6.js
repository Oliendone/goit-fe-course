console.log('~6~');

let input;
let total = 0;
do {
  input = prompt('Введите любое число');
  if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
