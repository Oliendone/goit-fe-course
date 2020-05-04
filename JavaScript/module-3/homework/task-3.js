console.log('~3~');

const findLongestWord = function(string) {
  const arrayOfStrings = string.split(' ');
  let longestWord = 0;
  let maxlengthWord = null;
  for (let i = 0; i < arrayOfStrings.length; i += 1) {
    if (arrayOfStrings[i].length > longestWord) {
      longestWord = arrayOfStrings[i].length;
      maxlengthWord = arrayOfStrings[i];
    }
  }
  return maxlengthWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you'));
