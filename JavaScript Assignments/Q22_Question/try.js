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

if (countries.indexOf('Ethiopia') !== -1) {
  const f = countries.filter((element) => element !== 'Ethiopia');
  console.log(f);
  const d = 'Ethiopia';
  const c = d.toUpperCase();
  f.push(c);
  console.log(f);
  console.log('REAL ARRAY', countries);
} else {
  countries.push('Ethiopia');
}
