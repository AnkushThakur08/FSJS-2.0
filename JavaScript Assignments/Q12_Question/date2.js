// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const current = new Date();

const format1 = current.toISOString();
console.log(format1);

const format2 = current.toLocaleString('en-CA', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});
console.log(format2);

const format3 = current.toLocaleString();
console.log(format3);

// FOR UnderStanding
/* 
date.getFullYear(); // returns the year (4 digits)
date.getMonth(); // returns the month (0-11)
date.getDate(); // returns the day of the month (1-31)
date.getHours(); // returns the hour (0-23)
date.getMinutes(); // returns the minute (0-59)
date.getSeconds(); // returns the second (0-59)
date.getMilliseconds(); // returns the millisecond (0-999)


date.toString(); // returns a string representation of the date
date.toDateString(); // returns the date in a human-readable format
date.toISOString(); // returns the date in ISO-8601 format
date.toUTCString(); // returns the date in UTC format */
