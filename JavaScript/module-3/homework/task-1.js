console.log('~1~');

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
console.log(user);
user.hobby = 'skydiving';
console.log(user);
user.premium = false;
console.log(user);
const userKeys = Object.keys(user);
console.log(userKeys);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}
