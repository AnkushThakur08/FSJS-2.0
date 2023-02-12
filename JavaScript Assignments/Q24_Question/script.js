// Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included)

const evenArray = [];
const oddArray = [];

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenArray.push(i);
  } else oddArray.push(i);
}

console.log('evenArray', evenArray);
console.log('oddArray', oddArray);
