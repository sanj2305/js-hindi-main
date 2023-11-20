// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// to create your own date
// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());
// to get time along with date
// let myCreatedDate = new Date(2023, 0, 23,5,3)
// console.log(myCreatedDate.toLocaleString());
// To display date in particular format
// let myCreatedDate = new Date("2023-01-15")
// console.log(myCreatedDate.toLocaleString());
// To display date in Indian format
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// to get timestamp ex used in polls and hotel booking
const myTimeStamp = Date.now()
console.log(myTimeStamp); // to calculate time becomes very difficult so we compare it with another time of some day
// to compare with date so that milliseconds can be compared
let myCreatedDatee = new Date("02-14-2023")
console.log(myCreatedDatee.getTime());


// To convert millisecond to second
console.log(Math.floor(Date.now()/1000));

// to get month and day
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1); // to make it easier we add one
console.log(newDate.getDay());

//
newDate.toLocaleString('default',{
    weekday:"long"
})

