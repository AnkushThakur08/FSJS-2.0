var num1 = '121';
let n = num1.length;
console.log('VALUE', n);
if (num1 <= 99) {
  console.log('ANKUSH');
  document.getElementById('num1').innerHTML = Math.round(num1).toFixed(2);
} else {
  document.getElementById('num1').innerHTML = num1 / Math.pow(10, n - 2);
}

var num2 = '1.341';
document.getElementById('num2').innerHTML = (
  Math.round(num2 * 100) / 100
).toFixed(2);

var num3 = '1.345';
document.getElementById('num3').innerHTML = (
  Math.round(num3 * 100) / 100
).toFixed(2);
