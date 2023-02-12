// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).
const PrimeNumber = () => {
  for (let num = 0; num <= 100; num++) {
    let isPrime = true;
    if (num === 0 || num === 1) {
      isPrime = false;
    }
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(num);
    }
  }
};

PrimeNumber();
