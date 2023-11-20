// old way of string concatenation
const name = "string"
const repoValue = 50
console.log(name   +   repoValue + " value");

// latest- BACTICS way of string concatenation
console.log(`my name is ${name} and my repoValue is ${repoValue}`);
//advantages- we can use methods with the string variable
console.log(`my name is ${name.ToUpperCase}`);

// Another way of declaring string variable 
const gameName = new String('sanjana-patil')

//Different methods available in string
 // To find the word using index value
 console.log(gameName[0]);
 //syntax to access prototype object. using this object many methods inside string can be accessed. from the insept console window
 console.log(gameName.__proto__);
 
 //to access length of the string
 console.log(gameName.length);

 // to comvert the string to uppercase
 console.log(gameName.toUpperCase());

 // to access the character at the particular index value
 console.log(gameName.charAt(1));

 // to access the index value of particular character
 console.log(gameName.indexOf('s'));

 // to access the substring
//  console.log(gameName.substring(0,4));

//  // another method
//  const newString = gameName.substring(0,5)
//  console.log(newString);

//to slice the substring
const anotherString = gameName.slice(-2,1)
console.log(anotherString);

// to trim the extra space in the string
const newStringOne = "    sanjana     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanjana.com/sanjana%20patil"
console.log(url);
// In the browser cannot ditact the space ex "https://sanjana.com/sanjana patil" to overcome this url encodes
// "https://sanjana.com/sanjana%20patil"

// use replace method to replace new values
console.log(url.replace('%20','-'));

// to check if a word exists inside the url
console.log(url.includes('sanjana'));
console.log(url.includes('roop'));

// using split
console.log(gameName.split('-'));

//using bold method
console.log(gameName.bold());

let str1 = "roopchand"
let str2 = " from gokak"
//using concat method
console.log(str1.concat('',str2));





