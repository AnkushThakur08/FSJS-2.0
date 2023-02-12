/* 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more */

const getBMI = (weight, height) => {
  console.log('weight: ' + weight + ', height: ' + height);

  const calculatedBMI = Math.floor(weight / (height * height));
  console.log(calculatedBMI);

  if (calculatedBMI < 18.5) {
    return console.log('UnderWeight');
  } else if (calculatedBMI > 18.5 && calculatedBMI < 24.9) {
    return console.log('Normal');
  } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
    return console.log('OverWeight');
  } else if (calculatedBMI >= 30) {
    return console.log('Obese');
  }
};

getBMI(70, 1.78);
getBMI(80, 1.78);
