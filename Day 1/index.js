console.log("Hello");

console.log("I am an internal JS script in Head Tag");
// alert("Click OK to Load page");

// Js is Case Sensitive
// name != Name

// Variables - Temporary Memory Location
// It should not start with a number
// Should not be a reserved keywords
// Should not start with a symbol


var fname = 'Prasad'; 
let city = 'Mumbai'; //2015
const company = 'LetsUpgrade';

console.log(fname, city, company);
// console.log(fname + " lives in " + city + " and works at "+ company);

// String literals
var sentence = `${fname} lives in ${city} and works at ${company}`;

console.log(sentence);

// Data Types
let state = "Maharashtra";
let age = 25;
let isAdult = true;
let arr = ['Gaming', 34, false, [1,2,4,5]];
let obj1 = {
    fname : 'Dinesh',
    age:23,
    city:'Pune',
    isAdult:true,
}
let obj2 = {
    fname : 'Tarun',
    age:21,
    city:'Jaipur',
    isAdult:true,
}
let obj3 = {
    fname : 'Shreyash',
    age:17,
    city:'Noida',
    isAdult:false,
}




console.log(state);
console.log(age);
console.log(isAdult);
console.log(arr);
console.log(obj1);
// console.log(state);


// Console Tricks
 console.error("This is an error");
 console.warn("This is a warning!");
 console.info("This is an info");

console.log(obj1,obj2,obj3);
console.table([obj1,obj2,obj3]);

let css = "color:red;background-color:white;font-size:32px;border-radius:15px;";

console.log("%c I am a boring Text",css);


// Basics of JS - Datatypes,Operators, Loops, Switch Case, Conditional Statements, Functions

// Advance JS - ES6 Concepts, DOM Manipulation, Form Validation, Get Data from API and show on webpage

