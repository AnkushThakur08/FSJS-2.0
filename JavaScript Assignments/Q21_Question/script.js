/* 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */

const countries = [
  'India',
  'Canada',
  'South Africa',
  'USA',
  'Argentina',
  'United States',
  'United Kingdom',
  'Japan',
  'Russia',
  'China',
  'Ethiopia',
];

const editArray = (item) => {
  const result = countries.indexOf(item);
  console.log(result);
  if (result !== -1) {
    console.log(countries[result].toUpperCase());
    console.log(countries);
  } else {
    countries.push(item);
    console.log(countries);
  }
};

editArray('Ethiopia');
