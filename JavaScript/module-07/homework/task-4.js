let counterValue = 0;

const counterRef = document.querySelector('#value');

const increseValue = () => {
  counterValue += 1;
  counterRef.innerHTML = counterValue;
};

const decreaseValue = () => {
  counterValue -= 1;
  counterRef.innerHTML = counterValue;
};

const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]',
);
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]',
);

decrementButtonRef.addEventListener('click', decreaseValue);
incrementButtonRef.addEventListener('click', increseValue);
