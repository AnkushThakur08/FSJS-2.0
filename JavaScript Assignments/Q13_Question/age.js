// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const age = prompt('Enter your age');
console.log(age);

// const waitYear = 18 - age;

if (age >= 18) {
  alert('You are old enough to drive');
} else {
  alert(`Please Wait for next ${18 - age} years, to get eligible for Driving`);
}
