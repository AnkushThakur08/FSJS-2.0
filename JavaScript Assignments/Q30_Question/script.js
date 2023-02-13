// Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

const addNumbers = (...agrs) => {
  let sum = 0;

  agrs.map((item) => {
    sum = sum + item;
  });
  console.log('Addition is: ', sum);
};

const subtractNumber = (...agrs) => {
  let sum = agrs[0];

  agrs.map((item) => {
    result = sum - item;
  });
  console.log('Subtract is: ', result);
};

const mutiplyNumber = (...agrs) => {
  let sum = agrs[0];

  agrs.map((item) => {
    result = sum * item;
  });
  console.log('Multiply Number', result);
};

const divideNumber = (...agrs) => {
  let sum = agrs[0];

  agrs.map((item) => {
    result = sum / item;
  });
  console.log('Multiply Number', result);
};

addNumbers(10, 20, 30, 40, 50);
subtractNumber(10, 20);
mutiplyNumber(10, 10);
divideNumber(10, 2);
