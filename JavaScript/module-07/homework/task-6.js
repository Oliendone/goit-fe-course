const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => {
  event.target.value.length === Number(inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
  event.target.value.length === 6 && inputRef.classList.contains('invalid')
    ? inputRef.classList.remove('invalid')
    : '';
});
