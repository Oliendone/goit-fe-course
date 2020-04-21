'use strict';

const a = 7;
const b = 3;
let c = a * b;
console.log(c);

/* const isTrue = confirm('Are you vegan?');
console.log('Answer: ', isTrue);

const bodyHeight = prompt('What is your height?');
console.log('The height is: ', Number(bodyHeight));
console.log('Type of height: ', typeof Number(bodyHeight));
 */
console.log(Number.parseInt('345fedgsdge3', 10));
console.log(Number.parseFloat('2.4gs12'));

const validNumber = Number('52');
console.log(Number.isNaN(validNumber));
const invalidNumber = Number('rhfgh');
console.log(Number.isNaN(invalidNumber));

// случайное число от 0 до 20, и приведение его в целое число
console.log(Number.parseInt(Math.random() * (20 + 1) - 1, 10));
// окргуление вниз, до билжайшего меньшего целого
console.log(Math.floor(3.1));
// округление вверх, до ближайшего большего целого
console.log(Math.ceil(1.1));
// возвращает число, округлённое к ближайшему целому
console.log(Math.round(3.5));

const message = 'welcome to Kiev!';
console.log(message.length);
console.log(message[0].toUpperCase());
console.log(message.toLowerCase());
console.log(message.toUpperCase());

/* const d = 'Hello';
const t = 'Jopa';
const f = `${d + t}, my name is ${t + d}, im gled to see you!`;
console.log(f);

let roomNumber = prompt('Введите номер вашей комнаты');
roomNumber = Number(roomNumber);
if (roomNumber !== null) {
  console.log('Ваша комната: ', roomNumber);
} else {
  console.log('Вы не ввели номер комнаты!');
} */

/* newText += text[0].toUpperCase();
console.log(newText);
for (let i = 1; i < text.length; i += 1) {
  if (text[i] === 'я' && i === text.length - 1) {
    newText += 'ю';
  } else {
    newText += text[i];
  }
}
console.log(newText);
 */
/* let a = 'австралия';
a = a.substring(0, a.length - 1) + 'ю';
console.log(a);
 */

let input;
let total = 0;
do {
  input = prompt('Введите любое число');
  if (Number.isNaN(input)) {
    alert('Вы ввели не число!');
    break;
  } else if (input === null) {
    break;
  }
  input = Number(input);
  total += input;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
