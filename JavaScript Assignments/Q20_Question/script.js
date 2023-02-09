/* 20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea' */

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

const addItemAtBeginning = (item) => {
  if (shoppingCart.includes(item)) {
    console.log('Already Exists');
  } else {
    shoppingCart.unshift(item);
    console.log(shoppingCart);
  }
};

const addItemAtEnd = (item) => {
  if (shoppingCart.includes(item)) {
    console.log('Item already exists');
  } else {
    shoppingCart.push(item);
    console.log(shoppingCart);
  }
};

const removeItem = (item) => {
  const getIndex = shoppingCart.indexOf(item);
  console.log(getIndex);
  shoppingCart.splice(getIndex);
  console.log(shoppingCart);
};

const modifyItem = (item, newName) => {
  const getIndex = shoppingCart.indexOf(item);
  console.log(getIndex);
  shoppingCart[getIndex] = newName;
  console.log(shoppingCart);
};

addItemAtBeginning('Meat');
addItemAtEnd('Sugar');
removeItem('Honey', 1);
modifyItem('Tea', 'Green Tea');
