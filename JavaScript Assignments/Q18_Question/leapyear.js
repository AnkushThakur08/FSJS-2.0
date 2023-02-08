// 18. Write a program which tells the number of days in a month, now consider leap year.

const userInput = prompt('Enter the Month ').toLowerCase();

switch (userInput) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    alert('31 Days');
    break;

  case 'april':
  case 'june':
  case 'september':
  case 'november':
    alert('30 Days');
    break;

  case 'february':
    const year = prompt('Enter the year');

    console.log(year);
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      alert('LEAP YEAR - 29 Days');
    } else {
      alert('NOT A LEAP YEAR - 28 Days');
    }
    break;

  default:
    alert('Invalid Input');
}
