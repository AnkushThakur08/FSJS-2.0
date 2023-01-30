/*  09. Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value. */

const name = 'Ankush'; /* Truthy Value */
const age = 24; /* Truthy Value */
const isMale = true; /* Boolean Value */

if (name) {
  console.log('TRUE');
}

if (age) {
  console.log('TRUE');
}

if (isMale) {
  console.log('TRUE');
}

// Fasly Example

const name2 = ''; /* Falsy Value */
const age2 = 0; /* Falsy Value */
const isFemale = false; /* Falsy Value */

if (!name2) {
  console.log('FALSE');
}

if (!age2) {
  console.log('FALSE');
}

if (!isFemale) {
  console.log('FALSE');
}
