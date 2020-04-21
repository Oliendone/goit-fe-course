console.log('~3~');
const ADMIN_PASSWORD = '123456h';
console.log('Пароль администратора: ', ADMIN_PASSWORD);
let message = prompt('Пожалуйста, введите пароль');
if (message === null) {
  message = 'Отменено пользователем!';
} else if (message === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
console.log(message);
