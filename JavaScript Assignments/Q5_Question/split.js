// 05. Declare a varibale and assign string value to it and then split it into an array using split() method

const favoriateLanguage = 'JavaScript';

const splitValue = favoriateLanguage.split();
const splitValue2 = favoriateLanguage.split('');

console.log(splitValue);
console.log(splitValue2);

// FOR UNDERSTANDING
/* 
The split() method in JavaScript is used to split a string into an array of substrings, based on a specified delimiter.

Syntax: string.split(delimiter, limit)

delimiter: The character(s) to use for separating the string.
limit (optional): The number of substrings to return in the array.

let str = "Hello, World!";
let arr = str.split(", ");
console.log(arr); // Output: ["Hello", "World!"]


let str = "apple,banana,cherry";
let arr = str.split(",");
console.log(arr); // Output: ["apple", "banana", "cherry"]

let str2 = "apple.banana.cherry";
let arr2 = str2.split(".");
console.log(arr2); // Output: ["apple", "banana", "cherry"]

let str3 = "apple-banana-cherry";
let arr3 = str3.split("-");
console.log(arr3); // Output: ["apple", "banana", "cherry"]

let str4 = "Hello World";
let arr4 = str4.split(" ");
console.log(arr4); // Output: ["Hello", "World"]
*/
