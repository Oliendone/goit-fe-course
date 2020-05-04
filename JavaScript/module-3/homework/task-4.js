console.log('~4~');

const formatString = function(string) {
  let text = '';
  for (let i = 0; i < string.length; i += 1) {
    if (i <= 40 - 1) {
      text += string[i];
    } else {
      text += '...';
      break;
    }
  }
  return text;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
