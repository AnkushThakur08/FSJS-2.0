const array = [
  {
    name: 'ankush',
    email: 'ankush@gmail.com',
    phoneNumner: 988,
    number: 4,
  },

  {
    name: 'ankush2',
    email: 'ankush2@gmail.com',
    phoneNumner: 988,
    number: 2,
  },

  {
    name: 'ankush3',
    email: 'ankush3@gmail.com',
    phoneNumner: 988,
    number: 3,
  },
];

array.map((item) => {
  console.log(item);
  if (item.number % 2 === 0) {
    Object.assign(item, { name: 'Harish' });
  }
});

console.log(array);
