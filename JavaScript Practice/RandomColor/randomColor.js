let letter = '01234556789ABCDEF';
var result = '#';

for (i = 0; i < 6; i++) {
  result = result + letter[Math.floor(Math.random() * 16)];
}
console.log(result);
