// const score = 400
// console.log(score);

// // If you want to explicity define the number datatype
// const balance = new Number(100)
// console.log(balance);

// // converting number to string
// console.log(balance.toString());

// // finding length of converted string
// console.log(balance.toString().length);

// //To make the value precision to two decimals
// console.log(balance.toFixed(2));

// // rounding the number to the closest precision value. The first priority is given before decimal place.
// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3));

// // representing 100's in indian standard unit
// const number = 1000000
// console.log(number.toLocaleString());  // US standard
// console.log(number.toLocaleString('en-IN'));


// //***********************Maths*****************//

// // Math object. Various math properties can be accessed in inspect
// console.log(Math);

// // converts only negative numbers to positive
// console.log(Math.abs(-5));

// // rounding off the number 
// console.log(Math.round(2.5));
// console.log(Math.round(3.8));

// // rounding off the decimal value to the next number
// console.log(Math.ceil(4.2));

// //rounding off the decimal value to the low number
// console.log(Math.floor(6.9));

// // To find the minimum value in an array
// console.log(Math.min(2,4,5,6));

// // To find the maximum value in an array
// console.log(Math.max(10,20,30,40));

// // using random method whose value lie between 0 and 1
// console.log(Math.random());
// console.log((Math.random()*10+1));

// // to avoid zero while using floor value we use +1
// console.log(Math.floor(Math.random()* 10)+1)

// // apart from 0 to 1 range. we can define the range of a value defining min and max 

// const min = 10
// const max = 20
// console.log(Math.floor(Math.random()*(max - min +1))+min); //to get the value within the range we add min at the last.


//practice the same 
const min = 5;
const max = 10;
console.log(Math.floor(Math.random()*(max-min +1 ))+min);

let val = 10;
console.log(val);
console.log(typeof val);

const newVal = new Number(10000)
console.log(newVal);

console.log(newVal.toString());
console.log(typeof newVal);
console.log(newVal.toLocaleString());