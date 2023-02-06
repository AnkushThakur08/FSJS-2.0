// 17. Write a program which tells the number of days in a month.

const userInput = prompt('Enter The Month').toLowerCase();

switch (userInput) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    alert('This month contains 31 Days');
    break;

  case 'april':
  case 'june':
  case 'september':
  case 'november':
    alert('This month contains 30 Days ');
    break;

  case 'february':
    alert('This month contains 28 Days');
    break;
  default:
    alert('Invalid Input');
    break;
}
