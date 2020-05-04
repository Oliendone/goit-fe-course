console.log('~5~');

const checkForSpam = function(message) {
  const messageLow = message.toLowerCase();
  const messageCheck =
    messageLow.includes('sale') || messageLow.includes('spam');
  return messageCheck;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
