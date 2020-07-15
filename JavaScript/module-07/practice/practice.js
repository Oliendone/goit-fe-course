const person = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
  },
  {
    firstName: 'Margo',
    lastName: 'Savato',
    age: 25,
    eyeColor: 'green',
  },
];

// ==============

const titleRef = document.querySelector('.title_main');
console.dir(titleRef);

titleRef.style.color = 'red';

const animalsListRef = document.querySelector('ul');
console.log(animalsListRef);

const firstListElem = animalsListRef.firstElementChild;
firstListElem.textContent = 'The Cat. His name is John';
firstListElem.classList.add('list-element__cat');
console.log(firstListElem);

// ==========

const createPersonCard = person => {
  const containerRef = document.createElement('div');
  containerRef.classList.add('person-card');

  const firstNameRef = document.createElement('h1');
  firstNameRef.textContent = person.firstName;
  firstNameRef.classList.add('person__name');

  const lastNameRef = document.createElement('h2');
  lastNameRef.textContent = person.lastName;
  lastNameRef.classList.add('person__lastname');

  const ageRef = document.createElement('p');
  ageRef.textContent = person.age;
  ageRef.classList.add('person__age');

  const eyeColorRef = document.createElement('p');
  eyeColorRef.textContent = person.eyeColor;
  eyeColorRef.classList.add('person__eyecolor');

  containerRef.append(firstNameRef, lastNameRef, ageRef, eyeColorRef);

  return containerRef;
};

console.log(createPersonCard(person[0]));

const personCards = person.map(person => createPersonCard(person));

console.log(personCards);

const personListRef = document.querySelector('.persons');
console.log(personListRef);

personListRef.append(...personCards);
