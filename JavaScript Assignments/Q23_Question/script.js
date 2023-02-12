// Write a program to check that the number given by the user is a prime number or not.

const primeNumber = (num) => {
  if (num <= 1) {
    return console.log('Invalid');
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log('IT IS NOT PRIME NUMBER');
    } else {
      return console.log('PRIME NUMBER');
    }
  }
};

primeNumber(60);
