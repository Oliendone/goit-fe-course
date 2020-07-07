const animal = { eats: true };
const dog = { barks: true };

dog.__proto__ = animal;

// В dog можно найти оба свойства
console.log(dog.barks); // true
console.log(dog.eats);
