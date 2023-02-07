console.log("Taking Input from user");


//Alert
// alert("I am a simple alert!");

//Prompt
//syntax:- prompt("title","default value" [optional])
// returns value or null
let age = prompt("Enter your age",21);

// Convert to number
// let age = Number(prompt("Enter your age",21));
console.log(age, typeof age);


//Confirm
// Return true or false
// OK -> true
// Cancel -> false

let val = confirm("Do you want to exit the page?");
console.log(val);