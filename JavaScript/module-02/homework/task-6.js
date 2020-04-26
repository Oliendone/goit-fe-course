console.log('~6~');

let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите любое число');
  if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    break;
  }
  input = Number(input);
  numbers.push(input);
  console.log(numbers);
} while (true);
alert(`Общая сумма чисел равна ${total}`);
