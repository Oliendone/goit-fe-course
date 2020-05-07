console.log('~6~');

let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите любое число');
  if (isNaN(input) === true) {
    continue;
  } else if (input === null) {
    for (let i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    break;
  }
  input = Number(input);
  numbers.push(input);
  console.log(numbers);
} while (true);
console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
