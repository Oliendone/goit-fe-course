console.log('~7~');

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  let isValid = false;
  if (login.length >= 4 && login.length <= 16) {
    isValid = true;
  }
  return isValid;
};

const isLoginUnique = function(allLogins, login) {
  let isUnique = false;
  if (allLogins.includes(login) === false) {
    isUnique = true;
  }
  return isUnique;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  if (isLoginUnique(allLogins, login) === false) {
    return 'Такой логин уже используется!';
  }
  if (
    isLoginValid(login) === true &&
    isLoginUnique(allLogins, login) === true
  ) {
    allLogins.push(login);
  }
  return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
