/* 22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// const ages = [1, 2, 3, 4, 5, 6, 7];
// Ques 1
console.log('Sorted Array', ages.sort());
console.log('Min Value', Math.min(...ages));
console.log('Max Value', Math.max(...ages));

// Ques 2
const sortedArray = ages.sort();
console.log(sortedArray.length);
if (sortedArray.length % 2 === 0) {
  /*------------------------ sortedArray[4] ---------------------------- sortedArray[5] */
  console.log('Median EVEN', (sortedArray[sortedArray.length / 2 - 1] + sortedArray[sortedArray.length / 2]) / 2);
} else {
  const data = Math.floor(sortedArray.length / 2);
  console.log('Median Odd', sortedArray[data]);
}

// Ques 3

let sum = 0;
ages.map((individualAges) => {
  sum = sum + individualAges;
});
console.log('AVG', Math.floor(sum / ages.length));
