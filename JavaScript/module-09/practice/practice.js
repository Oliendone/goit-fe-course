// const greeter = require('./greatings');

// greeter('Hello kitty-kat');

// ===========================

// const validator = require('validator');

// const validateEmail = email => {
//   return validator.isEmail(email);
// };

// console.log(
//   'Is mango@mail.com a valid email?: ',
//   validateEmail('mango@mail.com'),
// );

// console.log(
//   'Is Mangozedog.com a valid email?: ',
//   validateEmail('Mangozedog.com'),
// );

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Принимает ключ `key` и значение `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

const clear = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error('Nothing to delete: ', err);
  }
};

save('Human', 'man');
load('Human');
