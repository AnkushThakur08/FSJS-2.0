//  01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

const name = 'Ankush Thakur';
const age = 24;
const isMarried = false;
const country = 'India';
const NumberOfChildren = null;
const marriageYear = undefined;

// console.log(name);
// console.log(typeof name);

// console.log('\n');

// console.log(age);
// console.log(typeof age);

// console.log('\n');

// console.log(isMarried);
// console.log(typeof isMarried);

// console.log('\n');

// console.log(country);
// console.log(typeof country);

// console.log('\n');

// console.log(NumberOfChildren);
// console.log(typeof NumberOfChildren);

// console.log('\n');

// console.log(marriageYear);
// console.log(typeof marriageYear);

// BETTER APPROACH
console.log(`
User Name is: ${name} and its Type is: ${typeof name}
His Age is:  ${age} and its Type is: ${typeof age}
His marital status is: ${isMarried} and its Type is: ${typeof isMarried}
His country is: ${country} and its Type is: ${typeof country}
His children are: ${NumberOfChildren} and its Type is: ${typeof NumberOfChildren}
His Marriage Year is:${marriageYear} and its Type is: ${typeof marriageYear}
`);
