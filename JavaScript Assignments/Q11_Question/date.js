/* 11. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. */

const currentYear = new Date().getFullYear();
console.log(currentYear);

const currentMonth = new Date().getMonth();
console.log(currentMonth);

const currentDate = new Date().getDate();
console.log(currentDate);

const dayAsNumber = new Date().getDay();
console.log(dayAsNumber);

const getHour = new Date().getHours();
console.log(getHour);

const getMinutes = new Date().getMinutes();
console.log(getMinutes);
