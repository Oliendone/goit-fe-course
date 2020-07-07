import users from './users.js';

// ====1====

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));

// ===2===

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

// ===3===

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log(getUsersWithGender(users, 'male'));

// ===4===

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

// ===5===

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// ===6===

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

// ===7===

const calculateTotalBalance = users => {
  return users.reduce((acc, userValue) => acc + userValue.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// ===8===

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// ===9===

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((prev, next) => prev.friends - next.friends)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// ===10===

const getSortedUniqueSkills = users => {
  const allSkills = users.reduce((skill, user) => {
    return skill.includes(user.skills) ? skill : [...skill, ...user.skills];
  }, []);
  const uniqueSkills = allSkills.filter((skill, index) => {
    return allSkills.indexOf(skill) === index;
  });
  const sortedSkills = uniqueSkills.sort();
  return sortedSkills;
};

console.log(getSortedUniqueSkills(users));
