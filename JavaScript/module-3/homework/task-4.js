console.log('~4~');

const countTotalSalary = function(employees) {
  const salaries = Object.values(employees);
  let allSalary = 0;
  for (salary of salaries) {
    allSalary += salary;
  }
  return `Сумма всех зарплат: ${allSalary}`;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
