const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.dir(textRef);

inputRef.addEventListener('input', event => {
  const size = inputRef.value;
  console.log(size);
  textRef.style.fontSize = size + 'px';
});
