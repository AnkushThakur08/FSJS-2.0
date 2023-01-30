//  07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const brandNames = [
  'Facebook ',
  'pw skills',
  ' Google',
  ' Microsoft',
  'pw skills',
  ' Apple',
  ' IBM',
  ' Oracle',
  'pw skills',
  ' Amazon',
];

const findIndexAtEnd = brandNames.lastIndexOf('pw skills');
const findIndexAtBeginning = brandNames.indexOf('pw skills');

console.log(findIndexAtEnd);
console.log(findIndexAtBeginning);

// Short Answer
console.log(brandNames.lastIndexOf('pw skills'));
console.log(brandNames.indexOf('pw skills'));

// For UnderStanding
/* 
The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

It searches the string from the end to the beginning & method returns -1 if the value is not found.

It  is case sensitive. 
*/
