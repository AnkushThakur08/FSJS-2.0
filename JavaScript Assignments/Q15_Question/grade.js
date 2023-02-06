/* 15. Write a program which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F 
*/

const studentMarks = 79;

if (studentMarks >= 80) {
  return console.log('Student Grade is: A');
} else if (studentMarks >= 70 && studentMarks <= 79) {
  return console.log('Student Grade is: B');
} else if (studentMarks >= 60 && studentMarks <= 69) {
  return console.log('Student Grade is: C');
} else if (studentMarks >= 50 && studentMarks <= 59) {
  return console.log('Student Grade is: D');
} else {
  return console.log('Student Grade is: F');
}
