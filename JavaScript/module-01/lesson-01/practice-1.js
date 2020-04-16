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
