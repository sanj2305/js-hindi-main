// based on the data stored in memory and how to access it. It is divided into primitive and Non-primitive

//Primitive - CALL BY VALUE - which means when we try to copy the data we don't get the actual reference data instead it copies the data and allows us to edit.

// primitive - STRING, NUMBER, NULL, UNDEFINED, SYMBOL, BIGInt




const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemperature = null;
// let userEmail; / let userEmail = undefined;

//symbol

const id = Symbol('123');
const anotherId = Symbol('123') 

// const bigInt = 78679453653234556787n 


// Reference (Non-primitive) - Here the values get directly allocated in the memory.
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "sanjana",
    age: "20"
}

//function definition 
//function(){}   //  storing function in a variable 

const myFunction = function() {
    console.log("Hello world");
}

// // To know the type of datatype.
// console.log(typeof bigInt);             // returns undefined
// console.log(typeof myObj);              // returns object
// console.log(typeof outsideTemperature); // returns object
// console.log(typeof scoreValue)          // returns number
// console.log(typeof myFunction);         //returns function
// console.log(typeof myCar);              // returns undefined
// console.log(typeof undefined);          // returns undefined
// console.log(typeof [1,2,3]);            // returns object


//datatypes that contain values
//string, number, boolean, Object,Array, Date
console.log(typeof "sanjana");       // returns string
console.log(typeof 123);             //returns number
console.log(typeof true);             // returns boolean
console.log(typeof {name: "sanjana", age: 20});   //returns object
console.log(typeof [0,1,2,3,4,5,])                //returns object 

// 6 types of objects
// Object, Date, Array, String, Number,Boolean

// console.log(typeof new Date());   //returns object
// console.log(typeof "styh567");    //returns string
//console.log(typeof 897uyyh);    // returns Invalid    


// two datatypes that cannot contain values.
// let value = null
// console.log(typeof value);        // returns object
// let temp;
// console.log(typeof temp);          // returns undefined
// NOTE: null and undefined are same in value but different in type.
console.log(null == undefined);    //returns true
console.log(null === undefined);    //returns false

//link to study
// tc39.es/ecma262

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//----------------------------Memory -------------------------------------------------------------------
// Stack (primitive) , Heap(non-primitive)

// let myYoutubename = "sanjanapatil"
// let anotherName = myYoutubename
// console.log(anotherName);

// anotherName = "changedName"
// console.log(myYoutubename);
// console.log(anotherName);
// // here the original value remains unchanged whereas the copied value changes to the newest assigned value of anotherName.
// // This is how stack works. the reference is not changed whereas the copied value only get changed.


// let userOne = {
//     email : "original@google.com"
//     upi: "user@ybl"
// }

// userTwo = userOne;
// userTwo.email = "change@google.com"

// console.log(userTwo.email);
// console.log(userOne.email);



let a = 1;
let b = 2;
let c = 3;
a = b 
b = c
console.log(b)

let myName = "sita"
let myFriend = "geeta"
myFriend = myName;
console.log(myName);

let obj = {
    name : 'aba',
    age: 20,
    subject: 'social'
}

obj.name = 'baba'
console.log(obj.name); // returns baba

newObj = obj;
newObj.name = 'cia'
console.log(newObj.name);
console.log(obj.name);
// NOTE: In heap memory, where objects are located. any changes made in the object will reflect directly in the refernce copy. 