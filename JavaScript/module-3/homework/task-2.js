console.log('~2~');

const countProps = function(obj) {
  const keys = Object.keys(obj);
  let props = 0;
  for (let i = 0; i < keys.length; i += 1) {
    props += 1;
  }
  return `Кол-во свойств в обьекте: ${props}`;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
