"use strict" // treat all JS code as newer version

 // alert( ) // we are using nodejs, not browser (where we receive output in console in html document)

 console.log(2
    + 2)     //code readability should be high

    // primitive datatypes
    let name = "poopchand"  // string => ""
    let age = 2             // number => 2 to power 53 , bigint
    let isLoggedIn = true   //boolean => true/false
    let state;              //undefined/ not used any datatype here or just declared and not assigned any value
    let temp = null         // assigning a null value defines that the variable is empty 
                            // symbol => unique

console.log(typeof state);
console.log(typeof temp);
console.log(typeof null);       // returns object
console.log(typeof undefined);  // returns undefined
    

                            // self-practice examples
            // declare two variables and equate one with the latter                  
let sanj = 2;       
let roop = sanj;  
console.log(roop);        
console.log(sanj);
roop = 5; 
console.log(roop);
console.log(sanj);

//a numeric value can also be asigned to a string datatype under ""
let a = "5";
console.log(a);

const today = "wednesday"   // returns undefined. the string value should be assigned within ""

console.log(today);



// undefined and null examples
let address = null        
console.log(typeof address)          // returns type as object
