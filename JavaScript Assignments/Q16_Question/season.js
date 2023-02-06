/* 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */
const userInput = prompt('Please Enter the Month').toLowerCase();

if (userInput == 'september' || userInput == 'october' || userInput == 'november') {
  alert(' the season is Autumn');
} else if (userInput == 'december' || userInput == 'january' || userInput == 'february') {
  alert(' the season is Winter');
} else if (userInput == 'march' || userInput == 'april' || userInput == 'may') {
  alert(' the season is Spring');
} else if (userInput == 'june' || userInput == 'july' || userInput == 'august') {
  alert(' the season is Summer');
} else {
  alert('Invalid Input');
}
