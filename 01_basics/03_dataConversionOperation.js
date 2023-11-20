// let score = "33"
// console.log(score);
// console.log(typeof score);
// console.log(typeof (score));    // method type. either of the two can be used

// // type conversion from any datatype to NUMBER - we use Number (first letter in caps form)
// let valueInNumber = Number(score)           // the converted value is stored in this variable
// console.log(typeof valueInNumber); 


// let key = "33abc"; 
// console.log(typeof key); 
// let newValue = Number(key)
// console.log(newValue);                       // returns NaN    
// console.log(typeof newValue);               // returns number type 


// let temp = null 
// console.log(typeof temp);                    //returns object
// let newtemp = Number(temp)
// console.log(newtemp);                        //returns 0
// console.log(typeof newtemp);                 //returns number type   


// let old = undefined 
// console.log(typeof old);                    //returns undefined
// let change = Number(old)
// console.log(change);                        //returns NaN
// console.log(typeof change);                 //returns number type

// let x = true 
// console.log(typeof x );                    //returns boolean
// let y = Number(x)
// console.log(y);                        //returns 1
// console.log(typeof y);                 //returns number type 


// let p = "sanjana" 
// console.log(typeof p);                    //returns string
// let q = Number(p)
// console.log(q);                        //returns NaN
// console.log(typeof q);                 //returns number type 


//notes
// "33" => 33
// "33abc" => NaN
// true = 1 ; False = 0;


// let isLoggedIn = 1
// console.log(isLoggedIn);                   //returns 1
// let newLoggedIn = Boolean(isLoggedIn)     
// console.log(newLoggedIn);                   //returns true
// console.log(typeof newLoggedIn);            //returns boolean

// 1 => true ; 0 => false ; "" => false ; "sanjana" => true


// String conversion 
let oldString = 33
console.log(oldString);
let newString = String(oldString);
console.log(newString);
console.log(typeof newString);


//******************************************Operations***********************************************//

let value = 3;
let negValue = -3;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);


let str1 = "hello"
let str2 = "sanjana"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3+4)*5%3);
// console.log(+true);
console.log("");   // prefix and postfix

let num1,num2,num3

num1=num2=num3=2 // bad practice

let gameCounter =100
gameCounter++
console.log(gameCounter);