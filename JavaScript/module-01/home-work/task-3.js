console.log('~3~');
const ADMIN_PASSWORD = '123456h';
console.log('Пароль администратора: ', ADMIN_PASSWORD);
let message = prompt('Пожалуйста, введите пароль');
if (message === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
}
alert(message);
